<script setup lang="ts">
import { onMounted } from 'vue';
import NavbarArea from './NavbarArea.vue';
import SidebarArea from './SidebarArea.vue';
import router from '@/router';
import { ACCESS_TOKEN_STORAGE_KEY } from '@/const';
import { useAuthStore } from '@/stores/auth';

const store = useAuthStore()

onMounted(() => {
  store.checkAuth();

  if (!localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY)) {
    router.push('/login');
  }
});
</script>

<template>
  <div class="flex h-screen overflow-hidden">
    <SidebarArea />

    <div class="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
      <NavbarArea />

      <main>
        <div class="p-5 sm:ml-64">
          <div class="p-4 border border-white bg-white rounded-lg dark:border-gray-500 mt-14">
            <router-view></router-view>
          </div>
        </div>
      </main>

    </div>

  </div>
</template>
