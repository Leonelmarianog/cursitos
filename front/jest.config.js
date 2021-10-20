// eslint-disable-next-line import/no-extraneous-dependencies
const { defaults } = require('jest-config');

module.exports = {
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'jsx'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/tools/mocks/fileMock.js',
    '\\.(css|less)$': '<rootDir>/tools/mocks/styleMock.js',
  },
};
