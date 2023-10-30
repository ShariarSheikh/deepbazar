'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import Feed from './Feed';
import type { Metadata } from 'next';

//-----------------------------------------
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const metadata: Metadata = {
  title: 'Shop - DeepBazar',
};
//-----------------------------------------

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
