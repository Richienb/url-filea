# URL Filea [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/url-filea/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/url-filea)

Create and read Windows Internet Shortcut files.

[![NPM Badge](https://nodei.co/npm/url-filea.png)](https://npmjs.com/package/url-filea)

## Install

```sh
npm install url-filea
```

## Usage

```js
const urlFile = require("url-filea");

(async () => {
    await urlFile("google.url", { url: "https://google.com" })

    await urlFile("google.url")
    //=> { url: "https://google.com" }
})()
```

## API

### urlFilea(filename, options?)

#### filename

Type: `string`

The name of the file to read or write to.

#### options

Type: `object`

The data to write. If not specified, the data is read instead.
