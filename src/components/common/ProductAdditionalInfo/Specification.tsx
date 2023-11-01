import draftToHtml from 'draftjs-to-html';
import { Interweave } from 'interweave';

interface IProps {
  specification?: string;
}

function Specification({ specification }: IProps): JSX.Element {
  const data = draftToHtml(JSON.parse(specification ?? ''));
  return (
    <div className="p-[24px] w-full h-full">
      {data?.trim() ? (
        <Interweave content={data} />
      ) : (
        <div className="w-full h-full flex items-center justify-center pt-[86px]">
          <h1 className="text-gray-500">No Specification:</h1>
        </div>
      )}
    </div>
  );
}

export default Specification;
