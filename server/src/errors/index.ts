import { GraphQLError } from 'graphql';

export const errorHandler = (err: GraphQLError): Error => {
  console.log('Error while running resolver', { error: err });

  //return err;
  return new Error('Internal server error.');
}
