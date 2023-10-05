import { EditorState } from 'draft-js';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useCallback,
  useState,
} from 'react';

import Input from '@/components/common/Input';
// import ReactDraftWysiwyg from '@/components/common/ReactDraftWysiwyg';
import { Upload } from '@/components/common/Upload';
import { CreateProductStateInterface } from './types';
import dynamic from 'next/dynamic';

const ReactDraftWysiwyg = dynamic(
  () => import('@/components/common/ReactDraftWysiwyg')
);

interface IProps {
  createProductState: CreateProductStateInterface;
  setCreateProductState: Dispatch<SetStateAction<CreateProductStateInterface>>;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onCreateHandler: () => void;
}

function FormFirst({
  createProductState,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setCreateProductState,
  onInputChange,
  onCreateHandler,
}: IProps) {
  const [displayImage, setDisplayImage] = useState<null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [detailsImage, setDetailsImage] = useState<string[] | any[]>([]);

  //
  const [editorState, setEditorState] = useState({
    productSpecification: EditorState.createEmpty(),
    productDescription: EditorState.createEmpty(),
  });

  //
  const detailsImageHandler = useCallback(
    (acceptedFiles: File[]) => {
      const values = detailsImage.length > 0 ? detailsImage : [];
      const newFiles = acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setDetailsImage([...values, ...newFiles]);
    },
    [detailsImage, setDetailsImage]
  );

  const removeDetailsImage = (inputFile: File | string) => {
    const filtered =
      detailsImage && detailsImage?.filter(file => file !== inputFile);
    setDetailsImage(filtered);
  };

  const removeAllDetailsImage = () => {
    setDetailsImage([]);
  };

  //
  const displayImageHandler = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.slice(0, 1).map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      setDisplayImage(newFiles[0]);
    },
    [setDisplayImage, displayImage]
  );

  const removeDisplayImage = (): void => {
    setDisplayImage(null);
  };

  return (
    <div className="w-full max-w-[700px] h-full pt-5 px-5 pb-10 min-h-[300px] bg-white shadow-card rounded-[16px]">
      <div>
        <Input
          placeholder="Product Name"
          onChange={onInputChange}
          value={createProductState.productName}
          name="productName"
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <h1 className="text-[14px] text-gray-600 font-semibold mb-2">
          Product Specification
        </h1>
        <ReactDraftWysiwyg
          toolbarClassName="border borderColor"
          toolbarStyle={{
            border: 'none',
          }}
          wrapperClassName="border borderColor rounded-[8px] prose"
          editorStyle={{ minHeight: '200px', maxHeight: '650px' }}
          editorClassName="border borderColor"
          editorState={editorState.productSpecification}
          onEditorStateChange={data =>
            setEditorState(prvState => ({
              ...prvState,
              productSpecification: data,
            }))
          }
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Offer Text"
          onChange={onInputChange}
          value={createProductState.offerText}
          name="offerText"
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Bar Code"
          onChange={onInputChange}
          value={createProductState.barCode}
          name="barcode"
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Materials"
          onChange={onInputChange}
          value={createProductState.materials}
          name="materials"
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Measurement"
          onChange={onInputChange}
          value={createProductState.measurement}
          name="measurement"
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Color"
          onChange={onInputChange}
          value={createProductState.color}
          name="color"
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Size"
          onChange={onInputChange}
          value={createProductState.size}
          name="size"
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Various Type"
          onChange={onInputChange}
          value={createProductState.variousType}
          name="variousType"
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <Input
          placeholder="Status*"
          onChange={onInputChange}
          value={createProductState.status}
          name="status*"
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <h1 className="text-[14px] text-gray-600 font-semibold mb-2">
          Product Description
        </h1>
        <ReactDraftWysiwyg
          toolbarClassName="border borderColor"
          toolbarStyle={{
            border: 'none',
          }}
          wrapperClassName="border borderColor rounded-[8px]"
          editorStyle={{ minHeight: '200px', maxHeight: '650px' }}
          editorClassName="border borderColor"
          editorState={editorState.productDescription}
          onEditorStateChange={data =>
            setEditorState(prvState => ({
              ...prvState,
              productDescription: data,
            }))
          }
        />
      </div>

      <div className="mt-[24px]">
        <h1 className="text-[14px] text-gray-600 font-semibold mb-2">
          Display Image
        </h1>
        <Upload
          thumbnail
          multiple={false}
          maxSize={20097152}
          onDrop={displayImageHandler}
          onDelete={removeDisplayImage}
          file={displayImage}
          placeholderClassName="min-h-[240px]"
          className="bg-gray-200"
          onUpload={() => {}}
        />
      </div>

      <div className="mt-[24px]">
        <h1 className="text-[14px] text-gray-600 font-semibold mb-2">
          Product Details Image
        </h1>
        <Upload
          multiple
          thumbnail
          accept={{ 'image/*': ['.svg', '.png', '.jpeg', '.webp', '.jpg'] }}
          files={detailsImage}
          // error
          // helperText={<p className="text-error-80 text-[12px]">Error</p>}
          maxSize={20097152}
          onDrop={detailsImageHandler}
          onRemove={removeDetailsImage}
          onRemoveAll={removeAllDetailsImage}
          onUpload={() => {}}
          placeholderClassName="min-h-[240px]"
          className="bg-gray-200"
        />
      </div>
      <button
        onClick={onCreateHandler}
        className="w-full rounded-[8px] h-[48px] bg-primary text-white flex items-center justify-center font-bold mt-[20px] active:scale-95 duration-200 hover:bg-primaryDark"
      >
        Create Product
      </button>
    </div>
  );
}

export default FormFirst;
