'use client';

import Button from '@/components/common/Button';
import { LoadingPage } from '@/components/common/loading';
import { AlertType, showAlert } from '@/redux/features/alertSlice';
import { setCredentials } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useVerifiedEmailMutation } from '@/redux/services/auth';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
//-----------------------------------------

//-----------------------------------------

export default function EmailVerified() {
  const { user, accessToken } = useAppSelector(state => state.authSlice);
  const [initialized, setInitialized] = useState<boolean>(false);
  const [verifiedEmail, verifiedEmailApi] = useVerifiedEmailMutation();

  const dispatch = useAppDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const id = searchParams.get('id');

  // IF ID & EMAIL EXITS THEN CALL VERIFICATION API
  useEffect(() => {
    if (initialized) return;
    setInitialized(true);

    if (!id || !email) return router.replace('/');
    //IF ALREADY VERIFIED DON'T CALL API
    if (user?.email === email && user.verified) return;

    verifiedEmail({ email, id });
  }, [email, id]);

  // AFTER VERIFICATION----------------------------
  useEffect(() => {
    if (verifiedEmailApi.isLoading) return undefined;
    // REDIRECT AFTER 5s IF ERROR
    if (!verifiedEmailApi.isSuccess) {
      setTimeout(() => {
        router.replace('/');
      }, 50000);
    }
    // UPDATE USER LOCAL STATE
    if (!verifiedEmailApi?.data?.data.user._id) return;
    dispatch(
      showAlert({
        message: 'Your account has been verified successfully',
        type: AlertType.Success,
      })
    );

    if (accessToken && user._id) {
      dispatch(setCredentials({ user: verifiedEmailApi?.data?.data.user }));
    } else {
      router.replace('/auth');
    }
  }, [verifiedEmailApi, dispatch, router, user, accessToken]);

  const verifiedSuccessfully = (
    <div className="w-full min-h-[50vh] text-center flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-4 text-green-600">
        Email Verification
      </h1>
      <p className="text-lg text-green-400">
        Your email has been successfully verified. You can now login to your
        account.
      </p>
      <Button
        onClick={() => router.replace('/')}
        className="mt-3 hover:underline text-gray-600"
      >
        Go Back
      </Button>
    </div>
  );

  const verifiedError = (
    <div className="w-full min-h-[50vh] text-center flex flex-col justify-center items-center">
      <h1 className="text-3xl font-semibold mb-4 text-red-600">
        Email Verification Failed
      </h1>
      <p className="text-lg text-red-400">
        There was an issue verifying your email. Please try again or contact
        support.
      </p>
      <Button
        onClick={() => router.replace('/')}
        className="mt-3 hover:underline text-gray-600"
      >
        Go Back
      </Button>
    </div>
  );

  return (
    <main className="w-full m-auto mt-10 px-4">
      <div className="w-full max-w-[1201px] mx-auto">
        {(verifiedEmailApi.isLoading || !initialized) && <LoadingPage />}

        {verifiedEmailApi.isError && !initialized && verifiedError}

        {verifiedEmailApi.isSuccess && verifiedSuccessfully}
      </div>
    </main>
  );
}
