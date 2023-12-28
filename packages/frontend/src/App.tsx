import { gql, useQuery } from '@apollo/client';
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
  const { data, loading, error } = useQuery(getTodoQuery);

  return (
    <div className='App'>
      <div>
        {data?.getTodos?.todos.map((item: any) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
