const componentInput = `
  input ComponentInput {
    type: String!
    children: [String]!
    parent: String
    createdAt: String!
    modifiedAt: String!
    name: String!
  }
`;

const component = `
  type Component {
    id: ID!
    type: String!
    children: [String]!
    parent: String
    createdAt: String!
    modifiedAt: String!
    name: String!
    attributes: Attributes
  }
`;

const ComponentQueryResponse = `
  type ComponentQueryResponse {
    success: Boolean!
    message: String!
    data: [Component!]!
  }
`;

const Attributes = `
  interface Attributes {
    """Meta will hold non essential stringified fields that vary between components"""
    meta: String
    classnames: [String]!
  }
`;

const pageAttributes = `
  type PageAttributes implements Attributes {
    meta: String
    classnames: [String]!
    title: String!
    slug: String!
    order: Int
  }
`;

const formControlAttributes = `
  type FormInputAttributes implements Attributes {
    meta: String
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
    meta: String
    classnames: [String]!
    no_gutters: Boolean
  }
`;

const columnAttributes = `
  type ColumnAttributes implements Attributes {
    meta: String
    classnames: [String]!
    breakpoint_xs: String
    breakpoint_sm: String
    breakpoint_md: String
    breakpoint_lg: String
  }
`;

const genericComponentAttributes = `
  type GenericComponentAttributes implements Attributes {
    meta: String
    classnames: [String]!
  }
`;

const option = `
  type Option {
    value: String!
    label: String!
  }
`;

export default [
  'scalar JSON',
  'scalar JSONObject',
  componentInput,
  component,
  ComponentQueryResponse,
  Attributes,
  pageAttributes,
  formControlAttributes,
  rowAttributes,
  columnAttributes,
  genericComponentAttributes,
  option,
]