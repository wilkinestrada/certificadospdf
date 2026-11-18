window.function = function (html) {
  html = html && html.value;
  if (!html) { return undefined; }
  return "https://wilkinestrada.github.io/htmlprueba1/?PDF=" + encodeURIComponent(html);
};
