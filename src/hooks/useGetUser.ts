import { AlertType, showAlert } from '@/redux/features/alertSlice';
import { setCredentials, setProfileLoading } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useProfileMutation } from '@/redux/services/auth';
import { useEffect } from 'react';

export default function useFetchUser() {
  const refreshToken = useAppSelector(state => state.authSlice.refreshToken);
  // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);
  const [getProfile, profileApi] = useProfileMutation();

  const dispatch = useAppDispatch();

  // IF TOKEN EXITS
  useEffect(() => {
    if (!refreshToken) return;
    // if (isLoggedIn) return setIsLoggedIn(false);
    getProfile();
  }, [refreshToken, dispatch]);

  // IF USER EXITS THEN UPDATE FETCH
  useEffect(() => {
    if (profileApi.isLoading) return;
    if (!profileApi?.data?.data.user._id) return;

    dispatch(setCredentials({ user: profileApi?.data?.data.user }));

    // USER EXITS BUT NOT VERIFIED THEN SHOW THE ALERT
    if (!profileApi?.data?.data.user._id) {
      dispatch(
        showAlert({
          message: 'Please Verify your email address! Check your mailbox',
          type: AlertType.Warning,
          isPermanent: true,
        })
      );
    }
  }, [profileApi.isLoading]);

  // UPDATE USER PROFILE LOADING STATE
  useEffect(() => {
    if (profileApi.isLoading) dispatch(setProfileLoading(true));
    if (!profileApi.isLoading) dispatch(setProfileLoading(false));

    return () => undefined;
  }, [profileApi.isLoading, dispatch]);
}
