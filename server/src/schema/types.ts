const componentInput = `
  input ComponentInput {
    _id: String
    _type: String
    children: [String]
    parent: String
    name: String
    attributes: AttributesInput
  }
`;

const attributesInput = `
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

const optionsInput = `
  input OptionsInput {
    value: String!
    label: String!
  }
`;

const component = `
  type Component {
    _id: ID!
    _type: String!
    children: [String]!
    parent: String
    createdAt: DateTime!
    modifiedAt: DateTime!
    name: String!
    attributes: Attributes
  }
`;

const QueryResponse = `
  type QueryResponse {
    code: Int!
    message: String!
    data: [Component!]!
  }
`;

const Attributes = `
  interface Attributes {
    """Meta will hold non essential fields as JSON that vary between components"""
    meta: JSON
    classnames: [String]!
  }
`;

const pageAttributes = `
  type PageAttributes implements Attributes {
    meta: JSON
    classnames: [String]!
    title: String!
    slug: String!
    order: Int
  }
`;

const formControlAttributes = `
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

const rowAttributes = `
  type RowAttributes implements Attributes {
    meta: JSON
    classnames: [String]!
    no_gutters: Boolean
  }
`;

const columnAttributes = `
  type ColumnAttributes implements Attributes {
    meta: JSON
    classnames: [String]!
    breakpoint_xs: String
    breakpoint_sm: String
    breakpoint_md: String
    breakpoint_lg: String
  }
`;

const genericComponentAttributes = `
  type GenericComponentAttributes implements Attributes {
    meta: JSON
    classnames: [String]!
  }
`;

const option = `
  type Option {
    value: String!
    label: String!
  }
`;

export const types = [
  'scalar DateTime',
  'scalar JSON',
  'scalar JSONObject',
  componentInput,
  attributesInput,
  optionsInput,
  component,
  QueryResponse,
  Attributes,
  pageAttributes,
  formControlAttributes,
  rowAttributes,
  columnAttributes,
  genericComponentAttributes,
  option,
];
