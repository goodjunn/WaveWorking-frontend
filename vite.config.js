import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteEslint from 'vite-plugin-eslint';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers';

const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		}
	},
	plugins: [
		vue(),
		viteEslint({ cache: false }),
		AutoImport({
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
				/\.vue$/,
				/\.vue\?vue/, // .vue
				/\.md$/ // .md
			],
			imports: [
				'vue',
				'vue-router',
				'vue-i18n',
				'@vueuse/core',
				'pinia'
			],
			resolvers: [],
			dirs: [
				'./src/router'
			],
			dts: false, //ts使用
			eslintrc: {
				enabled: false, //未生成.eslintrc-auto-import.json檔案時，設定為true;產生後這邊改為false
				filepath: './.eslintrc-auto-import.json',
				globalsPropValue: true
			},
			vueTemplate: true
		}),
		Components({
			dirs: [
				'src/components'
			],
			// valid file extensions for components.
			extensions: ['vue'],
			// search for subdirectories
			deep: true,
			resolvers: [
				HeadlessUiResolver()
			],
			dts: false
		})
	],
	server: {
		host: '0.0.0.0',
		port: '8080',
		https: false
	}
});
