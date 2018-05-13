// @flow
import {Base64} from 'js-base64';
import stringify from 'fast-json-stable-stringify';

export default function encode(value: any): string {
  const json = stringify(value);
  return Base64.encode(json);
}
