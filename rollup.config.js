// @flow
import assert from 'assert';
import builtinModules from 'builtin-modules';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

const {NODE_ENV: format} = process.env;
assert(
  format === 'cjs' || format === 'es',
  '"NODE_ENV" must be "cjs" or "es" to build.',
);

export default {
  external: [...builtinModules, ...Object.keys(pkg.dependencies)],
  input: 'src/index.js',
  output: {
    file: format === 'cjs' ? pkg.main : pkg.module,
    format,
    sourcemap: true,
  },
  plugins: [babel()],
};
