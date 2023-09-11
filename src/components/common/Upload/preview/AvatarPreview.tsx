// ----------------------------------------------------------------------

import Image from 'next/image';
import { CustomFile } from '../types';

type Props = {
  file: CustomFile | string | null;
  imageClassName?: string;
};

export default function AvatarPreview({ file, imageClassName = '' }: Props) {
  if (!file) {
    return null;
  }

  const imgUrl = typeof file === 'string' ? file : file.preview;

  return (
    <Image fill alt="avatar" src={imgUrl || ''} className={imageClassName} />
  );
}
