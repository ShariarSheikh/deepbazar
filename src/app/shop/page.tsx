'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Feed from './Feed';
import type { Metadata } from 'next';

//-----------------------------------------
const metadata: Metadata = {};
//-----------------------------------------

export default function Page() {
  metadata.title = 'Shop - DeepBazar';
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
