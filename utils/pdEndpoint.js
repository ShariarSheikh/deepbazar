export default function (endpoint, id) {
  const str = `${endpoint} ${id}`;

  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
}
