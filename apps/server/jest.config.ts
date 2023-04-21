import type { Config } from 'jest';

const config: Config = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'node',
  moduleNameMapper: {
    '~/(.*)$': ['<rootDir>/$1'],
  },
  transform: {
    '^.+\\.[jt]s$': 'ts-jest',
  },
  testMatch: ['**/*/?(*.)+(spec|test).[jt]s'],
};

export default config;
