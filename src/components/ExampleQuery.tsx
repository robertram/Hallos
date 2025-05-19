'use client';

import { useQuery } from '@tanstack/react-query';

interface RepoData {
  name: string;
  description: string;
  subscribers_count: number;
  stargazers_count: number;
  forks_count: number;
}

export default function ExampleQuery() {
  const { isPending, error, data } = useQuery<RepoData>({
    queryKey: ['repoData'],
    queryFn: async () => {
      const response = await fetch('https://api.github.com/repos/TanStack/query');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{data.name}</h1>
      <p className="mb-4">{data.description}</p>
      <div className="flex gap-4">
        <strong>👀 {data.subscribers_count}</strong>
        <strong>✨ {data.stargazers_count}</strong>
        <strong>🍴 {data.forks_count}</strong>
      </div>
    </div>
  );
} 