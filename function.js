window.function = function (html) {
  const rawHtml = html && html.value;
  if (!rawHtml) {
    return undefined;
  }
  return "https://wilkinestrada.github.io/htmlprueba1/?PDF=" + encodeURIComponent(rawHtml);
};
