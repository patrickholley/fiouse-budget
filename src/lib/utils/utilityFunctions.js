export function get(object, path, defaultValue = null) {
  const pathParts = path.split(".");
  let value = object;

  for (let i = 0; i < pathParts.length; i++) {
    value = value[pathParts[i]];
    if (!value) break;
  }

  return value || defaultValue;
}
