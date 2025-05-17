'use client';

import useFetchUser from '@/hooks/useGetUser';
import { Provider } from 'react-redux';
import { store } from './store';
import CustomAlertProvider from '@/components/common/CustomAlertProvider';
import LoginFirst from '@/components/common/LoginFirst';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ChildProvider>
        <LoginFirst />
        <CustomAlertProvider>{children}</CustomAlertProvider>
      </ChildProvider>
    </Provider>
  );
}

function ChildProvider({ children }: { children: React.ReactNode }) {
  useFetchUser();
  return children;
}
