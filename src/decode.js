// @flow
import assert from 'assert';
import {Base64} from 'js-base64';

export default function decode(text: string): any {
  assert(typeof text === 'string', '"text" must be a string.');
  const json = Base64.decode(text);
  return JSON.parse(json);
}
