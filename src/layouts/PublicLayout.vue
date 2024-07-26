<script setup lang="ts">
import { onMounted } from 'vue';
import router from '@/router';
import { ACCESS_TOKEN_STORAGE_KEY } from '@/const';
import PublicNavbarArea from './PublicNavbarArea.vue';

onMounted(() => {
  if (localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)) {
    router.push('/');
  }
});
</script>

<template>
  <div class="flex h-screen overflow-hidden">

    <div class="relative flex flex-1 flex-col">
      <PublicNavbarArea />

      <main>
        <div class="mx-auto max-w-screen-2xl p-0 md:p-0 2xl:p-10">
          <RouterLink to="/" class="flex ms-2 md:me-24">
            <span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">GTCRM</span>
          </RouterLink>
          <router-view></router-view>
        </div>
      </main>

    </div>

  </div>
</template>
