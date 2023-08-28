import Link from 'next/link';
import { FC, FormEvent } from 'react';
import { FaApple, FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

interface IProps {
  activeNewUserHandler: () => void;
}

const Login: FC<IProps> = ({ activeNewUserHandler }) => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={onSubmit}
      className="w-full mt-[40px] max-w-[320px] mx-auto"
    >
      <div className="w-full flex flex-col space-y-4 justify-center items-center">
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

      <button className="flex justify-end w-full mt-[10px] cursor-default">
        <Link
          href="/recover-password"
          className="text-[12px] text-gray-400 hover:underline"
        >
          Recover Password?
        </Link>
      </button>

      <button className="shadow-[0_10px_30px_rgba(8,_112,_184,_0.7)] active:scale-95 duration-150 flex justify-center items-center w-full mt-[10px] bg-primary h-[42px] rounded-[6px] text-white text-[13px]">
        Sign In
      </button>
      <div className="flex items-center justify-between w-full mt-[20px]">
        <div className="h-[1px] w-[32%] bg-[#e5e5e6]"></div>
        <p className="text-[12px] text-gray-400">Or continue with</p>
        <div className="h-[1px] w-[32%] bg-[#e5e5e6]"></div>
      </div>

      <button
        onClick={activeNewUserHandler}
        className="text-[12px] text-gray-400 mt-[10px] flex items-center space-x-1 cursor-text"
      >
        <p>New to DeepBazar?</p>
        <p className="text-primary cursor-pointer hover:underline">Sign Up</p>
      </button>

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
    </form>
  );
};

export default Login;
