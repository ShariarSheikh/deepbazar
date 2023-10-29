'use client';
import { LoadingPage } from '@/components/common/loading';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { FC, ReactNode, useEffect, useState } from 'react';
import type { Metadata } from 'next';

const metadata: Metadata = {};
interface IProps {
  children: ReactNode;
}

const AuthLayout: FC<IProps> = ({ children }): ReactNode => {
  metadata.title = 'Auth page - DeepBazar';

  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const accessToken = useAppSelector(state => state.authSlice.accessToken);
  const router = useRouter();

  useEffect(() => {
    if (accessToken) router.replace('/');

    setIsInitialized(true);
  }, [accessToken, router]);

  if (!isInitialized) return <LoadingPage />;

  return !accessToken ? children : null;
};

export default AuthLayout;
