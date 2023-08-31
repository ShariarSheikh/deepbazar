import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FiPhoneCall } from 'react-icons/fi';

const DeepBazar = () => {
  return (
    <div className="flex-grow lg:pt-4 w-2/4 sm:w-[30%] md:w-1/4">
      <div className="w-full">
        <p className="cursor-pointer font-bold text-lg sm:text-2xl">
          <Link href="/" passHref>
            DeepBazar
          </Link>
        </p>

        <p className="lg:mt-10 mt-4 text-sm md:text-base font-semibold">
          Contact Us
        </p>
        <button className="mt-3 text-sm md:text-base flex items-center space-x-2">
          <FiPhoneCall className="text-white" /> <span>+880-01304802278</span>
        </button>

        <Link
          target="_blank"
          href="https://www.facebook.com/profile.php?id=100053248808536"
        >
          <button className="mt-3 text-sm md:text-base flex items-center space-x-2">
            <FaFacebookF className="text-white" /> <span>Facebook</span>
          </button>
        </Link>

        <Link target="_blank" href="https://www.linkedin.com/in/sheikhshariar">
          <button className="mt-3 text-sm md:text-base flex items-center space-x-2">
            <FaFacebookF className="text-white" /> <span>Linkedin</span>
          </button>
        </Link>

        <div className="mt-[20px]">
          {/* <div className="w-[80px] h-[80px] rounded-[8px] overflow-hidden">
            <img
              src="https://media.licdn.com/dms/image/D5603AQGYnacImXFB0w/profile-displayphoto-shrink_400_400/0/1675421505311?e=1698883200&v=beta&t=MnaWEG59nL1dby6RTrww3UD2KtS8ckfeZaua4lqKAEU"
              alt="shariar"
            />
          </div> */}
          <p className="mt-[4px] font-bold underline text-sm md:text-base cursor-pointer">
            Created by <a href="http://shariar.vercel.app"> Shariar </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DeepBazar;
