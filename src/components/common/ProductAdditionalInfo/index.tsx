import { FC, Suspense, useState } from 'react';
import SvgSpinier from '../SvgSpinier';
import Description from './Description';
import QuestionAndAns from './QuestionAns';
import Reviews from './Reviews';
import Specification from './Specification';

//-------------------------------------------------
export enum ComponentShowOnType {
  UserProductDetails = 'UserProductDetails',
  SellerDashboardProductDetails = 'SellerDashboardProductDetails',
}
interface IProps {
  productId: string;
  userId: string;
  specification?: string;
  description?: string;
  totalReview: number;
  componentFor: ComponentShowOnType;
  createReplyReviewsHandler?: () => void;
  createReplyQuestionHandler?: () => void;
}

enum ComponentTypeEnum {
  Specification = 'Specification',
  Description = 'Description',
  Reviews = 'Reviews',
  QnA = 'QnA',
}
//-------------------------------------------------

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ProductAdditionalInfo: FC<IProps> = ({
  componentFor,
  productId,
  userId,
  specification,
  description,
  totalReview,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createReplyReviewsHandler,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  createReplyQuestionHandler,
}) => {
  const [totalReviews, setTotalReviews] = useState<number>(totalReview);
  const [componentType, setComponentType] = useState<ComponentTypeEnum>(
    ComponentTypeEnum.Reviews
  );

  const changeComponentHandler = (type: ComponentTypeEnum): void => {
    setComponentType(type);
  };

  return (
    <div className="mt-[40px] bg-white w-full rounded-b-[18px]">
      <header className="h-[48px] w-full max-w-[640px] overflow-x-auto flex items-center border-b borderColor">
        <ul className="w-full flex items-center h-full">
          <li
            role="presentation"
            onClick={() =>
              changeComponentHandler(ComponentTypeEnum.Specification)
            }
            className={`text-[13px] lg:text-[14px] font-semibold mr-[18px] lg:mr-[40px] ml-[18px] lg:ml-[24px] cursor-pointer h-full flex items-center border-b-[2px] duration-150 ${
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
            className={`text-[13px] lg:text-[14px] font-semibold mr-[18px] lg:mr-[40px] cursor-pointer h-full flex items-center border-b-[2px] duration-150 ${
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
            className={`text-[13px] lg:text-[14px] font-semibold mr-[18px] lg:mr-[40px] cursor-pointer h-full flex items-center border-b-[2px] duration-150 ${
              componentType === ComponentTypeEnum.Reviews
                ? 'border-gray-800 text-gray-700'
                : 'border-transparent text-gray-600'
            }`}
          >
            Reviews({totalReviews})
          </li>
          <li
            role="presentation"
            onClick={() => changeComponentHandler(ComponentTypeEnum.QnA)}
            className={`text-[13px] lg:text-[14px] font-semibold mr-[18px] lg:mr-[40px] cursor-pointer h-full flex items-center border-b-[2px] duration-150 ${
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
            <Specification specification={specification} />
          ) : null}
          {componentType === ComponentTypeEnum.Reviews ? (
            <Reviews
              setTotalReviews={setTotalReviews}
              productId={productId}
              componentFor={componentFor}
            />
          ) : null}
          {componentType === ComponentTypeEnum.Description ? (
            <Description description={description} />
          ) : null}
          {componentType === ComponentTypeEnum.QnA ? (
            <QuestionAndAns
              userId={userId}
              productId={productId}
              componentFor={componentFor}
            />
          ) : null}
        </Suspense>
      </div>
    </div>
  );
};

export default ProductAdditionalInfo;
