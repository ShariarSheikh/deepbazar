'use client';

import Button from '@/components/common/Button';
import { CustomFormikInput } from '@/components/common/FormikCustomInput';
import { setCredentials } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useUpdateAccountMutation } from '@/redux/services/auth';
import { Field, Form, Formik } from 'formik';
import { NextPage } from 'next';
import { useEffect } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import * as Yup from 'yup';

const condition = Yup.string()
  .matches(
    /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
    'Enter correct url!'
  )
  .optional();
const validationSchema = Yup.object().shape({
  facebook: condition,
  instagram: condition,
  linkedin: condition,
  twitter: condition,
});

interface SocialLinks {
  facebook?: string | undefined;
  instagram?: string | undefined;
  linkedin?: string | undefined;
  twitter?: string | undefined;
}

const Page: NextPage = () => {
  const [updateAccount, updateAccountReturnResult] = useUpdateAccountMutation();
  const user = useAppSelector(state => state.authSlice.user);

  const initialValues: SocialLinks = { ...user?.socialLinks };
  const dispatch = useAppDispatch();

  // UPDATE FORM-------------------------------------------
  const handleSubmit = async (values: SocialLinks) => {
    await updateAccount({
      // @ts-ignore
      userId: user?._id,
      // @ts-ignore
      user: values,
    });
  };

  useEffect(() => {
    if (
      !updateAccountReturnResult.isSuccess &&
      updateAccountReturnResult.data?.data?.user?._id
    )
      return;
    dispatch(
      setCredentials({ user: updateAccountReturnResult.data?.data?.user })
    );

    return () => undefined;
  }, [
    updateAccountReturnResult.data,
    updateAccountReturnResult.isSuccess,
    dispatch,
  ]);

  return (
    <section>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        className="w-full rounded-[16px] shadow-card bg-white p-[24px] mt-[5px]"
      >
        <Form>
          <div className="relative h-[41px] rounded-[8px] border border-gray-200 bg-gray-50 flex items-center px-[20px] mb-[24px]">
            <FaFacebookF />
            <Field
              component={CustomFormikInput}
              name="facebook"
              placeholder="Your facebook profile url"
              type="url"
              className="ml-[15px] h-full w-full border-none outline-none"
              containerClassName="h-[38px] w-full"
            />
          </div>
          <div className="relative h-[41px] rounded-[8px] border border-gray-200 bg-gray-50 flex items-center px-[20px] mb-[24px]">
            <BsInstagram />
            <Field
              component={CustomFormikInput}
              name="instagram"
              placeholder="Your instagram profile url"
              type="url"
              className="ml-[15px] h-full w-full border-none outline-none"
              containerClassName="h-[38px] w-full"
            />
          </div>
          <div className="relative h-[41px] rounded-[8px] border border-gray-200 bg-gray-50 flex items-center px-[20px] mb-[24px]">
            <GrLinkedinOption />
            <Field
              component={CustomFormikInput}
              name="linkedin"
              placeholder="Your linkedin profile url"
              type="url"
              className="ml-[15px] h-full w-full border-none outline-none"
              containerClassName="h-[38px] w-full"
            />
          </div>
          <div className="relative h-[41px] rounded-[8px] border border-gray-200 bg-gray-50 flex items-center px-[20px] mb-[24px]">
            <FaTwitter />
            <Field
              component={CustomFormikInput}
              name="twitter"
              placeholder="Your twitter profile url"
              type="url"
              className="ml-[15px] h-full w-full border-none outline-none"
              containerClassName="h-[38px] w-full"
            />
          </div>

          <div className="flex items-center justify-end w-full mt-[24px]">
            <Button
              disabled={updateAccountReturnResult.isLoading}
              isLoading={updateAccountReturnResult.isLoading}
              loadingColor="white"
              loadingSpinnerSize={40}
              type="submit"
              className="bg-primary rounded-[6px] active:scale-95 duration-150 text-white font-bold text-[14px] px-[16px] py-[6px]"
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default Page;
