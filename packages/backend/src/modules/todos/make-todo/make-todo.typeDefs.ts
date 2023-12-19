const typeDefs = `#graphql

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
