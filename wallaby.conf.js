// require("./my-app/tests/setup");

module.exports = function (wallaby) {
  return {
    files: [
      'my-app/src/**/*.js',
      'my-app/src/**/*.ts',
      'my-app/src/**/*.tsx',
      'my-app/src/**/*.jsx',
      'tsconfig.json'
    ],

    tests: [
      {
        pattern: 'my-app/tests/**/*.test.js'
      }
    ],

    // As I set tsconfig.json in my file list
    // I guess I don't need to write the 'compilers' object above
    compilers: {
      'my-app/+(src|tests)/**/*.+(t|j)s?(x)': wallaby.compilers.typeScript({
        outDir: './any'
      })
    },

    preprocessors: {
      '**/*.jsts': file => file.changeExt('js').content
    },

    testFramework: 'mocha',
    debug: true,
    env: {
      type: 'node',
      runner: 'node'
    }
  };
};
