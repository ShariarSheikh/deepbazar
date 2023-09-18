'use client';

import CheckBox from '@/components/common/CheckBox';
import { categories } from '@/views/home/CategorySection';
import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

const SellerLayout: FC<IProps> = ({ children }) => {
  //   const [expendSidebar, setExpendSidebar] = useState<boolean>(true);
  return (
    <section className="w-full h-auto bg-primaryLight">
      <div className="w-full flex min-h-screen max-w-[1201px] mx-auto">
        <div
          style={{
            maxWidth: 280,
          }}
          className="max-h-[calc(100vh-16px)] sticky top-0 w-full pt-4 px-4 rounded-[6px] bg-white border-r border-gray-200 border-dashed"
        >
          <h1 className="text-lg mb-[16px] font-medium">Category</h1>
          <ul className="border-b border-gray-200">
            {categories.map(category => (
              <li
                key={category.id}
                className="mb-3 flex items-center h-[20px] text-sm"
              >
                <CheckBox
                  name={category.catName}
                  isChecked
                  onClick={() => {}}
                />
                <span className="ml-[8px]">{category.catName}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full h-full px-4 pt-4">
          <h2>Input & filter</h2>
          {children}
        </div>
      </div>
    </section>
  );
};

export default SellerLayout;
