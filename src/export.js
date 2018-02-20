import fs from 'sketch-module-fs'
import { SVG_TEMPLATE } from './templates';
import { TMP_FOLDER, VIEWBOX_RE, PATH_RE } from './constants';


export default function (context) {

  fs.rmdir(TMP_FOLDER);


  // Export Artboards
  const sketch = context.api();

  const document = sketch.selectedDocument;
  const page = document.selectedPage;

  page.exportArtboards({
    "scales": "1",
    "formats": "svg",
    "output": TMP_FOLDER
  });


  // Create final SVG file
  let ids = [];
  let viewBoxes = [];
  let paths = [];

  page.iterate(layer => {
    const name = layer.name;
    const file = fs.readFile(`${TMP_FOLDER}/${name}.svg`);
    const viewBox = file.match(VIEWBOX_RE)[0];
    const pathMatch = file.match(PATH_RE);

    if (!pathMatch) return showError(`No path match found for ${name}`);

    const path = pathMatch[0];

    if (viewBox && path) {
      ids.push(name);
      viewBoxes.push(viewBox);
      paths.push(path);
    }
  });

  const svg = SVG_TEMPLATE(ids, viewBoxes, paths);

  const currentDir = context.document.fileURL().URLByDeletingLastPathComponent().path();
  fs.writeFile(`${currentDir}/${page.name}.svg`, svg);


  // Done
  context.document.showMessage('Done 🙌');
};

function showError(message) {
  console.log(`Error: ${message}`);
  context.document.showMessage(`❗️Error: ${message}`);
}