'use client';
import Button from '@/components/common/Button';
import {
  CustomFormikInput,
  InputApiErrorMessage,
} from '@/components/common/FormikCustomInput';
import { useAppSelector } from '@/redux/hooks';
import { useChangePasswordMutation } from '@/redux/services/auth';
import { Field, Form, Formik } from 'formik';
import { NextPage } from 'next';
import { useEffect } from 'react';

import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  oldPassword: Yup.string().min(6).max(100),
  newPassword: Yup.string().min(6).max(100),
});

interface InitialValues {
  oldPassword: string;
  newPassword: string;
}

const initialValues: InitialValues = {
  oldPassword: '',
  newPassword: '',
};

const Page: NextPage = () => {
  const [updatePassword, { isLoading, isSuccess, isError, error }] =
    useChangePasswordMutation();
  const user = useAppSelector(state => state.authSlice.user);

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

    return () => undefined;
  }, [isSuccess]);

  return (
    <section>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          {isError &&
            InputApiErrorMessage(
              //@ts-expect-error
              error?.data?.message
            )}
          <div className="w-full rounded-[16px] shadow-card bg-white p-[24px] mt-[5px]">
            <Field
              component={CustomFormikInput}
              placeholder="Enter your old password"
              name="oldPassword"
              type="password"
              className="h-full w-full rounded-[8px]"
              containerClassName="h-[41px] w-full mb-[24px]"
            />

            <Field
              component={CustomFormikInput}
              placeholder="Enter your new password"
              name="newPassword"
              type="password"
              className="h-full w-full rounded-[8px]"
              containerClassName="h-[41px] w-full mb-[24px]"
            />

            <div className="flex items-center justify-end w-full mt-[24px]">
              <Button
                disabled={isLoading}
                isLoading={isLoading}
                loadingColor="white"
                loadingSpinnerSize={40}
                type="submit"
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

export default Page;
