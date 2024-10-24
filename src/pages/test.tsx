import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

function Example() {
  const car = useQuery({
    queryKey: ['repoData', 50],
    queryFn: async () => {
      const response = await fetch('http://stand/api/cars/50');
      return await response.json();
    },
  });
  console.log(car.data);

  const { isPending, error, data, isFetching } = useQuery({
    queryKey: ['repoData'],
    queryFn: async () => {
      const response = await fetch('http://stand/api/cars/');
      return await response.json();
    },
  });

  if (isPending) return <h1>'Loading...'</h1>;

  if (error) return <h1>{'An error has occurred: ' + error.message}</h1>;

  return (
    <div>
      <h1>Teste do React Query</h1>
      <ul>
        {data.map((x: { marca: string; id: number }) => (
          <li>
            {x.marca} - {x.id}
          </li>
        ))}
      </ul>
      <div>{isFetching ? 'Updating...' : ''}</div>
      <h1>Fim do Teste do React Query</h1>
    </div>
  );
}

export default function Test() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Example />
    </QueryClientProvider>
  );
}
