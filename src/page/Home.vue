<script setup>
import { MusicalNoteIcon, CloudIcon, BoltIcon, ClockIcon } from '@heroicons/vue/24/outline';
import BlockFooter from '../components/BlockFooter.vue';

const { t } = useI18n();

// TODO 更新對應的插圖
const middleList = [
	{
		name: t('home.worry.0'),
		url: 'src/assets/top_illust_bg.png'
	},
	{
		name: t('home.worry.1'),
		url: 'src/assets/top_illust_bg.png'
	},
	{
		name: t('home.worry.2'),
		url: 'src/assets/top_illust_bg.png'
	}
];

const serviceList = [
	{
		icon: MusicalNoteIcon,
		label: t('home.serving.0.heading'),
		caption: t('home.serving.0.caption')
		// gradientColors: ['#5C92FE', '#6A1CFB']
	},
	{
		icon: CloudIcon,
		label: t('home.serving.1.heading'),
		caption: t('home.serving.1.caption')
	},
	{
		icon: BoltIcon,
		label: t('home.serving.2.heading'),
		caption: t('home.serving.2.caption')
	},
	{
		icon: ClockIcon,
		label: t('home.serving.3.heading'),
		caption: t('home.serving.3.caption')
	}
];

const isChineseLanguage = () => {
	// 檢查當前語言
	this.$i18n.locale === 'zh-tw';

	// 切換語言
	if (this.$i18n.locale === 'zh-tw') {
		this.$i18n.locale = 'en';
		this.isChineseLanguage = false;
	} else {
		this.$i18n.locale = 'zh-tw';
		this.isChineseLanguage = true;
	}
};

</script>

<template>
  <BlockHeader />
  <div class="overflow-hidden">
    <main class="pt-12 capitalize ">
      <div class="container px-6 mx-auto transition-all mb:6 lg:mb-16 lg:px-12">
        <article class="relative flex flex-col mb-12 lg:flex-row home__top md:mb-20">
          <div class="relative p-4 grow lg:max-xl:basis-1/2 md:pt-12 lg:pt-24 lg:pb-0 lg:pr-0 lg:pl-10 xl:pl-20 ">
            <section class="text-center text-white whitespace-pre-wrap lg:text-left">
              <h1
                class="mb-4 text-4xl font-bold md:max-xl:text-5xl xl:text-6xl drop-shadow-sec500"
              >
                {{ $t('home.title') }}
              </h1>
              <p class="mb-12 text-xl md:mb-16 sm:text-2xl">
                {{ $t('home.content') }}
              </p>
              <router-link
                v-slot="{ navigate }"
                to="/Channel"
                custom
              >
                <button
                  type="button"
                  class="btn btn-main min-w-[14rem] uppercase"
                  @click="navigate"
                >
                  {{ $t('home.ctaButton') }}
                </button>
              </router-link>
            </section>
            <img
              src="@/assets/top_title_bg.png"
              class="absolute -z-[1] -top-5 sm:-top-20 lg:top-0 left-0 right-0 md:max-lg:left-[18%] object-cover mix-blend-hard-light origin-[-18%_-18%]"
            >
          </div>
          <div class="relative mx-auto 2xl:basis-1/2">
            <img
              src="@/assets/main_illust.png"
              alt="大標題的插圖"
              class="object-cover"
            >
            <img
              src="@/assets/top_illust_bg.png"
              class="absolute -z-[1] -bottom-6 right-10 md:-bottom-20 md:right-28 object-cover mix-blend-hard-light"
            >
          </div>
        </article>
        <article class="relative home__pain">
          <section class="relative py-6 mb-12 text-center after:content-[''] after:absolute after:w-2/5 after:h-px after:bg-negative-500 after:top-0 after:left-0 before:content-[''] before:absolute before:w-2/5 before:h-px before:bg-negative-500 before:bottom-0 before:right-0">
            <h3 class="text-xl md:text-3xl text-negative-500 drop-shadow-[0_0_6px_rgba(255,173,161,0.25)]">
              {{ $t('home.worry.title') }}
            </h3>
            <p class="text-lg md:text-xl text-negative-100">
              {{ $t('home.worry.caption') }}
            </p>
          </section>
          <div class="grid justify-around grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <section
              v-for="middleItems in middleList"
              :key="middleItems.key"
              class="flex flex-col items-center justify-center py-6 text-center gap-y-6 text-primary-200"
            >
              <img
                :src="middleItems.url"
                alt="situation illut"
                class="w-60 h-60"
              >
              <p
                class="w-full text-base sm:w-4/5 xl:w-3/4 md:text-lg"
                :class="{'whitespace-pre': isChineseLanguage}"
              >
                {{ middleItems.name }}
              </p>
            </section>
          </div>
          <img
            src="@/assets/middle_circle_bg.png"
            alt="circle background"
            class="absolute -z-[1] object-cover -left-[60%] top-2/3 lg:top-52 lg:-left-[35%] mix-blend-hard-light"
          >
        </article>
      </div>
      <div class="mb-6 home__appeal">
        <div class="container mx-auto relative pt-[74px]">
          <article class="absolute -left-[4.6rem] sm:max-xl:left-8 xl:left-[55px] 2xl:left-[110px] top-0">
            <img
              src="@/assets/sub_illust.png"
              alt="插圖"
              class="object-cover relative z-[1] max-w-[34.5rem] animate-shake-lazy origin-top-left"
            >
          </article>
        </div>
        <div
          class="relative flex flex-col items-center justify-center overflow-hidden home__middle-sub linearBg-main"
        >
          <div class="container pt-[13rem] lg:pt-0 relative flex flex-col justify-end px-6 md:flex-row">
            <section class="flex-1 " />
            <section class="px-6 pt-6 pb-12 whitespace-break-spaces md:whitespace-pre lg:py-12 basis-full lg:basis-1/2 lg:pl-14 lg:pr-4 z-[2]">
              <h3 class="mb-6 text-2xl md:text-3xl text-primary-50 drop-shadow-[0_0_6px_rgba(255,122,184)]">
                {{ $t('home.expect.title') }}
              </h3>
              <p class="text-lg md:text-xl text-accent-100">
                {{ $t('home.expect.caption') }}
              </p>
            </section>
          </div>
          <div
            class="absolute inset-y-0 flex flex-row justify-between w-full px-4 lg:px-12"
          >
            <div
              v-for="circleItem in 2"
              :key="circleItem.key"
              class="flex flex-col justify-between pt-[262px] pb-20 md:py-10"
            >
              <div
                v-for="item in 3"
                :key="item.key"
                class="w-3 h-3 rounded-full bg-primary-900"
              />
            </div>
          </div>
          <div class="absolute top-0 w-full h-full">
            <span class="!font-['Rufina'] mix-blend-screen absolute -top-16 -left-16 text-transparent text-[150px] leading-[130px] bg-clip-text bg-gradient-to-r from-secondary-700/50 to-secondary-700/0 to-65% opacity-50 sm:whitespace-nowrap whitespace-normal">Music Remind Share Music Remind Share<br>
              Remind Share Music Remind Share Music<br>
              Share Music Remind Music Remind Share</span>
          </div>
        </div>
        <div class="container py-4 pr-6 mx-auto text-right text-primary-500 lg:pr-2 2xl:pr-0">
          <span>{{ $t('copyright') }}</span>
        </div>
      </div>
      <article class="home__service">
        <div class="container px-6 pb-20 mx-auto transition-all md:pb-8">
          <div class="flex items-center mb-12 md:mb-16 gap-x-6 md:gap-x-8">
            <span class="ml-0 md:ml-6 inline-block w-1 h-[3.5rem] linearBg-main rounded-full bg-gradient-to-b" />
            <h2 class="text-2xl sm:text-3xl md:text-4xl text-primary-50 ">
              {{ $t('common.serving') }}
            </h2>
          </div>
          <div class="grid justify-between grid-cols-1 gap-12 md:gap-6 md:grid-cols-2 lg:grid-cols-4">
            <section
              v-for="serviceItems in serviceList"
              :key="serviceItems.key"
              class="flex flex-col p-3 md:pt-4 md:px-8 lg:pb-24 items-cente md:items-start"
            >
              <component
                :is="serviceItems.icon"
                class="w-24 h-24 mx-auto mb-6 stroke-secondary-700 drop-shadow-sec700 md:mx-0"
              />
              <h4 class="mb-3 text-2xl text-center text-secondary-400 drop-shadow-sec700 md:text-left">
                {{ serviceItems.label }}
              </h4>
              <p class="text-lg text-primary-200">
                {{ serviceItems.caption }}
              </p>
            </section>
          </div>
        </div>
      </article>
    </main>
    <BlockFooter />
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Rufina&display=swap');
</style>
