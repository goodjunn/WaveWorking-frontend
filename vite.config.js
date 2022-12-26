import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

/*global require, __dirname*/
/*eslint-env browser*/
const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			'@': resolve(__dirname, 'src')
		}
	},
	plugins: [vue()]
});
