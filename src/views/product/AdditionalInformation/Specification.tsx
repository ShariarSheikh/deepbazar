import { Interweave } from 'interweave';

function Specification({
  productSpecification,
}: {
  productSpecification: string;
}): JSX.Element {
  return (
    <div className="p-[24px] w-full h-full">
      {productSpecification?.trim() ? (
        <div>
          <Interweave content={productSpecification} />
        </div>
      ) : (
        <div className="w-full h-full flex items-center justify-center pt-[86px]">
          <h1 className="text-gray-500">No Specification:</h1>
        </div>
      )}
    </div>
  );
}

export default Specification;
