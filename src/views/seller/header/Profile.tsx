// import { removeCookies } from 'cookies-next';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import Button from 'src/components/Button';

interface IUser {
  email: string;
  password: string;
  name: string;
  profileImg: string;
  token: string;
  accessToken: string;
}

function Profile({ user }: { user: IUser }) {
  const { replace } = useRouter();

  const logOutHandler = () => {
    // removeCookies('accessToken');
    localStorage.removeItem('user');
    replace('/');
  };
  return (
    <div className="w-[200px] max-h-[238px] text-gray-800 pb-2 overflow-hidden rounded-md bg-white z-50 shadow-dropdown absolute top-[40px] right-6">
      <div className="border-b border-dashed borderColor px-5 py-4 w-full">
        <h1 className="font-semibold">{user.name}</h1>
        <p className="text-gray-600 text-sm">{user.email}</p>
      </div>

      <ul className="py-1 px-2 mt-1">
        <li className="h-8 flex px-2 cursor-pointer items-center rounded-md hover:bg-primaryMain hover:bg-opacity-[8%]">
          <Link href="/dashboard/overview" passHref>
            Home
          </Link>
        </li>
        <li className="h-8 flex px-2 cursor-pointer items-center rounded-md hover:bg-primaryMain hover:bg-opacity-[8%]">
          <Link href="/dashboard/profile" passHref>
            Profile
          </Link>
        </li>
        <li className="h-8 flex px-2 cursor-pointer items-center rounded-md hover:bg-primaryMain hover:bg-opacity-[8%]">
          <Link href="/dashboard/settings" passHref>
            Settings
          </Link>
        </li>
      </ul>
      <div className="border-t border-dashed border-black-10" />
      <div className="py-1 px-2 mt-1">
        <button
          onClick={logOutHandler}
          className="py-2 px-2 h-8 w-full flex cursor-pointer 
         items-center rounded-md hover:bg-primaryMain hover:bg-opacity-[8%]"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
