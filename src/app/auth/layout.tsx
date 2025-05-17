'use client';
import { LoadingPage } from '@/components/common/loading';
import { useAppSelector } from '@/redux/hooks';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, ReactNode, useEffect, useState } from 'react';

interface IProps {
  children: ReactNode;
}

const AuthLayout: FC<IProps> = ({ children }): ReactNode => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const accessToken = useAppSelector(state => state.authSlice.accessToken);

  const router = useRouter();
  const searchParams = useSearchParams();

  const { redirect } = {
    redirect: searchParams.get('redirect'),
  };

  useEffect(() => {
    if (accessToken) {
      router.replace(redirect ? redirect : '/');
    }

    setIsInitialized(true);
  }, [accessToken, router]);

  if (!isInitialized) return <LoadingPage />;

  return !accessToken ? children : null;
};

export default AuthLayout;
