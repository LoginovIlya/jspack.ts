import { pathsToModuleNameMapper } from 'ts-jest';
import type { JestConfigWithTsJest } from 'ts-jest';
import JSON5 from 'json5';
import fs from 'fs';

const tsConfig = JSON5.parse(fs.readFileSync('./tsconfig.json').toString());
const moduleNameMapper = pathsToModuleNameMapper(tsConfig.compilerOptions.paths);

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePaths: ['node_modules', '<rootDir>'],
  moduleNameMapper,
  coveragePathIgnorePatterns: ['node_modules', '<rootDir>/src/JSPackFormatTypes.ts'],
};

export default jestConfig;
