import { createI18n } from 'vue-i18n';
import tw from './zh-tw.json';
import en from './en.json';

const i18n = new createI18n({
	locale: 'zh-tw',
	fallbackLocale: tw, //當選擇的語系無對應翻譯時，則使用的備用語系
	legacy: false,  // 讓你可以在 composition API 中使用
	globalInjection: true, // 全域注入，讓你在 <template> 可以使用 $t
	messages: {
		'zh-tw': tw,
		en
	}
});

export default i18n;