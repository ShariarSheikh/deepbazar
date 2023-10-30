const date = new Date();

interface IProps {
  optionalKey?: string;
}

export default function uniqueCodeGenerator({
  optionalKey = 'v1-',
}: IProps): string {
  return `${optionalKey}${date.getFullYear()}${date.getMonth()}${date.getDay()}${date.getHours()}${date.getSeconds()}`;
}
