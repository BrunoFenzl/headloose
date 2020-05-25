import { prop } from '@typegoose/typegoose';
import { Option } from './option';

const attributesInputSDL = `
  input AttributesInput {
    meta: JSON
    classnames: [String]

    title: String
    slug: String
    order: Int

    model: String
    label: String
    maxlength: Int
    minlength: Int
    min: Int
    max: Int
    step: Int
    size: Int
    placeholder: String
    disabled: Boolean
    readonly: Boolean
    required: Boolean
    options: [OptionsInput]

    no_gutters: Boolean

    breakpoint_xs: String
    breakpoint_sm: String
    breakpoint_md: String
    breakpoint_lg: String
  }
`;

const attributesSDL = `
  interface Attributes {
    """Meta will hold non essential fields as JSON that vary between components"""
    meta: JSON
    classnames: [String]!
  }
`;

const pageAttributesSDL = `
  type PageAttributes implements Attributes {
    meta: JSON
    classnames: [String]!
    title: String!
    slug: String!
    order: Int
  }
`;

const formControlAttributesSDL = `
  type FormControlAttributes implements Attributes {
    meta: JSON
    classnames: [String]!
    model: String
    label: String
    maxlength: Int
    minlength: Int
    min: Int
    max: Int
    step: Int
    size: Int
    placeholder: String
    disabled: Boolean
    readonly: Boolean
    required: Boolean
    options: [Option!]
  }
`;

const rowAttributesSDL = `
  type RowAttributes implements Attributes {
    meta: JSON
    classnames: [String]!
    no_gutters: Boolean
  }
`;

const columnAttributesSDL = `
  type ColumnAttributes implements Attributes {
    meta: JSON
    classnames: [String]!
    breakpoint_xs: String
    breakpoint_sm: String
    breakpoint_md: String
    breakpoint_lg: String
  }
`;

const genericComponentAttributesSDL = `
  type GenericComponentAttributes implements Attributes {
    meta: JSON
    classnames: [String]!
  }
`;

export const sdl = [
  attributesInputSDL,
  attributesSDL,
  pageAttributesSDL,
  formControlAttributesSDL,
  rowAttributesSDL,
  columnAttributesSDL,
  genericComponentAttributesSDL
];

export class Attributes {
  @prop()
  public meta: string;
  @prop()
  public classnames: Array<string>;
  @prop()
  public model: string;
  @prop()
  public label: string;
  @prop()
  public maxlength: number;
  @prop()
  public minlength: number;
  @prop()
  public min: number;
  @prop()
  public max: number;
  @prop()
  public step: number;
  @prop()
  public size: number;
  @prop()
  public placeholder: string;
  @prop()
  public disabled: boolean;
  @prop()
  public readonly: boolean;
  @prop()
  public required: boolean;
  @prop()
  public options: Array<Option>;
};


export const AttributesResolver = {
  __resolveType: (parent) => {
    console.log('resolver parent', parent);
    switch (parent.type) {
      case 'page':
        return 'PageAttributes';
      case 'column':
        return 'ColumnAttributes';
      case 'Row':
        return 'RowAttributes';
      default:
        return 'FormControlAttributes';
    }
  }
}
