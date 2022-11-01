import * as path from 'path';
import { Configuration } from 'webpack';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import JSON5 from 'json5';
import fs from 'fs';

type AliasData = { [index: string]: string };
type TsConfig = { compilerOptions: { paths: { [index: string ]: string[] } } };
const tsConfig: TsConfig = JSON5.parse(fs.readFileSync('./tsconfig.json').toString());
const alias = ((): AliasData => {
  const aliasData: AliasData = {};

  Object.entries(tsConfig.compilerOptions.paths).forEach(([key, val]) => {
    aliasData[key.replace('/*', '')] = path.resolve(process.cwd(), `./${val[0].replace('/*', '')}`);
  });

  return aliasData;
})();

const config: Configuration = {
  entry: './src/Index.ts',
  mode: 'production',

  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    libraryExport: 'default',
    library: 'JSPack',
    umdNamedDefine: true,
    globalObject: '(typeof self !== \'undefined\' ? self : this)',
  },
  resolve: {
    extensions: ['.ts'],
    alias,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new ESLintWebpackPlugin({ extensions: ['.ts'] }),
  ],
};

export default config;
