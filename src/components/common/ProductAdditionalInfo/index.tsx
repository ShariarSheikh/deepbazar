import { FC, Suspense, useState } from 'react';
import SvgSpinier from '../SvgSpinier';
import Description from './Description';
import QuestionAndAns from './QuestionAns';
import Reviews from './Reviews';
import Specification from './Specification';

//-------------------------------------------------
interface IProps {
  productId: number;
  isEditable: boolean;
}

enum ComponentTypeEnum {
  Specification = 'Specification',
  Description = 'Description',
  Reviews = 'Reviews',
  QnA = 'QnA',
}
//-------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductAdditionalInfo: FC<IProps> = ({ isEditable, productId }) => {
  const [componentType, setComponentType] = useState<ComponentTypeEnum>(
    ComponentTypeEnum.Reviews
  );

  const changeComponentHandler = (type: ComponentTypeEnum): void => {
    setComponentType(type);
  };

  return (
    <div className="mt-[40px] bg-white w-full rounded-b-[18px]">
      <header className="h-[48px] w-full flex items-center border-b borderColor">
        <ul className="w-full flex items-center h-full">
          <li
            role="presentation"
            onClick={() =>
              changeComponentHandler(ComponentTypeEnum.Specification)
            }
            className={`text-[14px] font-semibold mr-[40px] ml-[24px] cursor-pointer h-full flex items-center border-b-[2px] duration-150 ${
              componentType === ComponentTypeEnum.Specification
                ? 'border-gray-800 text-gray-700'
                : 'border-transparent text-gray-600'
            }`}
          >
            Specification
          </li>
          <li
            role="presentation"
            onClick={() =>
              changeComponentHandler(ComponentTypeEnum.Description)
            }
            className={`text-[14px] font-semibold mr-[40px] cursor-pointer h-full flex items-center border-b-[2px] duration-150 ${
              componentType === ComponentTypeEnum.Description
                ? 'border-gray-800 text-gray-700'
                : 'border-transparent text-gray-600'
            }`}
          >
            Description
          </li>
          <li
            role="presentation"
            onClick={() => changeComponentHandler(ComponentTypeEnum.Reviews)}
            className={`text-[14px] font-semibold mr-[40px] cursor-pointer h-full flex items-center border-b-[2px] duration-150 ${
              componentType === ComponentTypeEnum.Reviews
                ? 'border-gray-800 text-gray-700'
                : 'border-transparent text-gray-600'
            }`}
          >
            Reviews(0)
          </li>
          <li
            role="presentation"
            onClick={() => changeComponentHandler(ComponentTypeEnum.QnA)}
            className={`text-[14px] font-semibold mr-[40px] cursor-pointer h-full flex items-center border-b-[2px] duration-150 ${
              componentType === ComponentTypeEnum.QnA
                ? 'border-gray-800 text-gray-700'
                : 'border-transparent text-gray-600'
            }`}
          >
            Q&A(0)
          </li>
        </ul>
      </header>
      <div className="bg-white min-h-[238px] w-full relative rounded-b-[18px] shadow-card">
        <Suspense
          fallback={
            <div className="w-full h-full flex flex-col justify-center items-center absolute inset-0 bg-white">
              <SvgSpinier />
            </div>
          }
        >
          {componentType === ComponentTypeEnum.Specification ? (
            <Specification specification={''} />
          ) : null}
          {componentType === ComponentTypeEnum.Reviews ? (
            <Reviews isEditable={isEditable} />
          ) : null}
          {componentType === ComponentTypeEnum.Description ? (
            <Description description={''} />
          ) : null}
          {componentType === ComponentTypeEnum.QnA ? (
            <QuestionAndAns isEditable={isEditable} />
          ) : null}
        </Suspense>
      </div>
    </div>
  );
};

export default ProductAdditionalInfo;
