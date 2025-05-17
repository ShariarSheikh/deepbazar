import Button from '@/components/common/Button';
import { useSearchParams } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

interface IProps {
  totalItems: number;
}

const SearchAndFilter: FC<IProps> = ({ totalItems }) => {
  const [pageQuery, setPageQuery] = useState({
    category: '',
    startPrice: '',
    endPrice: '',
  });

  const searchParams = useSearchParams();

  const category = searchParams.get('category');
  const startPrice = searchParams.get('startPrice');
  const endPrice = searchParams.get('endPrice');

  useEffect(() => {
    setPageQuery({
      category: category ?? '',
      startPrice: startPrice ?? '',
      endPrice: endPrice ?? '',
    });
  }, [category, startPrice, endPrice]);

  return (
    <div className="mt-4 w-full h-[48px] bg-[#0c648bc7] text-white flex justify-between items-center px-3 rounded-[6px]">
      <div className="flex items-center text-[11px] md:text-sm text-[#d4e9ff]">
        <h2 className="mr-4">Active Filter:</h2>
        {pageQuery.category !== null && pageQuery.category?.trim() ? (
          <Button className="flex items-center space-x-2 cursor-pointer bg-[#0c648b] hover:bg-[#2f7d9f] border border-[#72acc57a] active:scale-95 duration-150 rounded-[6px] px-2 md:px-3 py-[2.5px] md:py-[5px] mr-3">
            <span>{pageQuery.category}</span>
          </Button>
        ) : null}

        {(pageQuery.startPrice !== null || pageQuery.endPrice !== null) &&
        pageQuery.startPrice?.trim() ? (
          <Button className="flex items-center space-x-2 cursor-pointer bg-[#0c648b] hover:bg-[#2f7d9f] border border-[#72acc57a] active:scale-95 duration-150 rounded-[6px] px-2 md:px-3 py-[2.5px] md:py-[5px]">
            <span>
              ${pageQuery.startPrice} to ${pageQuery.endPrice}
            </span>
          </Button>
        ) : null}
      </div>

      <div className="flex items-center space-x-1 text-[11px] md:text-sm">
        <h3 className="font-medium">{totalItems}</h3>
        <p className="text-[#d8eded]">Result found.</p>
      </div>
    </div>
  );
};

export default SearchAndFilter;
