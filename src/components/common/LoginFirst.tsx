import { loginCloseModal } from '@/redux/features/loginFirstSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import Button from './Button';
import CustomModal from './CustomModal';

const LoginFirst = () => {
  const loginFirst = useAppSelector(state => state.loginFirstSlice);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleLoginClick = () => {
    handleCloseModal();

    if (loginFirst.redirectUrl) {
      router.push(`/auth?redirect=${loginFirst.redirectUrl}`);
    } else {
      router.push('/auth');
    }
  };

  const handleCloseModal = () => {
    dispatch(loginCloseModal());
  };

  return (
    <CustomModal
      style={{ width: 350 }}
      onClose={handleCloseModal}
      isOpen={loginFirst.isOpen}
    >
      <div className="w-[320px] mx-auto flex flex-col justify-end">
        <div className="w-full flex">
          <div className="h-[50px] w-[50px] rounded-[8px] bg-[#F5F5F5] flex items-center justify-center">
            <AiOutlineCheckCircle />
          </div>
          <div className="pl-3">
            <h1 className="text-[20px] font-semibold">Please login first!</h1>
            <p className="mt-2 text-sm text-[#54595E]">
              To achieve your goals.
            </p>
          </div>
        </div>

        <Button
          onClick={handleLoginClick}
          className="bg-primary mt-[24px] w-full rounded-[6px] active:scale-95 duration-150 text-white font-bold text-[14px] h-[44px]"
        >
          Login
        </Button>
      </div>
    </CustomModal>
  );
};

export default LoginFirst;
