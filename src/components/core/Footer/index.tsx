import DeepBazar from './DeepBazar';
import Information from './Information';
import MenuList from './MenuList';
import Subscription from './Subscription';
import Works from './Works';

const Footer = () => {
  return (
    <footer className="w-full bg-black min-h-[400px] py-4">
      <div className="w-full flex justify-start flex-wrap max-w-[1366px] m-auto pt-3 px-3">
        <DeepBazar />
        <MenuList />
        <Information />
        <Works />
        <Subscription />
      </div>
    </footer>
  );
};

export default Footer;
