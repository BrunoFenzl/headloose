import { Component } from './component';

export const queryResponseSDL = `
  type QueryResponse {
    code: Int!
    message: String!
    data: [Component!]!
  }
`;

export const sdl = [
  queryResponseSDL,
];

export class QueryResponse {
  public code: number;
  public message: string;
  public data: Array<Component>;

  constructor(code: number, message: string, data: Array<Component>) {
    this.code = code;
    this.message = message;
    this.data = data;
  }
};
