/* eslint-disable no-new */
import PopUp from '@/components/common/PopUp';
import Image from 'next/image';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Profile from './Profile';

interface IUser {
  email: string;
  password: string;
  name: string;
  profileImg: string;
  token: string;
  accessToken: string;
}

interface IProps {
  setShowSearchBar: Dispatch<SetStateAction<boolean>>;
  isSticky: boolean;
}

export default function NavHeader({ setShowSearchBar, isSticky }: IProps) {
  const [showProfile, setShowProfile] = useState<boolean>(false);
  const [userData, setUserData] = useState<IUser>({
    email: '',
    password: '',
    name: '',
    profileImg: '',
    token: '',
    accessToken: '',
  });

  useEffect(() => {
    Notification.requestPermission();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const user = JSON.parse(localStorage.getItem('user'));
    setUserData(user);
  }, []);

  return (
    <div
      className={`duration-150 backdrop-blur-sm bg-white/80 ${
        isSticky ? 'h-[65px]' : 'h-[88px]'
      } w-full flex items-center justify-between relative z-50 text-gray-800`}
    >
      <div
        role="presentation"
        onClick={() => setShowSearchBar(prevState => !prevState)}
        className="w-[36px] h-[36px] ml-10 rounded-full hover:bg-primaryLight hover:bg-opacity-[8%] flex duration-200 transition-all active:scale-95 items-center justify-center cursor-pointer [&>svg]:hover:scale-110"
      >
        <AiOutlineSearch className="w-[20px] h-[20px] text-gray-600" />
      </div>

      <div className="h-full space-x-4 flex items-center">
        <div className="relative pr-10">
          <div
            role="presentation"
            onClick={() => setShowProfile(prevState => !prevState)}
            className="w-10 h-10 rounded-full overflow-hidden transition-all active:scale-95 cursor-pointer relative"
          >
            <Image
              fill
              src={
                userData?.profileImg ||
                'https://www.dropbox.com/s/iv3vsr5k6ib2pqx/avatar_default.jpg?dl=1'
              }
              alt="myImage"
            />
          </div>
          <PopUp setShow={setShowProfile} show={showProfile}>
            <Profile user={userData} />
          </PopUp>
        </div>
      </div>
    </div>
  );
}
