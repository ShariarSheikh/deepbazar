import { useDropzone } from 'react-dropzone';

//
import Image from 'next/image';
import { AiOutlineDelete } from 'react-icons/ai';

// assets
import fileUploadImg from '../../../assets/illustration_upload.png';

//
import RejectionFiles from './errors/RejectionFiles';
import MultiFilePreview from './preview/MultiFilePreview';
import SingleFilePreview from './preview/SingleFilePreview';
import { UploadProps } from './types';

// ----------------------------------------------------------------------

function Placeholder({ className }: { className: string }) {
  return (
    <div
      className={`${className} w-full h-full  flex items-center justify-start p-2 rounded-[3px]`}
    >
      <div className="w-[44%] h-full">
        <Image src={fileUploadImg} alt="file-upload" />
      </div>

      <div className="text-sm text-start w-[56%] h-full">
        <div>
          <h1 className="text-[20px] font-bold">Select Image</h1>
          <p className="text-[14px] text-gray-500 mt-2">
            Drop files here or click
            <strong className="font-bold cursor-pointer underline pl-1 text-gray-800">
              browse
            </strong>{' '}
            thorough your Device. Accepted file type (.svg .png .jpeg .webp
            .jpg)
          </p>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function Upload({
  disabled,
  multiple = false,
  error,
  helperText,
  file,
  onDelete,
  files,
  thumbnail = true,
  onUpload,
  onRemove,
  onRemoveAll,
  className,
  placeholderClassName,
  ...other
}: UploadProps) {
  const { getRootProps, getInputProps, isDragReject, fileRejections } =
    useDropzone({
      multiple,
      disabled,
      ...other,
    });

  const hasFile = !!file && !multiple;
  const hasFiles = files && multiple && files.length > 0;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const isError = isDragReject || !!error;

  return (
    <div className={`${className} relative`}>
      <div {...getRootProps()} className="w-full h-full">
        <input {...getInputProps()} />
        <Placeholder
          className={`${placeholderClassName} border border-dashed borderColor`}
        />
      </div>

      {helperText && helperText}
      <RejectionFiles fileRejections={fileRejections} />

      {hasFile && (
        <div className="w-full h-full p-2">
          <div className="mt-2 relative w-full h-full min-h-[175px] max-w-[185px]">
            <SingleFilePreview file={file} />
            {onDelete && (
              <button
                className="absolute w-7 h-7 top-[12px] right-[12px] bg-primaryLight bg-opacity-40 rounded-full flex justify-center items-center"
                onClick={onDelete}
              >
                <AiOutlineDelete className="text-white" />
              </button>
            )}
          </div>
          {onUpload && (
            <button
              className="bg-primaryMain mt-3 text-white hover:bg-primaryDark rounded-[8px] text-[14px] font-bold px-[16px] py-[6px]"
              onClick={onUpload}
            >
              Upload file
            </button>
          )}
        </div>
      )}

      {hasFiles && (
        <div className="mt-3 p-2">
          <MultiFilePreview
            files={files}
            thumbnail={thumbnail}
            onRemove={onRemove}
          />
          <div className="w-full flex justify-end space-x-2 mt-3">
            {onRemoveAll && (
              <button
                className="border borderColor rounded-[8px] text-[14px] font-bold px-[16px] py-[6px]"
                onClick={onRemoveAll}
              >
                Remove all
              </button>
            )}
            {onUpload && (
              <button
                className="bg-primaryMain text-white hover:bg-primaryDark rounded-[8px] text-[14px] font-bold px-[16px] py-[6px]"
                onClick={onUpload}
              >
                Upload files
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
