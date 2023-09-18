'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Page() {
  const searchParams = useSearchParams();

  const { category } = {
    category: searchParams.get('category'),
  };

  useEffect(() => {}, [category]);

  return (
    <main className="min-h-[60vh] max-w-[1201px] w-full m-auto px-4 pb-4">
      <div className="">
        <h2>Hello world!</h2>
      </div>
    </main>
  );
}
