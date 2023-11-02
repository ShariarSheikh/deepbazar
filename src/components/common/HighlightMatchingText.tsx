import { Interweave } from 'interweave';
import React from 'react';

const HighlightMatchingText = (
  text: string,
  searchText: string
): JSX.Element => {
  if (!searchText?.trim())
    return <p className="text-[12px] text-gray-900">{text}</p>;

  const regex = new RegExp(searchText, 'ig');
  const textWithHighlight = text.replace(regex, `<mark>${searchText}</mark>`);

  return (
    <Interweave
      className="text-[12px] [&>b]:text-successDark text-gray-900"
      content={textWithHighlight}
    />
  );
};

export default HighlightMatchingText;
