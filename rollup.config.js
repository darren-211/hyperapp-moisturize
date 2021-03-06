import babel from 'rollup-plugin-babel';

export default [{
  input: 'src/index.js',
  output: {
    file: 'dist/hyperapp-moisturize.js',
    format: 'umd',
    name: 'hyperappMoisturize',
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}];
