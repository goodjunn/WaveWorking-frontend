<script setup>
// const { t } = useI18n();

</script>

<template>
  <footer class="border-t border-accent-500">
    <article class="container relative flex flex-col items-center px-6 py-8 mx-auto gap-y-8 sm:gap-x-6 sm:flex-row 2xl:px-20">
      <div class="px-6 text-xl text-center text-primary-100 sm:text-2xl basis-3/5 sm:text-left">
        {{ $t('footerContent') }}
      </div>
      <div class="flex items-center justify-center px-6 mb-12 grow sm:mb-0">
        <button
          type="button"
          class="btn btn-main min-w-[14rem] uppercase"
          @click="navigate"
        >
          {{ $t('home.ctaButton') }}
        </button>
      </div>
      <img
        src="@/assets/footer_circle_bg.png"
        alt="circle background"
        class="absolute -z-[1] object-cover max-w-[776px] -right-[20rem] -top-[15rem] md:-right-[10rem] md:-top-[18rem] mix-blend-hard-light"
      >
    </article>
  </footer>
</template>

<style scoped>
</style>
