const Schedule = () => {
  return (
    <div className="flex-grow lg:pt-4 mt-7 lg:mt-0 w-2/4 sm:w-[30%] lg:w-1/4 text-white">
      <div className="w-full">
        <p className="cursor-pointer font-semibold text-lg sm:text-2xl">
          Schedule
        </p>

        <ul className="lg:mt-10 mt-4 text-sm md:text-base w-auto">
          <li className="mb-2">
            Monday - Friday
            <span className="pl-3 text-yellow-400 font-medium">9AM - 10PM</span>
          </li>
          <li className="mb-2">
            Saturday
            <span className="pl-3 text-yellow-400 font-medium">9AM - 9PM</span>
          </li>
          <li className="mb-2">
            Sunday
            <span className="pl-3 text-yellow-400 font-medium">Closed</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Schedule;
