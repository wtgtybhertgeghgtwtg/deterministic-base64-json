// @flow
import assert from 'assert';
import {Base64} from 'js-base64';
import parseJson from 'parse-json';

export default function decode(text: string): any {
  assert(typeof text === 'string', '"text" must be a string.');
  const json = Base64.decode(text);
  return parseJson(json);
}
