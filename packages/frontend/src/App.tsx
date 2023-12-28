import React, { useState, useQuery } from 'react';

const getTodoQuery = gql`
  query Todos {
    getTodos {
      todos {
        id
        title
        isCompleted
        createAt
        updateAt
      }
    }
  }
`;

function App() {
  return <div className='App'></div>;
}

export default App;
