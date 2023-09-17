import RatingStar from '@/components/common/RatingStar';

function Information() {
  return (
    <div className="py-[40px] px-[16px] ml-[24px] text-gray-600">
      <h1 className="text-3xl font-semibold uppercase">
        AE 24/7 Active Hoodie With Gaiter
      </h1>

      <p className="text-base text-gray-500 pt-[3px]">
        The iPhone 13 Pro is a powerful device with an advanced camera system
        and A15 Bionic chip.
      </p>
      <div className="mt-3 flex items-center space-x-3">
        <div className="flex items-center space-x-1">
          <RatingStar
            reviews={{
              total: 10,
              star: 2.4,
            }}
          />
          <p className="text-[12px] text-gray-500 pt-[3px]">Ratings</p>
        </div>
        <span className="bg-[#D9D9D9] h-[18px] w-[1px]" />

        <p className="text-[12px] text-gray-500 pt-[3px]">
          (0) Answered Questions
        </p>
      </div>

      <button className="py-[2px] px-[8px] rounded-[8px] bg-green-500 text-[12px] text-white font-bold mt-[16px] cursor-default">
        In Stock
      </button>

      <p className="mt-3 pb-5 text-primary">
        <span className="font-semibold text-xl">
          <span className="font-medium pl-1">$</span>
          420.97
        </span>
      </p>

      <button className="h-[38px] w-[80px] rounded-[6px] text-[14px] font-medium cursor-pointer bg-red-600 text-white active:scale-75 duration-200">
        Delete
      </button>
    </div>
  );
}

export default Information;
