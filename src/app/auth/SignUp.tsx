import Button from '@/components/common/Button';
import { setCredentials } from '@/redux/features/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import { useLoginMutation, useRegisterMutation } from '@/redux/services/auth';
import { AccountCreate } from '@/types/auth.types';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/navigation';
import { FC, useEffect } from 'react';
import * as Yup from 'yup';
import { RoleType } from './utils';
import {
  CustomFormikInput,
  InputApiErrorMessage,
} from '@/components/common/FormikCustomInput';

//------------------------------------------
interface IProps {
  activeOldUserHandler: () => void;
  role: RoleType;
}

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const initialValues: FormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().min(3).required('FirstName is required'),
  lastName: Yup.string().min(3).required('LastName is required'),

  email: Yup.string()
    .email('Invalid email')
    .required('Email is required')
    .matches(
      /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
      'Invalid email format'
    ),
  password: Yup.string().min(6).required('Password is required'),
});
//------------------------------------------

const SignUp: FC<IProps> = ({ activeOldUserHandler, role }) => {
  const [loginQuery, { isLoading: isLoadingLogin, data: loginData }] =
    useLoginMutation();
  const [registerQuery, { error, isLoading, isError }] = useRegisterMutation();

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleSubmit = async (values: FormValues): Promise<void> => {
    const body: AccountCreate = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password,
      imgUrl: '',
      role: role,
      isCustomAccount: true,
      address: '',
      zipCode: 0,
      bio: '',
      socialLinks: {
        facebook: '',
        instagram: '',
        linkedin: '',
        twitter: '',
      },
    };

    const register = await registerQuery(body);
    //@ts-ignore
    if (!register?.data?.success) return undefined;
    await loginQuery({
      email: body.email,
      password: body.password,
    });
  };

  useEffect(() => {
    if (isLoading) return;
    if (!loginData?.data.accessToken) return;

    dispatch(
      setCredentials({
        accessToken: loginData?.data.accessToken,
        refreshToken: loginData.data.refreshToken,
      })
    );
  }, [loginData, isLoading, dispatch, router]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="w-full mt-[40px] max-w-[320px] mx-auto">
        {/* @ts-ignore */}
        {isError && InputApiErrorMessage(error?.data?.message)}
        <div className="w-full flex space-x-2 justify-between items-center">
          <Field
            type="text"
            name="firstName"
            placeholder="First Name"
            containerClassName="w-full"
            component={CustomFormikInput}
          />
          <Field
            type="text"
            name="lastName"
            placeholder="Last Name"
            containerClassName="w-full"
            component={CustomFormikInput}
          />
        </div>
        <div className="w-full flex flex-col space-y-4 justify-center items-center mt-[18px]">
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

        <Button
          disabled={isLoading || isLoadingLogin}
          isLoading={isLoading || isLoadingLogin}
          loadingColor="white"
          loadingSpinnerSize={40}
          type="submit"
          className="shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)] active:scale-95 duration-150 flex justify-center items-center w-full mt-[25px] bg-primary h-[42px] rounded-[6px] text-white text-[13px]"
        >
          Sign Up
        </Button>
        {/* <div className="flex items-center justify-between w-full mt-[20px]">
          <div className="h-[1px] w-[32%] bg-[#e5e5e6]"></div>
          <p className="text-[12px] text-gray-400">Or continue with</p>
          <div className="h-[1px] w-[32%] bg-[#e5e5e6]"></div>
        </div> */}

        <Button
          onClick={activeOldUserHandler}
          className="text-[12px] text-gray-400 mt-4 flex items-center space-x-1 cursor-text"
        >
          <p>Already have an account?</p>
          <p className="text-primary cursor-pointer hover:underline">Login</p>
        </Button>

        {/* <div className="flex items-center justify-between mt-[20px]">
          <div className="w-[30%] flex items-center justify-center cursor-pointer hover:shadow-lg h-[42px] rounded-[4px] border border-[#e5e5e6]">
            <FcGoogle />
          </div>
          <div className="w-[30%] flex items-center justify-center cursor-pointer hover:shadow-lg h-[42px] rounded-[4px] border border-[#e5e5e6]">
            <FaApple />
          </div>
          <div className="w-[30%] flex items-center justify-center cursor-pointer hover:shadow-lg h-[42px] rounded-[4px] border border-[#e5e5e6]">
            <FaFacebookF color="#4267B2" />
          </div>
        </div> */}
      </Form>
    </Formik>
  );
};

export default SignUp;
