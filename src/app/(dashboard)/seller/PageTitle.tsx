import { FC, ReactElement } from 'react';

//-------------------------------------------------
interface IProps {
  pageName?: string;
  breadcrumb?: ReactElement;
}
//-------------------------------------------------

const PageTitle: FC<IProps> = ({ pageName, breadcrumb }) => {
  return (
    <>
      {pageName && (
        <h1 className="text-base lg:text-[24px] font-bold py-[4px] lg:py-[12px]">
          {pageName}
        </h1>
      )}
      {breadcrumb}
    </>
  );
};

export default PageTitle;
