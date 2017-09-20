# sketch-svg-symbols

🚧 WORK IN PROGRESS 🚧

Export multiple SVGs into a single file with symbols.

> The `<symbol>` element is used to define graphical template objects which can be instantiated by a `<use>` element. The use of symbol elements for graphics that are used multiple times in the same document adds structure and semantics.

👉  https://developer.mozilla.org/en-US/docs/Web/SVG/Element/symbol

> Why `<symbol>` is better for icons:

>- The viewBox can be defined on the symbol, so you don't need to use it in the markup (easier and less error prone).
>- title and desc tags can be added within the `<symbol>` and they kinda "come along for the ride" when the symbol gets used, making accessibility easier to do right.
>- Symbols don't display as you define them, so no need for a `<defs>` block.
>- This is probably what `<symbol>` was invented for anyway.


👉 https://css-tricks.com/svg-symbol-good-choice-icons/

## Getting Started
![sketch-svg-symbols-screenshot](https://img11.hostingpics.net/pics/569594sketchsvgsymbolsexample.png)

In Sketch:
- Create a page
- Create one artboard per icon
- Correctly name your page and artboards (used in export file)
- Export via `Plugins > sketch-svg-symbols > export`

It will export an SVG file in the same folder where your Sketch project is saved.

The export file looks like this:

```html
<svg xmlns="http://www.w3.org/2000/svg">
    <symbol id="artboard-1" viewBox="0 0 20 20">
      <path d="..."></path>
    </symbol>

    <symbol id="artboard-2" viewBox="0 0 20 20">
      <path d="..." transform="..."></path>
    </symbol>

    ...
</svg>

```

Then in your HTML page:

```html
<svg>
  <use xlink:href="icons.svg#artboard-1" />
</svg>

<svg>
  <use xlink:href="icons.svg#artboard-2" />
</svg>
```

## Contribute

### TL;DR

```
git clone git@github.com:MathieuDebit/sketch-svg-symbols.git
cd sketch-svg-symbols

npm install
npm start
npm run log
npm run build
```

See [Skpm](https://github.com/skpm/skpm) 💎📦.

## Licence

This project is distributed under the [Do What the Fuck You Want to Public License](http://www.wtfpl.net/).

---
