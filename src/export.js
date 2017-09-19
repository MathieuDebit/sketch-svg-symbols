export default function (context) {
  const sketch = context.api();

  const document = sketch.selectedDocument;
  const page = document.selectedPage;

  const options = {
    "scales": "1",
    "formats": "svg",
    "output": "~/Projects/sketch-svg-symbols/tmp"
  };

  page.exportArtboards(options);

  context.document.showMessage('Exported 🙌');
};
