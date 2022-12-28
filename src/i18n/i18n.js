import { createI18n } from 'vue-i18n';
import tw from './zh-tw.js';
import en from './en-us.json';

const i18n = new createI18n({
	locale: 'tw',
	legacy: false,  // 讓你可以在 composition API 中使用
	globalInjection: true, // 全域注入，讓你在 <template> 可以使用 $t
	messages: {
		'zh-tw': tw,
		'en-US': en
		// tw: {
		// 	message: {
		// 		hello: '你好'
		// 	}
		// },
		// en: {
		// 	message: {
		// 		hello: 'hello'
		// 	}
		// }
	}
});

export default i18n;