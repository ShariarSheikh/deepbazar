import Link from 'next/link';

const LanguageAndContact = () => {
  return (
    <div className="h-full flex items-center">
      <div className="ml-5">
        <div className="leading-none text-gray-700 text-[13px]">Language</div>
        <div className="leading-none text-gray-700 text-[14px] font-medium">
          English
        </div>
      </div>
      <Link href="tel:017293" className="ml-5 mr-5 cursor-pointer">
        <p className="leading-none text-gray-700 text-[13px]">017293</p>
        <p className="leading-none text-gray-700 font-medium text-[14px]">
          Contact Us
        </p>
      </Link>
    </div>
  );
};

export default LanguageAndContact;
