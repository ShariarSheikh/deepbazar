'use client';

import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useRef,
  useState,
} from 'react';
import { AiFillEyeInvisible, AiOutlineEye } from 'react-icons/ai';

export interface CustomInput
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  fullWidth?: boolean;
  disabled?: boolean;
  containerClassName?: string;
  labelClassName?: string;
}

function Input({
  containerClassName,
  type,
  className,
  placeholder,
  labelClassName,
  ...rest
}: CustomInput) {
  const [visiblePass, setVisiblePass] = useState<boolean>(false);
  const props = rest;

  const inputRef = useRef<HTMLInputElement>(null);

  /**
   * FOR PASSWORD INPUT
   */
  if (type === 'password')
    return (
      <div className={`${containerClassName} w-full relative`}>
        <input
          ref={inputRef}
          {...props}
          type={visiblePass ? 'text' : type}
          className={`${className} block px-2.5 pb-2.5 pt-4 w-full z-20 text-sm bg-gray-50 rounded-[8px] border border-gray-300 appearance-none focus:outline-none focus:ring-0 peer`}
          placeholder=" "
        />
        <label
          role="presentation"
          onClick={() => inputRef.current?.focus()}
          htmlFor={placeholder}
          className={`absolute text-sm text-gray-500 bg-transparent duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-successLight peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${labelClassName}`}
        >
          {placeholder}
        </label>

        {visiblePass ? (
          <AiOutlineEye
            onClick={() => setVisiblePass(false)}
            className="text-gray-600 cursor-pointer active:scale-75 duration-200 hover:border-primary absolute right-3 top-1/3"
          />
        ) : (
          <AiFillEyeInvisible
            onClick={() => setVisiblePass(true)}
            className="text-gray-600 cursor-pointer active:scale-75 duration-200 hover:border-primary absolute right-3 top-1/3"
          />
        )}
      </div>
    );

  return (
    <div className={`${containerClassName} w-full relative`}>
      <input
        ref={inputRef}
        type={type}
        {...props}
        className={`${className} block px-2.5 pb-2.5 pt-4 w-full text-sm bg-gray-50 rounded-[8px] border border-gray-300 appearance-none focus:outline-none focus:ring-0 peer`}
        placeholder=" "
      />
      <label
        role="presentation"
        onClick={() => inputRef.current?.focus()}
        htmlFor={placeholder}
        className={`absolute text-sm text-gray-500 bg-transparent duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 ${labelClassName}`}
      >
        {placeholder}
      </label>
    </div>
  );
}

export default Input;
