/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import Link from 'next/link';
import { FC } from 'react';
import { FaApple, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Field, Form, Formik } from 'formik';
import { CustomFormikInput, InputApiErrorMessage } from './utils';
import * as Yup from 'yup';
import { useLoginMutation } from '@/redux/services';
import Button from '@/components/common/Button';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { setCredentials } from '@/redux/features/authSlice';

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
  const [loginQuery, { error, isLoading, isError }] = useLoginMutation();

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: FormValues): Promise<void> => {
    const login = await loginQuery(values);

    // console.log(login);
    if (isError) return undefined;

    // dispatch(setCredentials({accessToken}))
    //@ts-ignore
    // if (login?.data?.success) router.replace('/');
  };

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
            href="/auth/recover-password"
            className="text-[12px] text-gray-400 hover:underline"
          >
            Recover Password?
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
        <div className="flex items-center justify-between w-full mt-[20px]">
          <div className="h-[1px] w-[32%] bg-[#e5e5e6]"></div>
          <p className="text-[12px] text-gray-400">Or continue with</p>
          <div className="h-[1px] w-[32%] bg-[#e5e5e6]"></div>
        </div>

        <Button
          onClick={activeNewUserHandler}
          type="button"
          className="text-[12px] text-gray-400 mt-[10px] flex items-center space-x-1 cursor-text"
        >
          <p>New to DeepBazar?</p>
          <p className="text-primary cursor-pointer hover:underline">Sign Up</p>
        </Button>

        <div className="flex items-center justify-between mt-[20px]">
          <div className="w-[30%] flex items-center justify-center cursor-pointer hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-transparent h-[42px] rounded-[4px] border border-[#e5e5e6]">
            <FcGoogle />
          </div>
          <div className="w-[30%] flex items-center justify-center cursor-pointer hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-transparent h-[42px] rounded-[4px] border border-[#e5e5e6]">
            <FaApple />
          </div>
          <div className="w-[30%] flex items-center justify-center cursor-pointer hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:border-transparent h-[42px] rounded-[4px] border border-[#e5e5e6]">
            <FaFacebookF color="#4267B2" />
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default Login;
