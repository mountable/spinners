<p align="center">
    <a href="https://npmcharts.com/compare/@mountable/spinners?minimal=true"><img src="https://img.shields.io/npm/dm/@mountable/spinners.svg" alt="Downloads"></a>
    <a href="https://www.npmjs.com/package/@mountable/spinners"><img src="https://img.shields.io/npm/v/@mountable/spinners.svg" alt="Version"></a>
    <a href="https://www.npmjs.com/package/@mountable/spinners"><img src="https://img.shields.io/npm/l/@mountable/spinners.svg" alt="License"></a>
</p>

# **Mountable** { Spinners }

>Component of the UI library [Mountable](https://mountable.dev/ "Collection of small independent UI bits and components ready to mount new or existing web applications.") :books:

Pure CSS spinners made with simplicity in mind - Use directly as a single HTML element or import and use as a Vue component. See [demo](https://mountable.dev/spinners "Mountable { Spinners }") for more spinners and usage instructions.

<!-- <table>
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
</table> -->


## Installation and usage

Link the provided CSS in your HTML head element (or install via `npm`), and use it as a single HTML element. You can also import it and use it as a Vue component.

``` bash
npm install @mountable/spinners
```

### HTML

``` html
<!-- Copy and paste the link below into your HTML head element -->
<link rel="stylesheet" type="text/css" href="https://unpkg.com/@mountable/spinners@0.0.24/dist/mSpinners.css">
```

> **Tip:** This link will load all available spinners and is meant to use during development. To reduce filesize you should link directly to the spinner(s) you want to use (see [demo](https://mountable.dev/spinners "Mountable { Spinners }") for spinner specific installations) instead.

``` html
<!-- Copy and paste the spinner element where you want it in your HTML e.g: -->
<i class="m-spinner--signal"></i>
```

### Vue.js

If you are using Vue.js, install the npm package and simply import the spinner component as you like.

``` bash
npm install @mountable/spinners
```

#### Global registration
##### In your `main.js`

``` javascript
import Vue from 'vue'
import MSpinners from '@mountable/spinners'

Vue.use(MSpinners)
```

#### Local registration in your components

``` javascript
import { MSpinnerPulse, MSpinnerSwirl, MSpinnerSignal } from '@mountable/spinners'

export default {
    components: {
        MSpinnerPulse,
        MSpinnerSwirl,
        MSpinnerSignal
    }
}
```

Use it in your templates:

``` html
<!-- In SFC, string templates, and JSX -->
<MSpinnerSignal/>

<!-- Or in DOM templates -->
<m-spinner-signal></m-spinner-signal>
```


## Advanced usage

> Coming soon


## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2019-present, [Kenneth Aamås](https://github.com/knekki "Kenneth's Github profile") 