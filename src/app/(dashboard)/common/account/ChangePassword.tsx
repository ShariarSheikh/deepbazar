'use client';
import Button from '@/components/common/Button';
import {
  CustomFormikInput,
  InputApiErrorMessage,
} from '@/components/common/FormikCustomInput';
import { AlertType, showAlert } from '@/redux/features/alertSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useChangePasswordMutation } from '@/redux/services/auth';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().required('Password is required').min(6).max(100),
  newPassword: Yup.string().required('Password is required').min(6).max(100),
});

interface InitialValues {
  oldPassword: string;
  newPassword: string;
}

const initialValues: InitialValues = {
  oldPassword: '',
  newPassword: '',
};

const ChangePassword: FC = () => {
  const [updatePassword, { isLoading, isSuccess, isError, error }] =
    useChangePasswordMutation();
  const user = useAppSelector(state => state.authSlice.user);

  const dispatch = useAppDispatch();
  const router = useRouter();

  // UPDATE FORM-------------------------------------------
  const handleSubmit = async (values: InitialValues) => {
    await updatePassword({
      // @ts-ignore
      userId: user?._id,
      oldPassword: values.oldPassword,
      newPassword: values.newPassword,
    });
  };

  useEffect(() => {
    if (!isSuccess) return;
    dispatch(
      showAlert({
        message: 'Your password updated successfully!',
        type: AlertType.Success,
      })
    );
    router.replace('/user');

    return () => undefined;
  }, [isSuccess]);

  return (
    <section className="py-[30px]">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className="px-[24px]">
          {isError &&
            InputApiErrorMessage(
              //@ts-expect-error
              error?.data?.message
            )}
          <div className="w-full rounded-[16px] shadow-card bg-white mt-[5px]">
            <Field
              component={CustomFormikInput}
              placeholder="Enter your old password"
              name="oldPassword"
              type="password"
              className="h-full w-full rounded-[8px]"
            />

            <Field
              component={CustomFormikInput}
              placeholder="Enter your new password"
              name="newPassword"
              type="password"
              className="h-full w-full rounded-[8px]"
              containerClassName="mt-[24px]"
            />

            <div className="flex items-center justify-end w-full mt-[24px]">
              <Button
                type="submit"
                disabled={isLoading}
                isLoading={isLoading}
                loadingColor="white"
                loadingSpinnerSize={40}
                className="bg-primary rounded-[6px] active:scale-95 duration-150 text-white font-bold text-[14px] w-[134px] h-[33px]"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default ChangePassword;
