import { GraphQLInt ,GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql';

const CreateAuthorInput: GraphQLInputObjectType = new GraphQLInputObjectType({
  name: 'CreateAuthorInput',
  description: 'Create author input',
  fields: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The authors username',
    },
    bookId: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The book id.',
    },
  },
});

export default CreateAuthorInput;
