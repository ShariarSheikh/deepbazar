'use client';

import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { useProfileQuery } from './services/auth';
import { store } from './store';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ChildProvider>{children}</ChildProvider>
    </Provider>
  );
}

function ChildProvider({ children }: { children: React.ReactNode }) {
  const authState = store.getState().authSlice;
  const [isNotFetchProfile, setIsNotFetchProfile] = useState<boolean>(true);

  const { data, isSuccess } = useProfileQuery(undefined, {
    skip: isNotFetchProfile,
  });

  useEffect(() => {
    if (!authState.refreshToken) return;
    setIsNotFetchProfile(false);
  }, [authState]);

  // eslint-disable-next-line no-console
  console.log(data, isSuccess);

  return children;
}
