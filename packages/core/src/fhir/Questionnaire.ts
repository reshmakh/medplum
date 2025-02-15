/*
 * Generated by @medplum/generator
 * Do not edit manually.
 */

import { Attachment } from './Attachment';
import { CodeableConcept } from './CodeableConcept';
import { Coding } from './Coding';
import { ContactDetail } from './ContactDetail';
import { Extension } from './Extension';
import { Identifier } from './Identifier';
import { Meta } from './Meta';
import { Narrative } from './Narrative';
import { Period } from './Period';
import { Quantity } from './Quantity';
import { Reference } from './Reference';
import { Resource } from './Resource';
import { UsageContext } from './UsageContext';

/**
 * A structured set of questions intended to guide the collection of
 * answers from end-users. Questionnaires provide detailed control over
 * order, presentation, phraseology and grouping to allow coherent,
 * consistent data collection.
 */
export interface Questionnaire {

  /**
   * This is a Questionnaire resource
   */
  readonly resourceType: 'Questionnaire';

  /**
   * The logical id of the resource, as used in the URL for the resource.
   * Once assigned, this value never changes.
   */
  readonly id?: string;

  /**
   * The metadata about the resource. This is content that is maintained by
   * the infrastructure. Changes to the content might not always be
   * associated with version changes to the resource.
   */
  readonly meta?: Meta;

  /**
   * A reference to a set of rules that were followed when the resource was
   * constructed, and which must be understood when processing the content.
   * Often, this is a reference to an implementation guide that defines the
   * special rules along with other profiles etc.
   */
  readonly implicitRules?: string;

  /**
   * The base language in which the resource is written.
   */
  readonly language?: string;

  /**
   * A human-readable narrative that contains a summary of the resource and
   * can be used to represent the content of the resource to a human. The
   * narrative need not encode all the structured data, but is required to
   * contain sufficient detail to make it &quot;clinically safe&quot; for a human to
   * just read the narrative. Resource definitions may define what content
   * should be represented in the narrative to ensure clinical safety.
   */
  readonly text?: Narrative;

  /**
   * These resources do not have an independent existence apart from the
   * resource that contains them - they cannot be identified independently,
   * and nor can they have their own independent transaction scope.
   */
  readonly contained?: Resource[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource. To make the use of extensions
   * safe and manageable, there is a strict set of governance  applied to
   * the definition and use of extensions. Though any implementer can
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension.
   */
  readonly extension?: Extension[];

  /**
   * May be used to represent additional information that is not part of
   * the basic definition of the resource and that modifies the
   * understanding of the element that contains it and/or the understanding
   * of the containing element's descendants. Usually modifier elements
   * provide negation or qualification. To make the use of extensions safe
   * and manageable, there is a strict set of governance applied to the
   * definition and use of extensions. Though any implementer is allowed to
   * define an extension, there is a set of requirements that SHALL be met
   * as part of the definition of the extension. Applications processing a
   * resource are required to check for modifier extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * An absolute URI that is used to identify this questionnaire when it is
   * referenced in a specification, model, design or an instance; also
   * called its canonical identifier. This SHOULD be globally unique and
   * SHOULD be a literal address at which at which an authoritative
   * instance of this questionnaire is (or will be) published. This URL can
   * be the target of a canonical reference. It SHALL remain the same when
   * the questionnaire is stored on different servers.
   */
  readonly url?: string;

  /**
   * A formal identifier that is used to identify this questionnaire when
   * it is represented in other formats, or referenced in a specification,
   * model, design or an instance.
   */
  readonly identifier?: Identifier[];

  /**
   * The identifier that is used to identify this version of the
   * questionnaire when it is referenced in a specification, model, design
   * or instance. This is an arbitrary value managed by the questionnaire
   * author and is not expected to be globally unique. For example, it
   * might be a timestamp (e.g. yyyymmdd) if a managed version is not
   * available. There is also no expectation that versions can be placed in
   * a lexicographical sequence.
   */
  readonly version?: string;

  /**
   * A natural language name identifying the questionnaire. This name
   * should be usable as an identifier for the module by machine processing
   * applications such as code generation.
   */
  readonly name?: string;

  /**
   * A short, descriptive, user-friendly title for the questionnaire.
   */
  readonly title?: string;

  /**
   * The URL of a Questionnaire that this Questionnaire is based on.
   */
  readonly derivedFrom?: string[];

  /**
   * The status of this questionnaire. Enables tracking the life-cycle of
   * the content.
   */
  readonly status?: string;

  /**
   * A Boolean value to indicate that this questionnaire is authored for
   * testing purposes (or education/evaluation/marketing) and is not
   * intended to be used for genuine usage.
   */
  readonly experimental?: boolean;

  /**
   * The types of subjects that can be the subject of responses created for
   * the questionnaire.
   */
  readonly subjectType?: string[];

  /**
   * The date  (and optionally time) when the questionnaire was published.
   * The date must change when the business version changes and it must
   * change if the status code changes. In addition, it should change when
   * the substantive content of the questionnaire changes.
   */
  readonly date?: Date | string;

  /**
   * The name of the organization or individual that published the
   * questionnaire.
   */
  readonly publisher?: string;

  /**
   * Contact details to assist a user in finding and communicating with the
   * publisher.
   */
  readonly contact?: ContactDetail[];

  /**
   * A free text natural language description of the questionnaire from a
   * consumer's perspective.
   */
  readonly description?: string;

  /**
   * The content was developed with a focus and intent of supporting the
   * contexts that are listed. These contexts may be general categories
   * (gender, age, ...) or may be references to specific programs
   * (insurance plans, studies, ...) and may be used to assist with
   * indexing and searching for appropriate questionnaire instances.
   */
  readonly useContext?: UsageContext[];

  /**
   * A legal or geographic region in which the questionnaire is intended to
   * be used.
   */
  readonly jurisdiction?: CodeableConcept[];

  /**
   * Explanation of why this questionnaire is needed and why it has been
   * designed as it has.
   */
  readonly purpose?: string;

  /**
   * A copyright statement relating to the questionnaire and/or its
   * contents. Copyright statements are generally legal restrictions on the
   * use and publishing of the questionnaire.
   */
  readonly copyright?: string;

  /**
   * The date on which the resource content was approved by the publisher.
   * Approval happens once when the content is officially approved for
   * usage.
   */
  readonly approvalDate?: Date | string;

  /**
   * The date on which the resource content was last reviewed. Review
   * happens periodically after approval but does not change the original
   * approval date.
   */
  readonly lastReviewDate?: Date | string;

  /**
   * The period during which the questionnaire content was or is planned to
   * be in active use.
   */
  readonly effectivePeriod?: Period;

  /**
   * An identifier for this question or group of questions in a particular
   * terminology such as LOINC.
   */
  readonly code?: Coding[];

  /**
   * A particular question, question grouping or display text that is part
   * of the questionnaire.
   */
  readonly item?: QuestionnaireItem[];
}

/**
 * A structured set of questions intended to guide the collection of
 * answers from end-users. Questionnaires provide detailed control over
 * order, presentation, phraseology and grouping to allow coherent,
 * consistent data collection.
 */
export interface QuestionnaireAnswerOption {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  readonly valueInteger?: number;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  readonly valueDate?: string;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  readonly valueTime?: string;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  readonly valueString?: string;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  readonly valueCoding?: Coding;

  /**
   * A potential answer that's allowed as the answer to this question.
   */
  readonly valueReference?: Reference;

  /**
   * Indicates whether the answer value is selected when the list of
   * possible answers is initially shown.
   */
  readonly initialSelected?: boolean;
}

/**
 * A structured set of questions intended to guide the collection of
 * answers from end-users. Questionnaires provide detailed control over
 * order, presentation, phraseology and grouping to allow coherent,
 * consistent data collection.
 */
export interface QuestionnaireEnableWhen {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The linkId for the question whose answer (or lack of answer) governs
   * whether this item is enabled.
   */
  readonly question?: string;

  /**
   * Specifies the criteria by which the question is enabled.
   */
  readonly operator?: string;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  readonly answerBoolean?: boolean;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  readonly answerDecimal?: number;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  readonly answerInteger?: number;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  readonly answerDate?: string;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  readonly answerDateTime?: string;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  readonly answerTime?: string;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  readonly answerString?: string;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  readonly answerCoding?: Coding;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  readonly answerQuantity?: Quantity;

  /**
   * A value that the referenced question is tested using the specified
   * operator in order for the item to be enabled.
   */
  readonly answerReference?: Reference;
}

/**
 * A structured set of questions intended to guide the collection of
 * answers from end-users. Questionnaires provide detailed control over
 * order, presentation, phraseology and grouping to allow coherent,
 * consistent data collection.
 */
export interface QuestionnaireInitial {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * The actual value to for an initial answer.
   */
  readonly valueBoolean?: boolean;

  /**
   * The actual value to for an initial answer.
   */
  readonly valueDecimal?: number;

  /**
   * The actual value to for an initial answer.
   */
  readonly valueInteger?: number;

  /**
   * The actual value to for an initial answer.
   */
  readonly valueDate?: string;

  /**
   * The actual value to for an initial answer.
   */
  readonly valueDateTime?: string;

  /**
   * The actual value to for an initial answer.
   */
  readonly valueTime?: string;

  /**
   * The actual value to for an initial answer.
   */
  readonly valueString?: string;

  /**
   * The actual value to for an initial answer.
   */
  readonly valueUri?: string;

  /**
   * The actual value to for an initial answer.
   */
  readonly valueAttachment?: Attachment;

  /**
   * The actual value to for an initial answer.
   */
  readonly valueCoding?: Coding;

  /**
   * The actual value to for an initial answer.
   */
  readonly valueQuantity?: Quantity;

  /**
   * The actual value to for an initial answer.
   */
  readonly valueReference?: Reference;
}

/**
 * A structured set of questions intended to guide the collection of
 * answers from end-users. Questionnaires provide detailed control over
 * order, presentation, phraseology and grouping to allow coherent,
 * consistent data collection.
 */
export interface QuestionnaireItem {

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
   * May be used to represent additional information that is not part of
   * the basic definition of the element and that modifies the
   * understanding of the element in which it is contained and/or the
   * understanding of the containing element's descendants. Usually
   * modifier elements provide negation or qualification. To make the use
   * of extensions safe and manageable, there is a strict set of governance
   * applied to the definition and use of extensions. Though any
   * implementer can define an extension, there is a set of requirements
   * that SHALL be met as part of the definition of the extension.
   * Applications processing a resource are required to check for modifier
   * extensions.
   *
   * Modifier extensions SHALL NOT change the meaning of any elements on
   * Resource or DomainResource (including cannot change the meaning of
   * modifierExtension itself).
   */
  readonly modifierExtension?: Extension[];

  /**
   * An identifier that is unique within the Questionnaire allowing linkage
   * to the equivalent item in a QuestionnaireResponse resource.
   */
  readonly linkId?: string;

  /**
   * This element is a URI that refers to an [[[ElementDefinition]]] that
   * provides information about this item, including information that might
   * otherwise be included in the instance of the Questionnaire resource. A
   * detailed description of the construction of the URI is shown in
   * Comments, below. If this element is present then the following element
   * values MAY be derived from the Element Definition if the corresponding
   * elements of this Questionnaire resource instance have no value:
   *
   * * code (ElementDefinition.code)
   * * type (ElementDefinition.type)
   * * required (ElementDefinition.min)
   * * repeats (ElementDefinition.max)
   * * maxLength (ElementDefinition.maxLength)
   * * answerValueSet (ElementDefinition.binding)
   * * options (ElementDefinition.binding).
   */
  readonly definition?: string;

  /**
   * A terminology code that corresponds to this group or question (e.g. a
   * code from LOINC, which defines many questions and answers).
   */
  readonly code?: Coding[];

  /**
   * A short label for a particular group, question or set of display text
   * within the questionnaire used for reference by the individual
   * completing the questionnaire.
   */
  readonly prefix?: string;

  /**
   * The name of a section, the text of a question or text content for a
   * display item.
   */
  readonly text?: string;

  /**
   * The type of questionnaire item this is - whether text for display, a
   * grouping of other items or a particular type of data to be captured
   * (string, integer, coded choice, etc.).
   */
  readonly type?: string;

  /**
   * A constraint indicating that this item should only be enabled
   * (displayed/allow answers to be captured) when the specified condition
   * is true.
   */
  readonly enableWhen?: QuestionnaireEnableWhen[];

  /**
   * Controls how multiple enableWhen values are interpreted -  whether all
   * or any must be true.
   */
  readonly enableBehavior?: string;

  /**
   * An indication, if true, that the item must be present in a &quot;completed&quot;
   * QuestionnaireResponse.  If false, the item may be skipped when
   * answering the questionnaire.
   */
  readonly required?: boolean;

  /**
   * An indication, if true, that the item may occur multiple times in the
   * response, collecting multiple answers for questions or multiple sets
   * of answers for groups.
   */
  readonly repeats?: boolean;

  /**
   * An indication, when true, that the value cannot be changed by a human
   * respondent to the Questionnaire.
   */
  readonly readOnly?: boolean;

  /**
   * The maximum number of characters that are permitted in the answer to
   * be considered a &quot;valid&quot; QuestionnaireResponse.
   */
  readonly maxLength?: number;

  /**
   * A reference to a value set containing a list of codes representing
   * permitted answers for a &quot;choice&quot; or &quot;open-choice&quot; question.
   */
  readonly answerValueSet?: string;

  /**
   * One of the permitted answers for a &quot;choice&quot; or &quot;open-choice&quot; question.
   */
  readonly answerOption?: QuestionnaireAnswerOption[];

  /**
   * One or more values that should be pre-populated in the answer when
   * initially rendering the questionnaire for user input.
   */
  readonly initial?: QuestionnaireInitial[];

  /**
   * Text, questions and other groups to be nested beneath a question or
   * group.
   */
  readonly item?: QuestionnaireItem[];
}
