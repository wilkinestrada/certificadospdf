window.function = function (html) {
  if (!html) {
    return undefined;
  }
  return "https://wilkinestrada.github.io/htmlprueba1/?PDF=" + encodeURIComponent(html);
};
