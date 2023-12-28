import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

function App() {
  const { data, loading, error } = useGetTodosQuery();

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
