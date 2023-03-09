import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import postcss from "rollup-plugin-postcss";
import copy from 'rollup-plugin-copy'


export default {
    input: [
        './src/index.ts',
    ],
    output: {
        dir: 'dist',
        format: 'esm',
        preserveModules: true,
        preserveModulesRoot: 'src',
        sourcemap: false,
    },
    plugins: [
        resolve(),
        commonjs(),
        typescript({
            tsconfig: './tsconfig.build.json',
            declaration: true,
            declarationDir: 'dist',
        }),
        postcss(),
        copy({
            targets: [{ src: 'src/assets/*', dest: 'dist/assets' }]
        })
    ],
    external: ['react', 'react-dom'],
};