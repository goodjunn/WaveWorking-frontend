import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import viteEslint from 'vite-plugin-eslint';

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
		viteEslint({ cache: false })
	],
	server: {
		host: '0.0.0.0',
		port: '8080',
		https: false
	}
});
