module.exports = function (wallaby) {
    return {
      files: [
        'my-app/src/**/*.js',
        'my-app/src/**/*.ts',
        'my-app/src/**/*.tsx',
        'my-app/src/**/*.jsx'
      ],
  
      tests: [
        'my-app/tests/**/*.test.js'
      ],

      compilers: {
        '**/*.(t|j)s?(x)': wallaby.compilers.typeScript({
          module: 'commonjs',
          jsx: 'React'
        })
      },
      testFramework: 'mocha',
      debug: true,
      env: {
        type: 'node',
        runner: 'node'
      }
    };
  };