/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { Coding } from './Coding';
import { Extension } from './Extension';
import { Reference } from './Reference';

/**
 * A signature along with supporting context. The signature may be a
 * digital signature that is cryptographic in nature, or some other
 * signature acceptable to the domain. This other signature may be as
 * simple as a graphical image representing a hand-written signature, or
 * a signature ceremony Different signature approaches have different
 * utilities.
 */
export interface Signature {

  /**
   * Unique id for the element within a resource (for internal references).
   * This may be any string value that does not contain spaces.
   */
  readonly id?: string;

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the element. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * An indication of the reason that the entity signed this document. This
   * may be explicitly included as part of the signature information and
   * can be used when determining accountability for various actions
   * concerning the document.
   */
  readonly type?: Coding[];

  /**
   * When the digital signature was signed.
   */
  readonly when?: Date | string;

  /**
   * A reference to an application-usable description of the identity that
   * signed  (e.g. the signature used their private key).
   */
  readonly who?: Reference;

  /**
   * A reference to an application-usable description of the identity that
   * is represented by the signature.
   */
  readonly onBehalfOf?: Reference;

  /**
   * A mime type that indicates the technical format of the target
   * resources signed by the signature.
   */
  readonly targetFormat?: string;

  /**
   * A mime type that indicates the technical format of the signature.
   * Important mime types are application/signature+xml for X ML DigSig,
   * application/jose for JWS, and image/* for a graphical image of a
   * signature, etc.
   */
  readonly sigFormat?: string;

  /**
   * The base64 encoding of the Signature content. When signature is not
   * recorded electronically this element would be empty.
   */
  readonly data?: string;
}
