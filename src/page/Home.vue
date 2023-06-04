<script setup>
//
</script>

<template>
  <BlockHeader />
  <main class="pt-12 capitalize">
    <article class="relative flex flex-col px-6 mx-auto transition-all lg:flex-row home__top lg:container">
      <div class="lg:px-6 grow lg:max-xl:basis-1/2">
        <!-- left -->
        <section class="relative p-4 text-center text-white whitespace-pre-wrap md:pt-12 lg:pt-24 lg:pb-0 lg:pr-0 lg:pl-10 xl:pl-20 lg:text-left">
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
          <img
            src="@/assets/top_title_bg.png"
            class="absolute -z-[1] -top-5 sm:-top-20 lg:top-0 left-0 right-0 md:max-lg:left-[18%] object-cover mix-blend-hard-light origin-[-18%_-18%]"
          >
        </section>
      </div>
      <div class="relative mx-auto 2xl:basis-1/2">
        <img
          src="@/assets/main_banenr.png"
          alt="大標題的插圖"
          class="object-cover"
        >
        <img
          src="@/assets/top_illust_bg.png"
          class="absolute -z-[1] -bottom-6 right-10 md:-bottom-20 md:right-28 object-cover mix-blend-hard-light"
        >
      </div>
    </article>
  </main>
</template>

<style scoped>
</style>
