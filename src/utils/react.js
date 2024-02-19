export function getLocation(path) {
  path = path.split("?")[0];
  const fileName = path.match(/src\/pages\/(.*)\.jsx$/)?.[1];
  if (!fileName) {
    return null;
  }
  const normalized = fileName
    .replace(/\[/g, ":")
    .replace(/\]/g, "")
    .replace(/\/(index|page(?!s))/, "");
  return fileName === "index" ? "/" : `/${normalized}`;
}
