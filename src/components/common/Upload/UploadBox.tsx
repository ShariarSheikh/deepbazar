/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDropzone } from 'react-dropzone';

import { UploadProps } from './types';

// ----------------------------------------------------------------------

export default function UploadBox({
  placeholder,
  error,
  disabled,
  className,
  ...other
}: UploadProps) {
  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      disabled,
      ...other,
    });

  const isError = isDragReject || error;

  return (
    <div {...getRootProps()} className={className}>
      <input {...getInputProps()} />

      {placeholder || <button>Cloud upload icon</button>}
    </div>
  );
}
