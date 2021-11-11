export const LoadingShoppingCart = () => {
  return (
    <div
      className="bg-gray-100 md:w-[32%] lg:w-[24%] 2xl:min-w-[320px] mr-3
       max-w-xs w-[48%] h-[260px] xl:min-h-[308px] max-h-[290px] mb-5 md:mb-7 xl:mb-12 pulse-animation"
    ></div>
  );
};

export const LoadingLayout = ({ height, width }) => {
  return (
    <div
      className={`mb-5 pulse-animation bg-gray-100 w-[${width && width}] h-[${
        height && height
      }]`}
    >
      <p className="opacity-0">d</p>
    </div>
  );
};
