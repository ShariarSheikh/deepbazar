import Skeleton from '@/components/common/Skeleton';
import { useGetCategoryQuery } from '@/redux/services/categoryApi';
import Link from 'next/link';

//---------------------------------------

//---------------------------------------

const CategorySection = () => {
  const { data, isSuccess, isLoading } = useGetCategoryQuery();

  const loadingSkeleton = (
    <>
      <Skeleton width={'30%'} height={220} />
      <Skeleton width={'30%'} height={220} />
      <Skeleton width={'30%'} height={220} />
      <Skeleton width={'30%'} height={220} />
      <Skeleton width={'30%'} height={220} />
    </>
  );

  return (
    <section className="w-full relative mt-[40px] md:mt-[60px]">
      <h1 className="text-sm md:text-[28px] font-bold">
        Shop Our Top Categories
      </h1>

      <div className="w-full relative flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-0 md:space-x-4 justify-start md:justify-between mt-[24px] md:mt-[40px]">
        {isLoading && loadingSkeleton}

        {isSuccess &&
          data?.data.map((category, index) => {
            const isLastItem = index + 1 === data.data.length;
            return (
              <Link
                key={category._id}
                href={{
                  pathname: '/shop',
                  query: {
                    category: category.name,
                  },
                }}
                className={`w-full ${
                  isLastItem ? 'max-w-[63%]' : 'max-w-[30%]'
                }  md:max-w-[20%] h-[126px] md:h-[220px]`}
              >
                <div className="w-full h-full rounded-[10px] cursor-pointer group relative overflow-hidden [&>img]:hover:scale-110">
                  <img
                    src={category.imgUrl}
                    alt={category.name}
                    className="w-full h-full duration-150 z-10"
                    style={{
                      objectFit: isLastItem ? 'fill' : 'cover',
                    }}
                  />

                  <h1 className="pt-[20px] absolute inset-0 text-sm md:text-[24px] z-20 text-center font-medium text-white group">
                    {category.name}
                  </h1>

                  <h1 className="pt-[195px] text-opacity-[64%]  absolute inset-0 text-[12px] z-20 text-center font-medium text-white group">
                    {category.totalItems}
                  </h1>
                </div>
              </Link>
            );
          })}
      </div>
    </section>
  );
};

export default CategorySection;
