import fs from 'sketch-module-fs'

const TMP_FOLDER = '/tmp/sketch-svg-symbols';

export default function (context) {
  // Export Artboards
  const sketch = context.api();

  const document = sketch.selectedDocument;
  const page = document.selectedPage;

  const options = {
    "scales": "1",
    "formats": "svg",
    "output": TMP_FOLDER
  };

  page.exportArtboards(options);


  // Create final SVG file
  const SVGs = NSFileManager.defaultManager().subpathsAtPath(TMP_FOLDER);
  let exportFile;

  for (var i = 0; i < SVGs.length; i++) {
    const svg = SVGs[i];
    const file = fs.readFile(`${TMP_FOLDER}/${svg}`);

    exportFile += file;

    console.log(svg);
    console.log(file);
    console.log('________________');
  }

  fs.writeFile(`${TMP_FOLDER}/export.svg`, exportFile);
  console.log('_________________');
  console.log('EXPORT FILE');
  console.log('_________________');
  console.log(fs.readFile(`${TMP_FOLDER}/export.svg`));


  // Done
  context.document.showMessage('Done 🙌');
};
