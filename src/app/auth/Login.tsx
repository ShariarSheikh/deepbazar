import Button from '@/components/common/Button';
import { setCredentials } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useLoginMutation } from '@/redux/services/auth';
import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import * as Yup from 'yup';
import {
  CustomFormikInput,
  InputApiErrorMessage,
} from '@/components/common/FormikCustomInput';
//-----------------------------------------------------------
interface IProps {
  activeNewUserHandler: () => void;
}
interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      'Invalid email format'
    ),
  password: Yup.string().required('Password is required').min(6),
});
//-----------------------------------------------------------

const Login: FC<IProps> = ({ activeNewUserHandler }) => {
  const [loginQuery, { data, error, isLoading, isError }] = useLoginMutation();

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = (values: FormValues) => loginQuery(values);

  useEffect(() => {
    if (isLoading) return;
    if (!data?.data.accessToken) return;

    dispatch(
      setCredentials({
        accessToken: data?.data.accessToken,
        refreshToken: data.data.refreshToken,
      })
    );
  }, [data, isLoading, dispatch, router]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="w-full mt-[40px] max-w-[320px] mx-auto">
        {/* @ts-ignore */}
        {isError && InputApiErrorMessage(error?.data?.message)}
        <div className="w-full flex flex-col justify-center items-center">
          <Field
            type="text"
            name="email"
            placeholder="Enter your email"
            containerStyle={{ marginBottom: '16px' }}
            component={CustomFormikInput}
          />

          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
            component={CustomFormikInput}
          />
        </div>

        <Button className="flex justify-end w-full mt-[10px] cursor-default">
          <Link
            href="/auth/forgot-password"
            className="text-[12px] text-gray-400 hover:underline"
          >
            Forgot Password?
          </Link>
        </Button>

        <Button
          disabled={isLoading}
          isLoading={isLoading}
          loadingColor="white"
          loadingSpinnerSize={40}
          type="submit"
          className="shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)] active:scale-95 duration-150 flex justify-center items-center w-full mt-[10px] bg-primary h-[42px] rounded-[6px] text-white text-[13px]"
        >
          Sign In
        </Button>

        <Button
          onClick={activeNewUserHandler}
          type="button"
          className="mt-4 text-[12px] text-gray-400 flex items-center space-x-1 cursor-text"
        >
          <p>New to DeepBazar?</p>
          <p className="text-primary cursor-pointer hover:underline">Sign Up</p>
        </Button>
      </Form>
    </Formik>
  );
};

export default Login;
