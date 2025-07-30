class Text {
  constructor(content) {
    this.content = content;
  }
  accept(visitor) {
    visitor.visitText(this);
  }
}

class ImageElement {
  constructor(url) {
    this.url = url;
  }
  accept(visitor) {
    visitor.visitImage(this);
  }
}

class Table {
  constructor(rows) {
    this.rows = rows;
  }
  accept(visitor) {
    visitor.visitTable(this);
  }
}

class HtmlExportVisitor {
  visitText(textElement) {
    console.log(`<p>${textElement.content}</p>`);
  }

  visitImage(imageElement) {
    console.log(`<img src="${imageElement.url}" />`);
  }

  visitTable(tableElement) {
    console.log("<table>");
    tableElement.rows.forEach((row) => {
      console.log(`<tr><td>${row.join("</td><td>")}</td></tr>`);
    });
    console.log("</table>");
  }
}

const elements = [
  new Text("Hello Visitor Pattern"),
  new ImageElement("logo.png"),
  new Table([
    ["Name", "Age"],
    ["Alice", 25],
    ["Bob", 30],
  ]),
];

const htmlExporter = new HtmlExportVisitor();

// Traverse all elements and let them accept the visitor
elements.forEach((element) => element.accept(htmlExporter));
