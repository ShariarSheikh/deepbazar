// ** Next Import
import dynamic from 'next/dynamic';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// ! To avoid 'Window is not defined' error
const ReactDraftWysiwyg = dynamic(
  () => import('react-draft-wysiwyg').then(mod => mod.Editor),
  {
    ssr: false,
  }
);

export default ReactDraftWysiwyg;
