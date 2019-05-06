<p align="center">
    <a href="https://npmcharts.com/compare/@knekk/spinners?minimal=true"><img src="https://img.shields.io/npm/dm/@knekk/spinners.svg" alt="Downloads"></a>
    <a href="https://www.npmjs.com/package/@knekk/spinners"><img src="https://img.shields.io/npm/v/@knekk/spinners.svg" alt="Version"></a>
    <a href="https://www.npmjs.com/package/@knekk/spinners"><img src="https://img.shields.io/npm/l/@knekk/spinners.svg" alt="License"></a>
</p>

# Dev Components { Spinners }

Pure CSS spinners made with simplicity in mind - Use directly as a single HTML element or import and use as a Vue component. See [demo](https://knekki.github.io/#/spinners "Kenneth's Github page") for more spinners and usage instructions.

<table>
    <tbody>
        <tr>
            <td align="center">
                <img width="382px" alt="KSpinnerSpin" src="https://i.giphy.com/media/jxEXGryWlXoBCh29Pr/giphy.gif">
            </td>
            <td align="center">
                <img width="382px" alt="KSpinnerPulse" src="https://i.giphy.com/media/BWJpS0ih19nte89dwo/giphy.gif">
            </td>
        </tr>
    </tbody>
</table>

## Installation

`@knekki/spinners` doesn't need much of a setup. Just link the provided CSS in your HTML head element (or install via `npm`), and use it as a single HTML element. You can also import it and use it as a Vue component.

### HTML

``` html
<!-- Copy and paste the link below into your HTML head element -->
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@knekk/spinners@0.0.21/dist/kSpinners.css">
```

> **Tip:** This link will make all the spinners available to you. However, if you only want to use one of the spinners and care about filesize, it's recommended that you grab the CSS link specific to the spinner you choose. Swap `/kSpinners.css` part of the link with the name of the spinner. E.g if you want to use the `kSpinnerSpin` spinner. Change the link to `/kSpinnerSpin.css` etc.

### Vue.js

If you are using Vue.js, you can instead choose to install the npm package and simply import the spinner component as you like.

``` bash
# Install
npm install @knekk/spinners
```

#### Global registration
##### In your `main.js`

``` javascript
import Vue from 'vue'
import KSpinners from '@knekk/spinners'

Vue.use(KSpinners)
```

#### Local registration in your components

``` javascript
import { KSpinnerSpin, KSpinnerPulse, KSpinnerSwirl, KSpinnerSignal } from '@knekk/spinners'

export default {
    components: {
        KSpinnerSpin,
        KSpinnerPulse,
        KSpinnerSwirl,
        KSpinnerSignal
    }
}
```

## Usage

**Example:** Assuming you want to use the `KSpinnerSpin` spinner. Follow the steps below for your environment:

### HTML

``` html
<!-- Copy and paste the spinner element where you want it in your HTML -->
<i class="k-spinner--spin"></i>
```

### Vue.js

``` html
<!-- In SFC, string templates, and JSX -->
<KSpinnerSpin/>

<!-- Or in DOM templates -->
<k-spinner-spin></k-spinner-spin>
```

## Advanced usage

> Coming soon

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, Kenneth Aamås