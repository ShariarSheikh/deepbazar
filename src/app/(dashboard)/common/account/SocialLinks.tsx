'use client';

import Button from '@/components/common/Button';
import {
  CustomFormikInput,
  InputApiErrorMessage,
} from '@/components/common/FormikCustomInput';
import { AlertType, showAlert } from '@/redux/features/alertSlice';
import { setCredentials } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useUpdateAccountMutation } from '@/redux/services/auth';
import { Field, Form, Formik } from 'formik';
import { FC, useEffect } from 'react';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { GrLinkedinOption } from 'react-icons/gr';
import * as Yup from 'yup';

const condition = Yup.string().url().optional();
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

const SocialLinks: FC = () => {
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
      user: {
        socialLinks: {
          ...values,
        },
      },
    });
  };

  useEffect(() => {
    if (
      !updateAccountReturnResult.isSuccess &&
      !updateAccountReturnResult.data?.data?.user?._id
    )
      return undefined;

    dispatch(
      setCredentials({ user: updateAccountReturnResult.data?.data?.user })
    );

    dispatch(
      showAlert({
        message: 'Your social media links updated successfully!',
        type: AlertType.Success,
      })
    );
    return () => undefined;
  }, [
    updateAccountReturnResult.data,
    updateAccountReturnResult.isSuccess,
    dispatch,
  ]);

  return (
    <section className="w-full rounded-[16px] shadow-card bg-white p-1 md:p-[24px] mt-[5px]">
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        className="mb-[30px]"
      >
        <Form>
          {updateAccountReturnResult.isError &&
            InputApiErrorMessage(
              //@ts-expect-error
              updateAccountReturnResult.error?.data?.message
            )}
          <div className="relative h-[61px] rounded-[8px] border border-gray-200 bg-gray-50 flex items-center pl-[20px] mb-[24px]">
            <FaFacebookF />
            <Field
              component={CustomFormikInput}
              name="facebook"
              placeholder="Your facebook profile url"
              type="url"
              className="h-full w-full border-none"
              containerClassName="ml-[15px] h-full w-full min-w-[61px]"
            />
          </div>
          <div className="relative h-[61px] rounded-[8px] border border-gray-200 bg-gray-50 flex items-center pl-[20px] mb-[24px]">
            <BsInstagram />
            <Field
              component={CustomFormikInput}
              name="instagram"
              placeholder="Your instagram profile url"
              type="url"
              className="h-full w-full border-none"
              containerClassName="ml-[15px] h-full w-full min-w-[61px]"
            />
          </div>
          <div className="relative h-[61px] rounded-[8px] border border-gray-200 bg-gray-50 flex items-center pl-[20px] mb-[24px]">
            <GrLinkedinOption />
            <Field
              component={CustomFormikInput}
              name="linkedin"
              placeholder="Your linkedin profile url"
              type="url"
              className="h-full w-full border-none"
              containerClassName="ml-[15px] h-full w-full min-w-[61px]"
            />
          </div>
          <div className="relative h-[61px] rounded-[8px] border border-gray-200 bg-gray-50 flex items-center pl-[20px] mb-[24px]">
            <FaTwitter />
            <Field
              component={CustomFormikInput}
              name="twitter"
              placeholder="Your twitter profile url"
              type="url"
              className="h-full w-full border-none"
              containerClassName="ml-[15px] h-full w-full min-w-[61px]"
            />
          </div>

          <div className="flex items-center justify-end w-full mt-[24px]">
            <Button
              disabled={updateAccountReturnResult.isLoading}
              isLoading={updateAccountReturnResult.isLoading}
              loadingColor="white"
              loadingSpinnerSize={40}
              type="submit"
              className="bg-primary rounded-[6px] active:scale-95 duration-150 text-white font-bold text-[14px] w-[134px] h-[33px]"
            >
              Save Changes
            </Button>
          </div>
        </Form>
      </Formik>
    </section>
  );
};

export default SocialLinks;
