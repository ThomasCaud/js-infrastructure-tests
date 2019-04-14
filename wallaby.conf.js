require("ts-node/register");

module.exports = function (wallaby) {
  var mysetup = require("./my-app/tests/setup");
 
  return {
    files: [
      'my-app/src/**/*.+(t|j)s?(x)',
      'my-app/tests/setup.js',
      'tsconfig.json'
    ],

    tests: [
      {
        pattern: 'my-app/tests/**/*.test.js'
      }
    ],

    compilers: {
      'my-app/+(src|tests)/**/*.+(t|j)s?(x)': wallaby.compilers.typeScript({})
    },

    preprocessors: {
      '**/*.jsts': file => file.changeExt('js').content
    },

    setup: function() {
      require("./my-app/tests/setup");
    },

    testFramework: 'mocha',

    env: {
      type: 'node',
      runner: 'node'
    }
  };
};
