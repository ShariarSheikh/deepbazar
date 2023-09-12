//---------------------------------------

import Link from 'next/link';

//---------------------------------------

const CategorySection = () => {
  //HOOKS

  return (
    <section className="w-full relative mt-[40px] md:mt-[60px]">
      <h1 className="text-sm md:text-[28px] font-bold">
        Shop Our Top Categories
      </h1>
      <div className="w-full relative flex flex-wrap md:flex-nowrap items-center gap-3 md:gap-0 md:space-x-4 justify-start md:justify-between mt-[24px] md:mt-[40px]">
        {categories.map((category, index) => {
          const isLastItem = index + 1 === categories.length;
          return (
            <Link
              key={category.id}
              href={{
                pathname: '/shop',
                query: {
                  category: category.catPath,
                },
              }}
              className={`w-full ${
                isLastItem ? 'max-w-[63%]' : 'max-w-[30%]'
              }  md:max-w-[20%] h-[126px] md:h-[220px]`}
            >
              <div className="w-full h-full rounded-[10px] cursor-pointer group relative overflow-hidden [&>img]:hover:scale-110">
                <img
                  src={category.bgImgUrl}
                  alt={category.catName}
                  className="w-full h-full duration-150 z-10"
                  style={{
                    objectFit: isLastItem ? 'fill' : 'cover',
                  }}
                />

                <h1 className="pt-[20px] cursor-pointer absolute inset-0 text-sm md:text-[24px] z-20 text-center font-medium text-white group">
                  {category.catName}
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
interface Category {
  id: number;
  bgImgUrl: string;
  catName: string;
  totalItems: number;
  catPath: string;
}
export const categories: Category[] = [
  {
    id: 1,
    bgImgUrl:
      'https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg?w=740&t=st=1693248758~exp=1693249358~hmac=4f663d5220a3a056151020ffef6db37cb8040c6724db5acd0a2047ad4b08bb9c',
    catName: 'Watch',
    totalItems: 50,
    catPath: 'watch',
  },
  {
    id: 2,
    bgImgUrl:
      'https://img.freepik.com/free-psd/3d-collection-with-hands-holding-smartphone_23-2148938882.jpg?w=1060&t=st=1693249001~exp=1693249601~hmac=4fded47300411a62fd1f59fdcc4d79a108b2e8c48f993f04e88f9b9d10d47dba',
    catName: 'Smart Phone',
    totalItems: 82,
    catPath: 'smart-phone',
  },
  {
    id: 3,
    bgImgUrl:
      'https://img.freepik.com/premium-photo/view-3d-laptop-device-with-screen-keyboard_23-2150713937.jpg?w=740',
    catName: 'Laptop',
    totalItems: 25,
    catPath: 'laptop',
  },
  {
    id: 4,
    bgImgUrl:
      'https://img.freepik.com/free-psd/3d-illustration-journalism-press-item_23-2150233924.jpg?w=740&t=st=1693249198~exp=1693249798~hmac=1e2cd496fd6571b8936530f5b924b3f681d758c67d5f3645facc36a165da4283',
    catName: 'Camera',
    totalItems: 44,
    catPath: 'camera',
  },
  {
    id: 5,
    bgImgUrl:
      'https://img.freepik.com/free-psd/3d-illustration-blue-headphone-clipping-path_1419-2298.jpg?w=740&t=st=1693249389~exp=1693249989~hmac=e2054123e3d0580ca649d12e5fb909e16d71a20fa1ccd6225cba3017f57137df',
    catName: 'Audio',
    totalItems: 140,
    catPath: 'audio',
  },
];
