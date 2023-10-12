'use client';
import { LoadingPage } from '@/components/common/loading';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { FC, ReactNode, useEffect, useState } from 'react';

interface IProps {
  children: ReactNode;
}

const DashboardLayout: FC<IProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);
  const { accessToken, user } = useAppSelector(state => state.authSlice);

  const router = useRouter();

  useEffect(() => {
    if (!accessToken) router.replace('/auth');
    setIsInitialized(true);
  }, [accessToken, router]);

  if (!isInitialized) return <LoadingPage />;

  return accessToken && user?._id ? children : null;
};

export default DashboardLayout;
