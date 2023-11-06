'use client';
import Button from '@/components/common/Button';
import CustomModal from '@/components/common/CustomModal';
import {
  CustomFormikInput,
  InputApiErrorMessage,
} from '@/components/common/FormikCustomInput';
import { UploadAvatar } from '@/components/common/Upload';
import { AlertType, showAlert } from '@/redux/features/alertSlice';
import { logout, setCredentials } from '@/redux/features/authSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import {
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} from '@/redux/services/auth';
import { AccountCreate } from '@/types/auth.types';
import { Field, Form, Formik } from 'formik';
import { FC, useCallback, useEffect, useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  firstName: Yup.string().min(3),
  lastName: Yup.string().min(3),
  address: Yup.string().optional(),
  bio: Yup.string().optional(),
  zipCode: Yup.number().optional().typeError('String not allow'),
});

const GeneralPage: FC = () => {
  const [updateAccount, updateAccountReturnResult] = useUpdateAccountMutation();
  const [deleteAccount, deleteAccountReturnResult] = useDeleteAccountMutation();
  const user = useAppSelector(state => state.authSlice.user);
  const [profileImg, setProfileImg] = useState<string>('');
  const [bio, setBio] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  const initialValues = { ...user };
  const dispatch = useAppDispatch();

  // PROFILE IMAGE-------------------------------------------
  const profileImageHandler = useCallback((acceptedFiles: File[]) => {
    const newFiles = acceptedFiles.slice(0, 1).map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    // @ts-ignore
    setProfileImg(newFiles[0]);
  }, []);

  // DELETE ACCOUNT-------------------------------------------
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const deleteAccountHandler = async () => {
    await deleteAccount({ userId: user._id });
  };

  // UPDATE FORM-------------------------------------------
  const handleSubmit = async (values: AccountCreate) => {
    const formData = new FormData();

    formData.append('firstName', values.firstName);
    formData.append('lastName', values.lastName);
    formData.append('address', values.address);
    // @ts-ignore
    formData.append('zipCode', values.zipCode);
    formData.append('bio', bio);
    formData.append('imgUrl', profileImg);

    await updateAccount({
      // @ts-ignore
      userId: user?._id,
      // @ts-ignore
      user: formData,
    });
  };

  // USE-EFFECT-------------------------------------------
  useEffect(() => {
    if (!deleteAccountReturnResult.isSuccess) return;

    dispatch(
      showAlert({
        message: 'Your account has been deleted successfully!',
        type: AlertType.Info,
      })
    );

    dispatch(logout());

    return () => undefined;
  }, [
    deleteAccountReturnResult.isSuccess,
    deleteAccountReturnResult.isLoading,
    dispatch,
  ]);

  useEffect(() => {
    if (user?.bio) setBio(user.bio);
    if (user?.imgUrl) setProfileImg(user.imgUrl);

    return () => undefined;
  }, [user?.imgUrl, user?.bio, dispatch]);

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
        message: 'Your account updated successfully!',
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
    <section className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between mt-[14px] pb-10">
      <div className="bg-white rounded-[16px] w-full max-w-[220px] h-[264px] md:h-[364px] flex flex-col items-center justify-center shadow-card">
        <div className="w-[144px] h-[144px] flex items-center justify-center border borderColor border-dashed rounded-full">
          <div className="w-[128px] h-[128px] rounded-full relative">
            <UploadAvatar
              className="w-full h-full rounded-full"
              file={profileImg}
              thumbnail
              accept={{ 'image/*': ['.svg', '.png', '.jpeg', '.webp', '.jpg'] }}
              maxSize={1024 * 1024 * 5} // 5 MB
              onDrop={profileImageHandler}
            />
          </div>
        </div>
        <p className="text-[12px] text-gray-600 mt-[24px] max-w-[148px] w-full text-center">
          Allowed *.svg *.jpeg, *.jpg, *.png, *.webp Max size of 5 MB
        </p>
      </div>

      <Formik
        //@ts-ignore
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        className="w-full bg-white p-[24px] rounded-[16px] ml-[24px] shadow-card"
      >
        <Form>
          {updateAccountReturnResult.isError &&
            InputApiErrorMessage(
              //@ts-expect-error
              updateAccountReturnResult.error?.data?.message
            )}
          <div className="w-full flex gap-3 flex-wrap">
            <div className="w-full flex items-center justify-between">
              <div className="w-[48%]">
                <Field
                  component={CustomFormikInput}
                  placeholder="First Name"
                  name="firstName"
                  className="h-full w-full rounded-[8px]"
                  containerClassName="w-[49%] h-[48px]"
                />
              </div>
              <div className="w-[48%]">
                <Field
                  component={CustomFormikInput}
                  placeholder="Last Name"
                  name="lastName"
                  className="h-full w-full rounded-[8px]"
                  containerClassName="w-[49%] h-[48px]"
                />
              </div>
            </div>
            <Field
              component={CustomFormikInput}
              placeholder="Email"
              value={user?.email}
              readOnly
              className="h-full w-full rounded-[8px]"
              containerClassName="w-[49%] h-[48px]"
            />

            <Field
              component={CustomFormikInput}
              placeholder="Address"
              name="address"
              className="h-full w-full rounded-[8px] px-3"
              containerClassName="w-[49%] h-[48px]"
            />

            <Field
              component={CustomFormikInput}
              placeholder="Zip Code"
              name="zipCode"
              className="h-full w-full rounded-[8px]"
              containerClassName="w-[49%] h-[48px]"
            />

            <textarea
              value={bio}
              onChange={e => setBio(e.target.value)}
              className="bg-gray-50 text-sm p-3 min-h-[104px] max-h-[200px] rounded-[8px] border border-gray-200 w-full mt-[14px]"
              placeholder="About"
            />

            <div className="flex items-center justify-between w-full mt-[14px]">
              <Button
                onClick={openModal}
                type="button"
                className="bg-red-600 rounded-[6px] active:scale-95 duration-150 text-white font-bold text-[14px] w-[134px] h-[33px]"
              >
                Delete Account
              </Button>

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
          </div>
        </Form>
      </Formik>
      <CustomModal
        boxStyle={{ width: 380 }}
        onClose={closeModal}
        isOpen={isOpen}
      >
        <div className="w-[320px] mx-auto flex flex-col justify-end">
          <div className="w-full flex">
            <div className="h-[50px] w-[50px] rounded-[8px] bg-[#F5F5F5] flex items-center justify-center">
              <AiOutlineCheckCircle />
            </div>
            <div className="pl-3">
              <h1 className="text-[20px] font-semibold">
                Sure you want to delete?
              </h1>
              <p className="mt-2 text-sm text-[#54595E]">
                Are you sure you want to delete this?
              </p>
            </div>
          </div>
          {deleteAccountReturnResult.isError && (
            <p className="text-[11px] text-red-700 px-[3px] pt-[4px] pb-2">
              {InputApiErrorMessage(
                //@ts-expect-error
                deleteAccountReturnResult.error?.data?.message
              )}
            </p>
          )}
          <Button
            disabled={deleteAccountReturnResult.isLoading}
            isLoading={deleteAccountReturnResult.isLoading}
            loadingColor="white"
            loadingSpinnerSize={40}
            onClick={deleteAccountHandler}
            className="bg-red-600 mt-[24px] w-full rounded-[6px] active:scale-95 duration-150 text-white font-bold text-[14px] h-[33px]"
          >
            Confirm Delete
          </Button>
        </div>
      </CustomModal>
    </section>
  );
};

export default GeneralPage;
