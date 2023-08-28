//---------------------------------------

//---------------------------------------

const CategorySection = () => {
  //HOOKS

  return (
    <section className="w-full relative mt-[60px]">
      <h1 className="text-[28px] font-bold font-poppins">
        Shop Our Top Categories
      </h1>
      <div className="w-full relative flex items-center space-x-4 justify-between mt-[40px]">
        {categories.map(category => (
          <div
            key={category.id}
            className="w-full max-w-[20%] h-[220px] rounded-[10px] cursor-pointer group relative overflow-hidden [&>img]:hover:scale-110"
          >
            <img
              src={category.bgImgUrl}
              alt={category.catName}
              className="w-full h-full duration-150 z-10 object-cover"
            />

            <h1 className="pt-[20px] cursor-pointer absolute inset-0 text-[24px] font-poppins z-20 text-center font-medium text-white group">
              {category.catName}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
// https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e570738029a725e686_Furniture-min.png
interface Category {
  id: number;
  bgImgUrl: string;
  catName: string;
  totalItems: number;
}
export const categories: Category[] = [
  {
    id: 1,
    bgImgUrl:
      'https://img.freepik.com/free-vector/realistic-fitness-trackers_23-2148530529.jpg?w=740&t=st=1693248758~exp=1693249358~hmac=4f663d5220a3a056151020ffef6db37cb8040c6724db5acd0a2047ad4b08bb9c',
    catName: 'Watch',
    totalItems: 50,
  },
  {
    id: 2,
    bgImgUrl:
      'https://img.freepik.com/free-psd/3d-collection-with-hands-holding-smartphone_23-2148938882.jpg?w=1060&t=st=1693249001~exp=1693249601~hmac=4fded47300411a62fd1f59fdcc4d79a108b2e8c48f993f04e88f9b9d10d47dba',
    catName: 'Smart Phone',
    totalItems: 82,
  },
  {
    id: 3,
    bgImgUrl:
      'https://img.freepik.com/premium-photo/view-3d-laptop-device-with-screen-keyboard_23-2150713937.jpg?w=740',
    catName: 'Laptop',
    totalItems: 25,
  },
  {
    id: 4,
    bgImgUrl:
      'https://img.freepik.com/free-psd/3d-illustration-journalism-press-item_23-2150233924.jpg?w=740&t=st=1693249198~exp=1693249798~hmac=1e2cd496fd6571b8936530f5b924b3f681d758c67d5f3645facc36a165da4283',
    catName: 'Camera',
    totalItems: 44,
  },
  {
    id: 5,
    bgImgUrl:
      'https://img.freepik.com/free-psd/3d-illustration-blue-headphone-clipping-path_1419-2298.jpg?w=740&t=st=1693249389~exp=1693249989~hmac=e2054123e3d0580ca649d12e5fb909e16d71a20fa1ccd6225cba3017f57137df',
    catName: 'Audio',
    totalItems: 140,
  },
];
