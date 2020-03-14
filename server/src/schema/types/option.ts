import { prop } from '@typegoose/typegoose';

const optionsInputSDL = `
  input OptionsInput {
    value: String!
    label: String!
  }
`;

const optionSDL = `
  type Option {
    value: String!
    label: String!
  }
`;

export const sdl = [
  optionsInputSDL,
  optionSDL,
];

export class Option {
  @prop()
  public value: string;
  @prop()
  public label: string;
};
