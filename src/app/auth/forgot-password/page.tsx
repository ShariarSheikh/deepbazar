'use client';

import Button from '@/components/common/Button';
import {
  CustomFormikInput,
  InputApiErrorMessage,
} from '@/components/common/FormikCustomInput';
import { useSendResetPasswordMailMutation } from '@/redux/services/auth';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  email: string;
}
const initialValues: FormValues = {
  email: '',
};
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      'Invalid email format'
    ),
});

//-----------------------------------------------------

//-----------------------------------------------------
export default function ForgotPassword() {
  const [sendResetPassword, sendResetPasswordApi] =
    useSendResetPasswordMailMutation();

  const handleSubmit = (values: FormValues) => {
    sendResetPassword({ email: values.email });
  };
  return (
    <section className="min-h-[45vh] max-w-[1201px] w-full m-auto mt-12 pb-4">
      <div className="w-full mx-auto max-w-[320px]">
        {sendResetPasswordApi.isSuccess &&
          !sendResetPasswordApi.isUninitialized && (
            <h1 className="text-green-600 text-center text-[25px] font-bold">
              Check you mail inbox
            </h1>
          )}

        {sendResetPasswordApi.isUninitialized && (
          <>
            <h1 className="text-primary text-[25px] font-bold">
              Send your email
            </h1>

            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <Form className="w-full mt-[20px]">
                <div className="w-full flex flex-col space-y-4 justify-center items-center">
                  {sendResetPasswordApi.isError &&
                    InputApiErrorMessage(
                      //@ts-ignore
                      sendResetPasswordApi.error.data.message
                    )}

                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter Your Email"
                    containerStyle={{ marginBottom: '16px' }}
                    component={CustomFormikInput}
                  />

                  <Button
                    disabled={sendResetPasswordApi.isLoading}
                    isLoading={sendResetPasswordApi.isLoading}
                    loadingColor="white"
                    loadingSpinnerSize={40}
                    type="submit"
                    className="w-full h-[42px] rounded-[6px] bg-primary text-white active:scale-95 duration-150 max-w-[320px] px-2 text-[12px]"
                  >
                    Send
                  </Button>
                </div>
              </Form>
            </Formik>
          </>
        )}
      </div>
    </section>
  );
}
