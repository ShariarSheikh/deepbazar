import { Interweave } from 'interweave';
import draftToHtml from 'draftjs-to-html';

interface IProps {
  description?: string;
}

function Description({ description }: IProps): JSX.Element {
  return (
    <div className="p-[24px] w-full h-full">
      {description?.trim() ? (
        <Interweave content={draftToHtml(JSON.parse(description))} />
      ) : (
        <div className="w-full h-full flex items-center justify-center pt-[86px]">
          <h1 className="text-gray-500">No Description:</h1>
        </div>
      )}
    </div>
  );
}

export default Description;
