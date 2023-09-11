import { fData } from '@/utils/formatNumber';
import { FileRejection } from 'react-dropzone';
import { fileData } from '../../File-Thumbnail/utils';

type IProps = {
  fileRejections: FileRejection[];
};

function RejectionFiles({ fileRejections }: IProps) {
  if (!fileRejections.length) {
    return null;
  }

  return (
    <div>
      {fileRejections.map(({ file, errors }) => {
        const { path, size } = fileData(file);

        return (
          <div key={size} className="text-error-80 text-[12px] flex flex-col">
            <p>
              {path} - {size ? fData(size) : ''}
            </p>

            {errors.map(error => (
              <p key={error.code} className="break-words">
                {error.message}
              </p>
            ))}
          </div>
        );
      })}
    </div>
  );
}

export default RejectionFiles;
