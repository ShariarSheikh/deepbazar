import Image from 'next/image';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import DownloadButton from './DownloadButton';
import { fileData, fileFormat } from './utils';

type IFileIconProps = {
  file: File | string;
  tooltip?: boolean;
  imageView?: boolean;
  onDownload?: VoidFunction;
};

function FileThumbnail({
  file,
  tooltip = false,
  imageView = false,
  onDownload,
}: IFileIconProps) {
  const { name = '', path = '', preview = '' } = fileData(file);
  const format = fileFormat(path || preview);

  const renderContent =
    format === 'image' && imageView ? (
      <div className="w-20 h-20 relative">
        {preview && (
          <Image fill className="w-full h-full" src={preview} alt={name} />
        )}
      </div>
    ) : (
      <div className="w-20">
        {/* <Image fill className="w-full h-full" src={format} alt={name} /> */}
      </div>
    );

  if (tooltip) {
    return (
      <div id={`myTooltip-${name}`}>
        {renderContent}
        {onDownload && <DownloadButton onDownload={onDownload} />}
        <Tooltip anchorId={`myTooltip-${name}`} place="bottom" content={name} />
      </div>
    );
  }

  return (
    <div>
      {renderContent}
      {onDownload && <DownloadButton onDownload={onDownload} />}
    </div>
  );
}

export default FileThumbnail;
