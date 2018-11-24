function convertHTML(str) {
  return str.split('').map(entities => {
    switch (entities) {
      case "&":
        return entities = "&amp;";
      case "<":
        return entities = "&lt;";
      case ">":
        return entities = "&gt;";
      case '"':
        return entities = "&quot;";
      case "'":
        return entities = "&apos;";
      default:
        return entities;
    }
  }).join('');
}

console.log(convertHTML("Dolce & Gabbana"));