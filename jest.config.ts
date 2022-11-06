import { pathsToModuleNameMapper } from 'ts-jest';
import type { JestConfigWithTsJest } from 'ts-jest';
import * as JSON5 from 'json5';
import * as fs from 'fs';

const tsConfigBase = JSON5.parse(fs.readFileSync('./tsconfig.base.json').toString());
const moduleNameMapper = pathsToModuleNameMapper(tsConfigBase.compilerOptions.paths);

const jestConfig: JestConfigWithTsJest = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  modulePaths: ['node_modules', '<rootDir>'],
  moduleNameMapper,
  coveragePathIgnorePatterns: ['node_modules', '<rootDir>/src/JSPackFormatTypes.ts'],
};

export default jestConfig;
