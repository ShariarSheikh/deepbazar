// import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { FormEvent, useState } from 'react';

//--------------------------------------------------------------

//--------------------------------------------------------------

const Login = () => {
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('123456');
  const [error, setError] = useState<string>('');

  const router = useRouter();

  //onsubmit
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (email !== userData.email) return setError('Invalid Authorization');
    if (password !== '123456') return setError('Invalid Authorization');
    Cookies.set('user', JSON.stringify(userData), { expires: 7 });
    router.push('/profile');
  };

  return (
    <div className="w-full h-screen bg-white px-3">
      <h1 className="text-xl font-roboto font-semibold text-center">
        Login DeepBazar
      </h1>

      <form
        onSubmit={onSubmit}
        className="w-full max-w-[360px] m-auto mt-9 pb-8"
      >
        <div className="flex flex-col mb-4">
          {error && <p className="text-red-400 py-3">{error}</p>}

          <label htmlFor="Email">Email</label>
          <input
            className="outline-none bg-blue-50 py-2 pl-2 text-gray-700"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            readOnly
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="Password">Password</label>
          <input
            className="outline-none bg-blue-50 py-2 pl-2 text-gray-700"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            minLength={6}
            readOnly
          />
        </div>

        {/* {userData.status === 'pending' ? (
          <button
            className="w-full mt-5 h-10 rounded-sm cursor-wait
         bg-gray-400 text-gray-800 font-medium active:scale-105 duration-200"
          >
            Loading...
          </button>
        ) : ( */}
        <button
          className="w-full mt-5 h-10 rounded-sm cursor-pointer
         bg-black text-yellow-400 font-medium active:scale-105 duration-200"
          type="submit"
        >
          Login
        </button>
        {/* )} */}
      </form>
    </div>
  );
};

const LoginSidebar = () => {
  // const { isShowLogin } = useAppSelector(state => state.loginSlice);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   document.body.style.overflow = isShowLogin ? 'hidden' : 'auto';
  // }, [isShowLogin]);

  return (
    <div
    // className={`fixed top-0 right-0 ${
    //   isShowLogin ? 'w-full' : 'w-0'
    // } min-h-screen bg-black bg-opacity-60 z-30`}
    >
      <div className="w-full min-h-screen flex justify-end items-center z-20">
        <div
        // className={`${
        //   isShowLogin ? 'w-[400px]' : 'w-0'
        // } overflow-hidden relative rounded-md transition-all duration-200`}
        >
          <h1
            // onClick={() => dispatch(showLoginHandler())}
            className="cursor-pointer bg-white w-full flex justify-end py-3 pr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-7 w-7 text-black "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </h1>

          <Login />
        </div>
      </div>
    </div>
  );
};

export default LoginSidebar;

export const userData = {
  name: 'Shariar',
  email: 'test@gmail.com',
  profileImg:
    'https://res.cloudinary.com/dthzw7gmp/image/upload/v1658795331/165830033613645356_zob9je.jpg',
  tokens: {
    accessTokens:
      '29893nrc3ur8vc3ucn837rvbnp9wicmewc3n98efj9384jfc93849fj3948fj398hf983jc398hf',
  },
};
