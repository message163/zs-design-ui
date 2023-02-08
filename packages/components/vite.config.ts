import { defineConfig, Plugin, UserConfigExport } from 'vite'
import vue from '@vitejs/plugin-vue'
// import UnoCss from "./config/unocss";
import { UserConfig } from 'vitest'
import eslint from 'vite-plugin-eslint'
import dts from 'vite-plugin-dts'
const rollupOptions = {
    external: ['vue'],
    output: {
        globals: {
            vue: 'Vue'
        }
    }
}

export const config: UserConfigExport = {
    plugins: [
        vue(),
        dts({
            outputDir: '../../dist/types',
            insertTypesEntry: false, // 插入TS 入口
            copyDtsFiles: true // 是否将源码里的 .d.ts 文件复制到 outputDir
        }),
        eslint({
            exclude: ['node_modules', 'dist'],
            cache: false
        })
    ],
    build: {
        rollupOptions,
        sourcemap: true, // 输出单独 source文件
        lib: {
            entry: './index.ts',
            name: 'ZsDesignUi',
            fileName: 'zs-design-ui',
            formats: ['es', 'umd', 'iife'] // 导出模块类型
        },
        outDir: '../../dist'
    },

    test: {
        globals: true,
        environment: 'jsdom',
        transformMode: {
            web: [/.[tj]sx$/]
        },
        coverage: {
            provider: 'istanbul', // or 'c8',
            reporter: ['text', 'json', 'html']
        }
    }
}

// https://vitejs.dev/config/
export default defineConfig(config)
