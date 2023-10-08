'use client';
import Button from '@/components/common/Button';
import { NextPage } from 'next';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import { Role, RoleType } from './utils';

//------------------------------------------------------------------

//------------------------------------------------------------------

const Page: NextPage = () => {
  const [role, setRole] = useState<RoleType>(Role.USER);
  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  const keyword = useSearchParams().get('keyword');

  const authTypeSeller = () => setRole(Role.SELLER);
  const authTypeBuyer = () => setRole(Role.USER);
  const activeNewUserHandler = () => setIsNewUser(true);
  const activeOldUserHandler = () => setIsNewUser(false);

  useEffect(() => {
    if (!keyword) return undefined;
    if (keyword === 'seller') {
      setIsNewUser(true);
      setRole(Role.SELLER);
    }
  }, [keyword]);

  const forNewUser = (
    <>
      <div className="w-full max-w-[320px] flex items-center space-x-2 mt-[20px]">
        <Button
          onClick={authTypeBuyer}
          style={{
            background: role === Role.USER ? '#F3F9FB' : '#E9E9E9',
            color: role === Role.USER ? 'black' : '#a6a4a4',
          }}
          className="w-full max-w-[46%] h-[35px] rounded-[20px] flex items-center justify-center space-x-1 active:scale-95 duration-200"
        >
          <input
            type="checkbox"
            checked={role === Role.USER}
            onChange={() => {
              return undefined;
            }}
          />
          <p className="text-[12px]">Buyer</p>
        </Button>

        <Button
          onClick={authTypeSeller}
          style={{
            background: role === Role.SELLER ? '#F3F9FB' : '#E9E9E9',
            color: role === Role.SELLER ? 'black' : '#a6a4a4',
          }}
          className="w-full max-w-[46%] h-[35px] rounded-[20px] flex items-center justify-center space-x-1 active:scale-95 duration-200"
        >
          <input type="checkbox" checked={role === Role.SELLER} />
          <p className="text-[12px]">Seller</p>
        </Button>
      </div>
      <SignUp role={role} activeOldUserHandler={activeOldUserHandler} />
    </>
  );

  return (
    <main className="min-h-[65vh] max-w-[1201px] w-full m-auto mt-12 pb-4">
      <section className="w-full flex justify-center">
        <div className="w-full md:w-[40%] flex flex-col items-center">
          <h1 className="text-primary text-[25px] font-poppins font-bold">
            Sign Up/Sign In
          </h1>

          {isNewUser ? (
            forNewUser
          ) : (
            <Login activeNewUserHandler={activeNewUserHandler} />
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;
