<script setup>

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

</script>

<template>
  <BlockHeader />
  <main class="pt-12 capitalize">
    <div class="container px-6 mx-auto mb-16 transition-all lg:px-12">
      <article class="relative flex flex-col mb-12 lg:flex-row home__top md:mb-20">
        <div class="relative p-4 grow lg:max-xl:basis-1/2 md:pt-12 lg:pt-24 lg:pb-0 lg:pr-0 lg:pl-10 xl:pl-20 ">
          <section class="text-center text-white whitespace-pre-wrap lg:text-left">
            <h1
              class="mb-4 text-4xl font-bold md:max-xl:text-5xl xl:text-6xl"
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
      <article class="home__middle">
        <section class="relative py-6 mb-12 text-center after:content-[''] after:absolute after:w-2/5 after:h-px after:bg-negative-500 after:top-0 after:left-0 before:content-[''] before:absolute before:w-2/5 before:h-px before:bg-negative-500 before:bottom-0 before:right-0">
          <h2 class="text-xl md:text-3xl text-negative-500">
            {{ $t('home.worry.title') }}
          </h2>
          <p class="text-lg md:text-xl text-negative-100">
            {{ $t('home.worry.caption') }}
          </p>
        </section>
        <div class="grid flex-col grid-cols-1 gap-2 md:grid-cols-2 lg:flex lg:justify-around lg:flex-row">
          <section
            v-for="middleItems in middleList"
            :key="middleItems.key"
            class="grid justify-center py-6 text-center gap-y-6 text-primary-200"
          >
            <img
              :src="middleItems.url"
              alt=""
              class="sm:max-lg:w-full sm:max-lg:h-full w-60 h-60"
            >
            <p class="text-base whitespace-pre md:text-lg">
              {{ middleItems.name }}
            </p>
          </section>
        </div>
      </article>
    </div>
  </main>
</template>

<style scoped>
</style>
