import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';
import SvgSpinier from './SvgSpinier';

export const LoadingProductCart = () => {
  return (
    <div
      className="bg-gray-200 md:w-[32%] lg:w-[24%] xl:min-w-[287px] 
         max-w-xs w-[48%] h-[260px] xl:min-h-[280px] max-h-[280px] mb-5
          md:mb-7 rounded-md xl:mb-12 pulse-animation mr-3"
    />
  );
};

//-----------------------------------------
interface LoadingPageProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export const LoadingPage: FC<LoadingPageProps> = props => {
  return (
    <div
      {...props}
      className={`bg-white w-full min-h-[60vh] flex items-center justify-center`}
    >
      <SvgSpinier color="#008ECC" width={50} />
    </div>
  );
};
