<script setup>
import { useAlerterStore } from "./stores/msg.js";
const alertStore = useAlerterStore();

</script>

<template>
  <!-- 提示語用的對話框 -->
  <teleport to="body" v-if="alertStore.visible">
    <div class="fixed w-full z-50 top-0 flex justify-center">
      <div class="block bg-white border border-gray-200 rounded-lg shadow p-3 m-3">
        {{ alertStore.message }}
      </div>
    </div>
  </teleport>
  <router-view />
</template>

<style scoped></style>

