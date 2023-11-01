import { fData } from '@/utils/formatNumber';
import { AiOutlineClose } from 'react-icons/ai';
import { UploadProps } from '..';
import FileThumbnail from '../../File-Thumbnail/FileThumbnail';
import { fileData } from '../../File-Thumbnail/utils';

// ----------------------------------------------------------------------

export default function MultiFilePreview({
  thumbnail,
  files,
  onRemove,
  className,
}: UploadProps) {
  if (!files?.length) {
    return null;
  }

  return (
    <div className="w-full flex space-x-2 px-2">
      {files.map(file => {
        const { key, name = '', size = 0 } = fileData(file);
        const isNotFormatFile = typeof file === 'string';

        if (thumbnail) {
          return (
            <div key={key} className={`${className || ''} relative`}>
              <FileThumbnail tooltip imageView file={file} />

              {onRemove && (
                <button
                  className="absolute w-4 h-4 top-[2px] right-[2px] bg-[#2b262673] rounded-full flex justify-center items-center"
                  onClick={() => onRemove(file)}
                >
                  <AiOutlineClose className="w-3 h-3 text-white" />
                </button>
              )}
            </div>
          );
        }

        return (
          <div key={key}>
            <FileThumbnail file={file} />

            <div className="text-sm text-black-100">
              <p>{isNotFormatFile ? file : name}</p>
              <p>{isNotFormatFile ? '' : fData(size)}</p>
            </div>

            {onRemove && (
              <button onClick={() => onRemove(file)}>
                <AiOutlineClose />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
