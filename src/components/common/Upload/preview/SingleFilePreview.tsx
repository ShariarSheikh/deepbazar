import Image from 'next/image';
import { CustomFile } from '../types';

// ----------------------------------------------------------------------

type Props = {
  file: CustomFile | string | null;
};

export default function SingleFilePreview({ file }: Props) {
  if (!file) return null;
  const imgUrl = typeof file === 'string' ? file : file.preview;

  return (
    <div className="relative w-full h-[175px]">
      <Image fill alt="file preview" src={imgUrl || ''} />
    </div>
  );
}
