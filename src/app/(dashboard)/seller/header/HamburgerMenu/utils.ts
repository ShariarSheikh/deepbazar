export const isMatchEndPoint = (link: string, pathname: string) => {
  const endPoint = pathname.split('/dashboard').join('');
  const currentLink = link.split('/dashboard').join('');

  return endPoint === currentLink;
};
