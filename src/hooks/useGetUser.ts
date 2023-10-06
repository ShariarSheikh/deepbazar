import { setCredentials } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useProfileQuery } from '@/redux/services/auth';
import { useEffect, useState } from 'react';

export default function useFetchUser() {
  const refreshToken = useAppSelector(state => state.authSlice.refreshToken);
  const [isNotFetchProfile, setIsNotFetchProfile] = useState<boolean>(true);

  const { data, isSuccess } = useProfileQuery(undefined, {
    skip: isNotFetchProfile,
  });

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!refreshToken) return;
    setIsNotFetchProfile(false);
  }, [refreshToken]);

  useEffect(() => {
    if (!isSuccess && data?.data?.user?._id) return;

    dispatch(setCredentials({ user: data?.data?.user }));
  }, [isSuccess, data, dispatch]);
}
