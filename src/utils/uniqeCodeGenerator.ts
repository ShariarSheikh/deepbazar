const date = new Date();

export default function uniqueCodeGenerator(): string {
  return `${date.getFullYear()}${date.getMonth}${date.getDay}${date.getHours}`;
}
