module.exports = {
    testEnvironment: "jsdom",
    moduleNameMapper: {
      '\\.(css|less)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
    // other configurations
  };
  