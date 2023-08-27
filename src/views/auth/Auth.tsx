import { FC, useState } from 'react';
import Login from './Login';
import SignUp from './SignUp';

const Auth: FC = () => {
  const [isBuyer, setIsBuyer] = useState<boolean>(false);
  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  const authTypeSeller = () => setIsBuyer(false);
  const authTypeBuyer = () => setIsBuyer(true);
  const activeNewUserHandler = () => setIsNewUser(true);
  const activeOldUserHandler = () => setIsNewUser(false);

  return (
    <div className="w-full">
      <section className="w-full flex flex-col lg:flex-row justify-between">
        <div className="w-[60%] hidden lg:block">
          <div className="w-full h-full flex items-start justify-start">
            <AuthContent isBuyer={isBuyer} isNewUser={isNewUser} />
          </div>
        </div>
        <div className="w-[40%] flex flex-col items-center">
          <h1 className="text-primary text-[25px] font-poppins font-bold">
            Sign Up/Sign In As
          </h1>
          <div className="flex items-center space-x-2 mt-[20px]">
            <button
              onClick={authTypeBuyer}
              style={{
                background: isBuyer ? '#F3F9FB' : '#E9E9E9',
                color: isBuyer ? 'black' : '#a6a4a4',
              }}
              className="w-[86px] h-[35px] rounded-[20px] flex items-center justify-center space-x-1 active:scale-95 duration-200"
            >
              <input
                type="checkbox"
                checked={isBuyer}
                onChange={() => {
                  return undefined;
                }}
              />
              <p className="text-[12px]">Buyer</p>
            </button>

            <button
              onClick={authTypeSeller}
              style={{
                background: !isBuyer ? '#F3F9FB' : '#E9E9E9',
                color: !isBuyer ? 'black' : '#a6a4a4',
              }}
              className="w-[86px] h-[35px] rounded-[20px] flex items-center justify-center space-x-1 active:scale-95 duration-200"
            >
              <input type="checkbox" checked={!isBuyer} />
              <p className="text-[12px]">Seller</p>
            </button>
          </div>
          {isNewUser ? (
            <SignUp activeOldUserHandler={activeOldUserHandler} />
          ) : (
            <Login activeNewUserHandler={activeNewUserHandler} />
          )}
        </div>
      </section>
    </div>
  );
};

export default Auth;

const AuthContent = ({
  isBuyer,
  isNewUser,
}: {
  isBuyer: boolean;
  isNewUser: boolean;
}) => {
  return (
    <div>
      {isBuyer ? (
        <h1 className="text-[50px] font-semibold font-poppins leading-tight text-primary">
          Sign In And Buy
          <br />
          Your Favorite Products
        </h1>
      ) : (
        <h1 className="text-[50px] font-semibold font-poppins leading-tight text-primary">
          Sign Up And <br />
          Sell Your Products
        </h1>
      )}
      {isNewUser ? (
        <p className="text-[13px] text-gray-400 flex items-center mt-[20px]">
          <p>
            Already have an account?
            <br />
            <span className="ml-[2px] text-primary cursor-pointer hover:underline">
              Sign In Here!
            </span>
          </p>
        </p>
      ) : (
        <p className="text-[13px] text-gray-400 flex items-center mt-[20px]">
          <p>
            If you {"don't"} an account <br />
            <span>
              you can
              <span className="ml-[2px] text-primary cursor-pointer hover:underline">
                Sign Up Here!
              </span>
            </span>
          </p>
        </p>
      )}
    </div>
  );
};
