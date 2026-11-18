window.function = function (html) {
  const rawHtml = html && html.value;
  if (!rawHtml) {
    return undefined;
  }
  const compressed = LZString.compressToEncodedURIComponent(rawHtml);
  return "https://wilkinestrada.github.io/htmlprueba1/#" + compressed;
};
