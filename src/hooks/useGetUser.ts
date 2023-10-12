import { AlertType, showAlert } from '@/redux/features/alertSlice';
import { setCredentials, setProfileLoading } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useProfileQuery } from '@/redux/services/auth';
import { useEffect, useState } from 'react';

export default function useFetchUser() {
  const refreshToken = useAppSelector(state => state.authSlice.refreshToken);
  const [isNotFetchProfile, setIsNotFetchProfile] = useState<boolean>(true);

  const { data, isLoading } = useProfileQuery(undefined, {
    skip: isNotFetchProfile,
  });

  const dispatch = useAppDispatch();

  // IF TOKEN EXITS
  useEffect(() => {
    if (!refreshToken) return;
    setIsNotFetchProfile(false);
  }, [refreshToken, dispatch]);

  // UPDATE USER PROFILE LOADING STATE
  useEffect(() => {
    if (isLoading) dispatch(setProfileLoading(true));
    if (!isLoading) dispatch(setProfileLoading(false));

    return () => undefined;
  }, [isLoading, dispatch]);

  // IF USER EXITS THEN UPDATE FETCH
  useEffect(() => {
    if (!isLoading && !data?.data?.user?._id) return;

    dispatch(setCredentials({ user: data?.data?.user }));
    // USER EXITS BUT NOT VERIFIED THEN SHOW THE ALERT
    if (!data?.data?.user.verified && data?.data?.user?._id) {
      dispatch(
        showAlert({
          message: 'Please Verify your email address! Check your mailbox',
          type: AlertType.Warning,
          isPermanent: true,
        })
      );
    }
  }, [isLoading, data, dispatch]);
}
