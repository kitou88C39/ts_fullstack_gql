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

type MakeTodoRespose {
   todo:Todo!
}

type Mutation {
   makeTodo(MakeTodoInput:MakeTodoInput!):MakeTodoRespose!
}
`;
export default typeDefs;
