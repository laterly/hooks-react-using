import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import replace from 'rollup-plugin-replace';
import { terser } from 'rollup-plugin-terser';
const env = process.env.NODE_ENV;
export default [
  {
    input: './src/index.ts',
    external: ['lodash'],
    output: {
      dir: 'dist',
      format: 'cjs',
      entryFileNames: '[name].cjs.js',
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        exclude: 'node_modules/**',
        // 指定生成 *.d.ts 类型文件
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        // 这里我们指定 rollup 打包需要生成 .d.ts 文件
        declaration: true,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
      json(),
      env === 'development' ? '' : terser(),
    ],
  },
  {
    input: './src/index.ts',
    external: ['lodash'],
    output: {
      dir: 'dist',
      format: 'esm',
      entryFileNames: '[name].esm.js',
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        exclude: 'node_modules/**',
        // 指定生成 *.d.ts 类型文件
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        // 这里我们指定 rollup 打包需要生成 .d.ts 文件
        declaration: true,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
      json(),
      env === 'development' ? '' : terser(),
    ],
  },
  {
    input: './src/index.ts',
    external: ['lodash'],
    output: {
      dir: 'dist',
      format: 'umd',
      name: 'index',
      entryFileNames: '[name].umd.js',
      sourcemap: env === 'development' ? true : false,
    },
    plugins: [
      resolve(),
      commonjs(),
      typescript({
        exclude: 'node_modules/**',
        // 指定生成 *.d.ts 类型文件
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        // 这里我们指定 rollup 打包需要生成 .d.ts 文件
        declaration: true,
      }),
      replace({
        'process.env.NODE_ENV': JSON.stringify(env),
      }),
      json(),
      env === 'development' ? '' : terser(),
    ],
  },
];