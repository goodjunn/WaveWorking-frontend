<script setup>
//
</script>

<template>
  <BlockHeader />
  <main class="pt-12 capitalize">
    <div class="flex flex-col items-start justify-between mx-auto transition-all home__top lg:container lg:px-6 lg:flex-row">
      <!-- left -->
      <section class="min-w-full lg:min-w-[40vw] xl:min-w-[32vw] p-4 md:pt-12 lg:pt-24 lg:pb-0 lg:pr-0 lg:pl-10 xl:pl-20 text-center text-white whitespace-pre-wrap lg:text-left">
        <h1
          class="mb-4 text-4xl font-bold sm:text-6xl "
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
      <!-- right -->
      <div class="w-full h-[27rem] sm:h-[33rem] bg-[left_-68px_center] sm:bg-center lg:bg-right 2xl:bg-center bg-no-repeat bg-cover sm:bg-contain md:bg-auto bg-[url('assets/main_banenr.png')] " />
    </div>
  </main>
</template>

<style scoped>
</style>
