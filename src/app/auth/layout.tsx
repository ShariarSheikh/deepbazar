'use client';
import { LoadingPage } from '@/components/common/loading';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { FC, ReactNode, useEffect, useState } from 'react';

interface IProps {
  children: ReactNode;
}

const AuthLayout: FC<IProps> = ({ children }): ReactNode => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const user = useAppSelector(state => state.authSlice.user);
  const router = useRouter();

  useEffect(() => {
    if (user?._id) return router.replace('/');

    setIsInitialized(false);
  }, [user, router]);

  if (!isInitialized) return <LoadingPage />;

  return children;
};

export default AuthLayout;
