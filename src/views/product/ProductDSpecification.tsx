import { Interweave } from 'interweave';
import { FC } from 'react';

const ProductDSpecification: FC<{ specification: string }> = ({
  specification,
}) => {
  return (
    <div className="w-full flex flex-col lg:flex-row border-t border-gray-200 pt-5 mt-10">
      <div className="w-full lg:w-3/6">
        <p className="text-xl font-semibold">Specification:</p>
        <Interweave content={specification} />
      </div>
      <div className="w-full lg:w-3/6 lg:pl-10 mt-4 lg:mt-0">
        <ul className="list-disc pl-6 lg:p-0">
          <li className="text-gray-600">What is Lorem Ipsum?</li>
          <li className="text-gray-600">Why do we use it?</li>
          <li className="text-gray-600">Where can I get some?</li>
          <li className="text-gray-600">Where does it come from?</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDSpecification;
