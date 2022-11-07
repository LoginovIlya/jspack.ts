import * as path from 'path';
import { Configuration } from 'webpack';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';

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
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.base.json',
        },
      },
    ],
  },
  plugins: [
    new ESLintWebpackPlugin({ extensions: ['.ts'] }),
  ],
};

export default config;
