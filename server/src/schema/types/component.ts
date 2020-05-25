import { prop, modelOptions, getModelForClass } from '@typegoose/typegoose';
import { Attributes } from './attributes';

const componentInputSDL = `
  input ComponentInput {
    _id: String
    _type: String
    children: [String]
    parent: String
    name: String
    attributes: AttributesInput
  }
`;

const componentSDL = `
  type Component {
    _id: ID!
    _type: String!
    children: [String]!
    parent: String
    createdAt: Float!
    updatedAt: Float!
    name: String!
    attributes: Attributes
  }
`;

export const sdl = [
  componentInputSDL,
  componentSDL,
];

@modelOptions({ schemaOptions: { timestamps: true } })
export class Component {
  @prop()
  public _type: string;
  @prop()
  public children: Array<string>;
  @prop()
  public parent: string
  @prop()
  public createdAt: Number;
  @prop()
  public updatedAt: Number;
  @prop()
  public name: string;
  @prop()
  public attributes: Attributes;
};

export const ComponentModel = getModelForClass(Component); 