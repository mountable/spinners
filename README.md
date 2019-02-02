<p align="center">
    <a href="https://npmcharts.com/compare/@knekk/spinners?minimal=true"><img src="https://img.shields.io/npm/dm/@knekk/spinners.svg" alt="Downloads"></a>
    <a href="https://www.npmjs.com/package/@knekk/spinners"><img src="https://img.shields.io/npm/v/@knekk/spinners.svg" alt="Version"></a>
    <a href="https://www.npmjs.com/package/@knekk/spinners"><img src="https://img.shields.io/npm/l/@knekk/spinners.svg" alt="License"></a>
</p>

# Pure CSS spinners

Pure CSS spinners made with simplicity in mind - Use directly as a single HTML element or import and use as a Vue component.

## Demo

> Coming soon

## Installation

*@knekk/spinners* doesn't need much of a setup. Just link the provided CSS in your HTML head element (or install via `npm`), and use it as an single HTML element. You can also import it and use it as a vue component.

### HTML

``` html
<!-- Copy and paste the link below into your HTML head element -->
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@knekk/spinners@0.0.9/dist/kSpinners.css">
```

> **Tip:** If you only want to use one of the spinners, you can directly grap the appropriate CSS for it instead of including the whole library. See the advanced usage section...

### Vue.js

If you are using Vue.js, you can instead choose to install the npm package and simply import the spinner component as you like.

``` bash
# Install
npm install @knekk/spinners
```

## Usage

**Example:** Assuming you want to use the `KSpinnerSpin` spinner. Follow the steps below for your environment:

### HTML

``` html
<!-- Copy and paste the spinner element where you want it in your HTML -->
<i class="k-spinner--spin"></i>
```

### Vue.js

#### Import and use directly in your components
``` javascript
import { KSpinnerSpin } from '@knekk/spinners'

export default {
    components: {
        KSpinnerSpin
    }
}
```

``` html
<!-- In single-file components, string templates, and JSX -->
<KSpinnerSpin/>

<!-- Or in DOM templates -->
<k-spinner-spin></k-spinner-spin>
```

## Advanced usage

> Coming soon

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Kenneth Aamås