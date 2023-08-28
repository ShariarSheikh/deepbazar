import { FC, FormEvent } from 'react';
import { FaApple, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

interface IProps {
  activeOldUserHandler: () => void;
}

const SignUp: FC<IProps> = ({ activeOldUserHandler }) => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={onSubmit}
      className="w-full mt-[40px] max-w-[320px] mx-auto"
    >
      <div className="w-full flex space-x-2 justify-between items-center">
        <input
          type="text"
          value=""
          placeholder="First Name"
          className="h-[42px] rounded-[6px] bg-[#F3F9FB] w-full max-w-[45%] px-2 outline-[#E5F8FE] text-[12px]"
        />
        <input
          type="text"
          value=""
          placeholder="Last Name"
          className="h-[42px] rounded-[6px] bg-[#F3F9FB] w-full max-w-[45%] px-2 outline-[#E5F8FE] text-[12px]"
        />
      </div>
      <div className="w-full flex flex-col space-y-4 justify-center items-center mt-[18px]">
        <input
          type="text"
          value=""
          placeholder="Enter Email"
          className="h-[42px] rounded-[6px] bg-[#F3F9FB] w-full max-w-[320px] px-2 outline-[#E5F8FE] text-[12px]"
        />
        <input
          type="text"
          value=""
          placeholder="Password"
          className="h-[42px] rounded-[6px] bg-[#F3F9FB] w-full max-w-[320px] px-2 outline-[#E5F8FE] text-[12px]"
        />
      </div>

      <button className="shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)] active:scale-95 duration-150 flex justify-center items-center w-full mt-[25px] bg-primary h-[42px] rounded-[6px] text-white text-[13px]">
        Sign Up
      </button>
      <div className="flex items-center justify-between w-full mt-[20px]">
        <div className="h-[1px] w-[32%] bg-[#e5e5e6]"></div>
        <p className="text-[12px] text-gray-400">Or continue with</p>
        <div className="h-[1px] w-[32%] bg-[#e5e5e6]"></div>
      </div>

      <button
        onClick={activeOldUserHandler}
        className="text-[12px] text-gray-400 mt-[10px] flex items-center space-x-1 cursor-text"
      >
        <p>Already have an account?</p>
        <p className="text-primary cursor-pointer hover:underline">Login</p>
      </button>

      <div className="flex items-center justify-between mt-[20px]">
        <div className="w-[30%] flex items-center justify-center cursor-pointer hover:shadow-lg h-[42px] rounded-[4px] border border-[#e5e5e6]">
          <FcGoogle />
        </div>
        <div className="w-[30%] flex items-center justify-center cursor-pointer hover:shadow-lg h-[42px] rounded-[4px] border border-[#e5e5e6]">
          <FaApple />
        </div>
        <div className="w-[30%] flex items-center justify-center cursor-pointer hover:shadow-lg h-[42px] rounded-[4px] border border-[#e5e5e6]">
          <FaFacebookF color="#4267B2" />
        </div>
      </div>
    </form>
  );
};

export default SignUp;
