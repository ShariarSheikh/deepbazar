'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Feed from './Feed';

export default function Page() {
  const searchParams = useSearchParams();

  const { category } = {
    category: searchParams.get('category'),
  };

  useEffect(() => {}, [category]);

  return (
    <main className="min-h-[60vh] w-full m-auto px-4 pb-4">
      <Feed />
    </main>
  );
}
