//--------------------------------------------------

//--------------------------------------------------

interface IProps {
  path: string;
  parentsLink: string;
  deep?: number;
}

type IReturnType = {
  isParentsActive: boolean;
};

const useActiveLink = ({
  path,
  parentsLink,
  deep = 1,
}: IProps): IReturnType => {
  const removeRootPath = path?.split('/seller').join('');

  const pathAfterRoot = removeRootPath?.split('/');

  return {
    isParentsActive: pathAfterRoot[deep] === parentsLink,
  };
};

export default useActiveLink;
