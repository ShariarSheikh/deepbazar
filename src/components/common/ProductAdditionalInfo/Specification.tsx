import { Interweave } from 'interweave';

interface IProps {
  specification: string;
}

function Specification({ specification }: IProps): JSX.Element {
  return (
    <div className="p-[24px] w-full h-full">
      {specification?.trim() ? (
        <Interweave content={specification} />
      ) : (
        <div className="w-full h-full flex items-center justify-center pt-[86px]">
          <h1 className="text-gray-500">No Specification:</h1>
        </div>
      )}
    </div>
  );
}

export default Specification;
