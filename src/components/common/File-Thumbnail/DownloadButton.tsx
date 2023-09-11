import { AiOutlineDownload } from 'react-icons/ai';

type IProps = {
  onDownload?: VoidFunction;
};

function DownloadButton({ onDownload = () => {} }: IProps) {
  return (
    <button onClick={onDownload}>
      <AiOutlineDownload />
    </button>
  );
}

export default DownloadButton;
