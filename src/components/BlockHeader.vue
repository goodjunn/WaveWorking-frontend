<!-- eslint-disable vue/html-quotes -->
<script setup>
import { LanguageIcon, Bars3Icon } from '@heroicons/vue/24/solid';
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';

const { t } = useI18n();

const navlist = [
	{ name: t('menuNav.serving') },
	{ name: t('menuNav.joinWave') },
	{ name: t('menuNav.registration') }
];

</script>

<template>
  <header class="sticky top-0 linearBg-main">
    <div class="container flex items-center justify-between px-6 py-4 mx-auto text-lg capitalize transition-all md:py-6">
      <div class="flex items-center space-x-4 flex-nowrap">
        <div class="text-3xl font-bold uppercase text-secondary-50">
          logo
        </div>
        <span class="hidden text-secondary-300 md:inline-block">{{ $t('common.slogan') }}</span>
      </div>
      <nav class="flex items-center space-x-4 md:space-x-7 text-accent-100">
        <ul class="items-center hidden md:flex space-x-7">
          <!-- TODO 跳至各自頁面 -->
          <li
            v-for="navItems in navlist"
            :key="navItems.key"
            class="cursor-pointer hover:underline hover:underline-offset-4 hover:text-accent-50 active:text-white active:decoration-0"
          >
            {{ navItems.name }}
          </li>
        </ul>
        <!-- TODO 中英文切換 -->
        <LanguageIcon class="w-6 h-6 cursor-pointer hover:text-accent-50" />
        <!-- mobile menu -->
        <Menu as="div">
          <MenuButton>
            <Bars3Icon class="w-6 h-6 cursor-pointer active:text-white md:hidden" />
          </MenuButton>
          <MenuItems
            as="ul"
            class="absolute top-full right-0 w-[50vw] py-3 origin-center border-solid rounded-md shadow-lg bg-primary-900 border border-primary-600"
          >
            <MenuItem
              v-for="navItems in navlist"
              v-slot="{ active }"
              :key="navItems.key"
              as="li"
              class="px-4 py-3 cursor-pointer text-primary-600 hover:text-primary-300 hover:bg-primary-700/40"
              :class='{ "text-secondary-500": active }'
            >
              <a>
                {{ navItems.name }}
              </a>
            </MenuItem>
          </MenuItems>
        </Menu>
      </nav>
    </div>
  </header>
</template>

<style scoped>
</style>
