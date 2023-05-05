import nextJest from 'next/jest';
import type { Config } from 'jest';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig: Config = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '~/(.*)$': ['<rootDir>/$1'],
    'lodash-es': 'lodash',
  },
  transform: {
    '^.+\\.[jt]s?(x)$': 'ts-jest',
  },
  testMatch: ['**/*/?(*.)+(spec|test).[jt]s?(x)'],
};

export default createJestConfig(customJestConfig);
