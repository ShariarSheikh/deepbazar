import { Dispatch, SetStateAction, Suspense, useCallback } from 'react';
import { Upload } from '@/components/common/Upload';
import dynamic from 'next/dynamic';
import { Field } from 'formik';
import { CustomFormikInput } from '@/components/common/FormikCustomInput';
import { EditorState } from 'draft-js';
import { initialState } from './utils';

const ReactDraftWysiwyg = dynamic(
  () => import('@/components/common/ReactDraftWysiwyg')
);

interface IProps {
  displayImage: null;
  setDisplayImage: Dispatch<SetStateAction<null>>;

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
  displayImage,
  setDisplayImage,

  editorState,
  setEditorState,
}: IProps) {
  //
  const displayImageHandler = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.slice(0, 1).map(file =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      );
      // @ts-ignore
      setDisplayImage(newFiles[0]);
    },
    [setDisplayImage, displayImage]
  );

  const removeDisplayImage = (): void => {
    setDisplayImage(null);
  };

  return (
    <div className="w-full max-w-[700px] h-full pt-5 pb-10 min-h-[300px] bg-white">
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
        <div className="w-full h-[48px] flex items-center justify-center bg-gray-200 rounded-[6px]">
          <span className="text-sm">
            Product Code: {initialState.productCode}
          </span>
        </div>
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
          Display Image *
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
    </div>
  );
}

export default FormFirst;
