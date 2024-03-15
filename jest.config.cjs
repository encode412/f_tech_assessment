module.exports = {
    // ... other Jest configuration options
    transform: {
      '^.+\\.mjs$': "babel-jest",
    },
    // transformIgnorePatterns: [
    //   '/node_modules/(?!(your-module-to-ignore)/)',
    // ],
    // Other Jest configuration options...
  };