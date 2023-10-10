/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDropzone } from 'react-dropzone';
import { MdAddAPhoto } from 'react-icons/md';

//
import RejectionFiles from './errors/RejectionFiles';
import AvatarPreview from './preview/AvatarPreview';
import { UploadProps } from './types';

// ----------------------------------------------------------------------

export default function UploadAvatar({
  error,
  file,
  disabled,
  helperText,
  className,
  imageClassName,
  ...other
}: UploadProps) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    fileRejections,
  } = useDropzone({
    multiple: false,
    disabled,
    ...other,
  });

  const hasFile = !!file;

  return (
    <>
      <div
        {...getRootProps()}
        className={`relative overflow-hidden ${className} group`}
      >
        <input {...getInputProps()} />

        {hasFile && (
          <AvatarPreview imageClassName={imageClassName} file={file} />
        )}

        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-600 bg-opacity-40 absolute inset-0 cursor-pointer">
          <button>
            <MdAddAPhoto className="text-white w-[30px] h-[30px]" />
          </button>

          <h1 className="text-[12px] text-white font-semibold">
            {file ? 'Update photo' : 'Upload photo'}
          </h1>
        </div>
      </div>

      {helperText && helperText}

      <RejectionFiles fileRejections={fileRejections} />
    </>
  );
}
