'use client';

import { LoadingPage } from '@/components/common/loading';
import { Banners, banners } from '@/views/home/HeroSection';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const [isInitialize, setIsInitialize] = useState<boolean>(false);
  const [banner, setBanner] = useState<Banners>({
    id: 0,
    bannerUrl: '',
    link: '',
    offer: '',
  });

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (isInitialize) return;

    const queryId = Number(searchParams.get('id'));
    if (
      !queryId ||
      isNaN(queryId) ||
      queryId < 0 ||
      queryId >= banners.length
    ) {
      setBanner(banners[1]);
    }

    setBanner(banners[queryId]);
    return setIsInitialize(true);
  }, [searchParams, isInitialize, router]);

  if (!isInitialize) return <LoadingPage />;
  if (!banner.id) return router.back();

  const divStyle: React.CSSProperties = {
    backgroundImage: `url(${banner.bannerUrl})`,
    backgroundSize: '100% 100%',
    backgroundColor: 'blue', // Other CSS styles
  };

  return (
    <main className="min-h-[60vh] w-full pb-4">
      <div className="h-[316px] w-full z-10" style={divStyle} />
      <div className="w-full min-h-[300px] rounded-t-[6px] max-w-[1201px] mx-auto bg-white z-20 -mt-[70px] p-6">
        <h1>Hello World!</h1>
      </div>
    </main>
  );
};

export default Page;
