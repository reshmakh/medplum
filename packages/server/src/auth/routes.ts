import { Login, ProfileResource, Reference, User } from '@medplum/core';
import { randomUUID } from 'crypto';
import { Request, Response, Router } from 'express';
import { body, validationResult } from 'express-validator';
import { asyncWrap } from '../async';
import { badRequest, invalidRequest, isOk, repo, sendOutcome } from '../fhir';
import { getAuthTokens, TokenResult, tryLogin } from '../oauth';

export const authRouter = Router();

authRouter.post(
  '/login',
  body('clientId').exists().withMessage('Missing clientId'),
  body('email').isEmail().withMessage('Valid email address is required'),
  body('password').isLength({ min: 5 }).withMessage('Invalid password, must be at least 5 characters'),
  body('scope').notEmpty().withMessage('Missing scope'),
  body('role').notEmpty().withMessage('Missing role'),
  asyncWrap(async (req: Request, res: Response) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return sendOutcome(res, invalidRequest(errors));
    }

    const [loginOutcome, login] = await tryLogin({
      clientId: req.body.clientId,
      email: req.body.email,
      password: req.body.password,
      scope: req.body.scope,
      role: req.body.role,
      nonce: randomUUID(),
      remember: true
    });

    if (!isOk(loginOutcome)) {
      return sendOutcome(res, loginOutcome);
    }

    const [tokenOutcome, token] = await getAuthTokens(login as Login);
    if (!isOk(tokenOutcome)) {
      return sendOutcome(res, tokenOutcome);
    }

    const [userOutcome, user] = await repo.readReference<User>(login?.user as Reference);
    if (!isOk(userOutcome)) {
      return sendOutcome(res, userOutcome);
    }

    const [profileOutcome, profile] = await repo.readReference<ProfileResource>(login?.profile as Reference);
    if (!isOk(profileOutcome)) {
      return sendOutcome(res, profileOutcome);
    }

    if (!profile) {
      return sendOutcome(res, badRequest('Invalid profile'));
    }

    return res.status(200).json({
      user,
      profile,
      idToken: (token as TokenResult).idToken,
      accessToken: (token as TokenResult).accessToken,
      refreshToken: (token as TokenResult).refreshToken
    });
  }));
