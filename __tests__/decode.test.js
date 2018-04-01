// @flow
import {Base64} from 'js-base64';
import {decode} from '../src';

describe('decode', () => {
  it('throws if "text" is undefined.', () => {
    // $FlowFixMe
    expect(() => decode()).toThrow('"text" must be a string.');
  });

  it('throws if "text" is not a string.', () => {
    // $FlowFixMe
    expect(() => decode(1)).toThrow('"text" must be a string.');
  });

  it('throws if "text" cannot be decoded.', () => {
    // Missing double quote by "baz".
    const invalidText = Base64.encode('{ "foo": 1, "bar": [2,3], "baz: 4 }');
    expect(() => decode(invalidText)).toThrow();
  });
});
