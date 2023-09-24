/* eslint-disable @typescript-eslint/ban-ts-comment */
// ** Next Import
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// @ts-ignore
const ReactDraftWysiwyg = dynamic(
  // @ts-ignore
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  {
    ssr: false,
  }
);

export default ReactDraftWysiwyg;
