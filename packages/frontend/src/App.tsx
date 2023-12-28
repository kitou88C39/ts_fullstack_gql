import React, { useState } from 'react';

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
  const [count, setCount] = useState(0);

  return <div class='App'></div>;
}

export default App;
