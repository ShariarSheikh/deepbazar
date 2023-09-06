import Category from './Category';
import DeepBazar from './DeepBazar';
import MenuList from './MenuList';
import Schedule from './Schedule';

const Footer = () => {
  return (
    <footer className="w-full bg-primary text-white min-h-[400px] py-4">
      <div className="w-full flex justify-start flex-wrap max-w-[1201px] m-auto pt-3 px-3">
        <DeepBazar />
        <MenuList />
        <Category />
        <Schedule />
      </div>
      <h3 className="text-center pt-[40px] pb-[6px]">© DeepBazar 2023</h3>
    </footer>
  );
};

export default Footer;
