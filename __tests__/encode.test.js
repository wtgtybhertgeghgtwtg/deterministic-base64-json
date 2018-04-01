// @flow
import {decode, encode} from '../src';

describe('encode', () => {
  it('encodes an object that can be decoded by "decode".', () => {
    const value = {foo: 1, bar: [2, 3], baz: 4};
    const text = encode(value);
    expect(typeof text).toEqual('string');
    expect(decode(text)).toEqual(value);
  });

  it('encodes an object the same way regardless of key order.', () => {
    const textOne = encode({foo: 1, bar: [2, 3], baz: 4});
    const textTwo = encode({bar: [2, 3], baz: 4, foo: 1});
    expect(textOne).toEqual(textTwo);
  });
});
