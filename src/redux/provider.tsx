'use client';

import useFetchUser from '@/hooks/useGetUser';
import { Provider } from 'react-redux';
import { store } from './store';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ChildProvider>{children}</ChildProvider>
    </Provider>
  );
}

function ChildProvider({ children }: { children: React.ReactNode }) {
  useFetchUser();
  return children;
}
