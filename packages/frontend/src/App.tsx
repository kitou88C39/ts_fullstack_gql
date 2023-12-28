import { useTodosQuery } from './_generated_/graphql';

function App() {
  const { data, loading, error } = useTodosQuery();

  return (
    <div className='App'>
      <div>
        {data?.getTodos?.todos?.map((item: any) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
