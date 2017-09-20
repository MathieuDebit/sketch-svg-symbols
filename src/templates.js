const SYMBOLS_TEMPLATE = (ids, viewBoxes, paths) => {
  let symbols = '';

  for (var i = 0; i < ids.length; i++) {
    symbols += `

      <symbol id="${ids[i]}" ${viewBoxes[i]}>
        ${paths[i]}
      </symbol>
    `
  };

  return symbols;
}

export const SVG_TEMPLATE = (ids, viewBoxes, paths) => `
<svg xmlns="http://www.w3.org/2000/svg">
  ${SYMBOLS_TEMPLATE(ids, viewBoxes, paths)}
</svg>
`;
