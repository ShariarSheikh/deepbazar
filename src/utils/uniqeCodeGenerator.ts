const date = new Date();

export default function uniqueCodeGenerator(): string {
  return `v1-${date.getFullYear()}${date.getMonth()}${date.getDay()}${date.getHours()}${date.getSeconds()}`;
}
