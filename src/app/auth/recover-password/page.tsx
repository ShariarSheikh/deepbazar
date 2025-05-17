'use client';

import Button from '@/components/common/Button';
import * as Yup from 'yup';
import {
  CustomFormikInput,
  InputApiErrorMessage,
} from '@/components/common/FormikCustomInput';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { useResetPasswordMutation } from '@/redux/services/auth';
import { Field, Form, Formik } from 'formik';
import { useEffect } from 'react';
import { AlertType, showAlert } from '@/redux/features/alertSlice';

interface FormValues {
  password: string;
}
const initialValues: FormValues = {
  password: '',
};
const validationSchema = Yup.object().shape({
  password: Yup.string().required('Password is required').min(6),
});

//-----------------------------------------------------

//-----------------------------------------------------
export default function RecoverPassword() {
  const [resetPassword, resetPasswordApi] = useResetPasswordMutation();

  const router = useRouter();
  const dispatch = useAppDispatch();

  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const id = searchParams.get('id');

  const handleSubmit = (values: FormValues) => {
    resetPassword({
      email: email as string,
      password: values.password,
      id: id as string,
    });
  };

  useEffect(() => {
    if (!email || !id) router.replace('/');
  }, [email, id, router]);

  useEffect(() => {
    if (resetPasswordApi.isLoading || !resetPasswordApi.isSuccess) return;
    dispatch(
      showAlert({
        message: 'Password updated successfully',
        type: AlertType.Success,
      })
    );
    router.replace('/auth');
  }, [resetPasswordApi, dispatch]);

  return (
    <section className="min-h-[45vh] max-w-[1201px] w-full m-auto mt-12 pb-4">
      <div className="w-full mx-auto max-w-[320px]">
        <h1 className="text-primary text-[25px] font-bold">Reset Password</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="w-full mt-[20px]">
            {resetPasswordApi.isError &&
              //@ts-ignore
              InputApiErrorMessage(resetPasswordApi.error?.data?.message)}
            <div className="w-full flex flex-col space-y-4 justify-center items-center">
              <div className="w-full h-[42px] rounded-[6px] bg-[#F3F9FB] max-w-[320px] flex items-center text-gray-600 px-2 outline-[#E5F8FE] text-[12px]">
                <span>{email}</span>
              </div>
              <Field
                type="password"
                name="password"
                placeholder="New Password"
                containerStyle={{ marginBottom: '16px' }}
                component={CustomFormikInput}
              />
              <Button
                disabled={!email?.trim() || resetPasswordApi.isLoading}
                isLoading={resetPasswordApi.isLoading}
                loadingColor="white"
                loadingSpinnerSize={40}
                type="submit"
                className="w-full h-[42px] rounded-[6px] bg-primary text-white active:scale-95 duration-150 max-w-[320px] px-2 text-[12px]"
              >
                Submit
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
}
