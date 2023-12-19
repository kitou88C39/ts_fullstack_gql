const typeDefs = `#graphql
    type Todo {
    id: String!
    title: String!
    updatedAt: String!
    createdAt: String!
    }

    input MakeTodoInput {
        title: String!
}

type MutationTodoRespose {
   todo:Todo!
}

type Mutation {
   makeTodo(MakeTodoInput:MakeTodoInput!):String!
}
`;
export default typeDefs;
