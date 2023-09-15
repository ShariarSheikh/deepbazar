import { Interweave } from 'interweave';
import { SellerSidebarActionList } from '../sidebar/navLinks';

// -------------------------------------------------- SEARCH BAR RESULT

// -------------------------------------------------- SEARCH BAR RESULT

interface SearchResultProps {
  searchResult: SellerSidebarActionList[];
  searchText: string;
  resultLinkOnClickHandler: (link: string) => void;
}

export function SearchResult({
  searchResult,
  searchText,
  resultLinkOnClickHandler,
}: SearchResultProps) {
  //
  const highlightSearchText = (text: string): JSX.Element => {
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

  return (
    <div className="w-full h-auto bg-white pl-5 pr-1 py-8 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="w-full h-[427px] visible-scrollbar overflow-y-auto">
        {searchResult?.length === 0 ? (
          <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="text-xl font-semibold">Not Found</h1>
            <p className="mt-2 text-sm">
              searching text: <b>{searchText}</b>
            </p>
          </div>
        ) : (
          <ul>
            {searchResult?.map(result => {
              if (result.child.length > 0)
                return (
                  <li key={result.id} className="w-full h-auto rounded-md mb-2">
                    <div className="w-full">
                      <h1 className="font-semibold backdrop-blur-sm bg-black-10/40 rounded-md h-12 flex items-center px-2 sticky top-[0px]">
                        {result.text}
                      </h1>
                      <ul className="ml-2 pt-[2px]">
                        {result.child.map(childLink => (
                          <li
                            role="presentation"
                            key={childLink.id}
                            onClick={() =>
                              resultLinkOnClickHandler(childLink.link)
                            }
                            className="h-12 cursor-pointer w-full flex items-center px-2 rounded-md mb-2 hover:bg-primaryMain hover:bg-opacity-[8%] border border-transparent border-dashed hover:border-primaryLight"
                          >
                            <div className="w-full">
                              <h1 className="font-medium text-sm">
                                {childLink.text}
                              </h1>
                              {highlightSearchText(childLink.link)}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                );

              return (
                <li
                  role="presentation"
                  key={result.id}
                  onClick={() => resultLinkOnClickHandler(result.link)}
                  className="h-12 cursor-pointer w-full flex items-center px-2 rounded-md mb-2 hover:bg-primaryMain hover:bg-opacity-[8%] border border-transparent border-dashed hover:border-primaryLight"
                >
                  <div className="w-full">
                    <h1 className="font-medium text-sm">{result.text}</h1>
                    <p className="text-[12px]">
                      {highlightSearchText(result.link)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
