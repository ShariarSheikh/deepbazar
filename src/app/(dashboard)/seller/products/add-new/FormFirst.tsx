import { Dispatch, SetStateAction, Suspense, useCallback } from 'react';
import { Upload } from '@/components/common/Upload';
import dynamic from 'next/dynamic';
import { Field } from 'formik';
import { CustomFormikInput } from '@/components/common/FormikCustomInput';
import { EditorState } from 'draft-js';

const ReactDraftWysiwyg = dynamic(
  () => import('@/components/common/ReactDraftWysiwyg')
);

interface IProps {
  images: File[];
  setImages: Dispatch<SetStateAction<File[]>>;

  editorState: {
    productSpecification: EditorState;
    productDescription: EditorState;
  };

  setEditorState: Dispatch<
    SetStateAction<{
      productSpecification: EditorState;
      productDescription: EditorState;
    }>
  >;
}

function FormFirst({
  images,
  setImages,

  editorState,
  setEditorState,
}: IProps) {
  //
  const displayImageHandler = useCallback(
    (acceptedFiles: File[]) => {
      const value = images.length > 0 ? images : [];
      const newFiles = acceptedFiles.map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      setImages([...value, ...newFiles]);
    },
    [images, setImages]
  );

  const removeDisplayImage = (inputFile: File | string) => {
    const filtered = images && images?.filter(file => file !== inputFile);
    setImages(filtered);
  };

  const removeAllDetailsImage = () => {
    setImages([]);
  };

  return (
    <div className="w-full max-w-[700px] h-full min-h-[300px] bg-white">
      <div>
        <Field
          placeholder="Product Name *"
          name="title"
          component={CustomFormikInput}
          className="rounded-[8px] w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <h1 className="text-[14px] text-gray-600 font-semibold mb-2">
          Product Specification
        </h1>

        <Suspense fallback={<p>Loading..</p>}>
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
        </Suspense>
      </div>

      <div className="mt-[24px]">
        <Field
          placeholder="Offer Text"
          component={CustomFormikInput}
          name="offerText"
          className="h-[56px] rounded-[8px] border borderColor w-full px-[14px] outline-none"
        />
      </div>

      <div className="mt-[24px]">
        <h1 className="text-[14px] text-gray-600 font-semibold mb-2">
          Product Description *
        </h1>
        <Suspense fallback={<p>Loading..</p>}>
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
        </Suspense>
      </div>

      <div className="mt-[24px]">
        <h1 className="text-[14px] text-gray-600 font-semibold mb-2">
          Display Image * (Maximum 2 File)
        </h1>
        <Upload
          thumbnail
          multiple
          maxFiles={2}
          maxSize={2 * 1024 * 1024} // Limit to 2MB (2 * 1024 * 1024 bytes)
          files={images}
          onDrop={displayImageHandler}
          onRemove={removeDisplayImage}
          onRemoveAll={removeAllDetailsImage}
          accept={{ 'image/*': ['.svg', '.png', '.jpeg', '.webp', '.jpg'] }}
          placeholderClassName="min-h-[240px]"
          className="border border-gray-200 rounded-[6px]"
        />
      </div>
    </div>
  );
}

export default FormFirst;
