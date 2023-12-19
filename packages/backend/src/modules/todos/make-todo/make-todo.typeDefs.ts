const typeDefs = `#graphql
    type Todo {
    id: String!
    title: String!
    updatedAt: String!
    }

    input MakeTodoInput {
        title: String!
}

type MutationTodoRespose {
   todo:String!
}


type Mutation {
   makeTodo(MakeTodoInput:MakeTodoInput!):String!
}
`;
export default typeDefs;
