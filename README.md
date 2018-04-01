# deterministic-base64-json

> Deterministically convert an object to a Base64 string and back.

## Install

```
$ yarn add deterministic-base64-json
```

## Usage

```js
const {decode, encode} = require('deterministic-base64-json');

const text = encode({foo: 1, bar: 2});
// Encoded the same as `encode({bar: 2, foo: 1})`.
const value = decode(text);
// Equals `{bar: 2, foo: 1}`.
```

## API

### decode(text)

Returns the decoded value of `text`, or throws if it can't be decoded.

#### text

* Type: `string`

A Base64 string, probably from `encode`.

### encode(value)

Returns the encoded text of `value`.

#### value

* Type: `any`

A value to be encoded.

## License

MIT © Matthew Fernando Garcia
