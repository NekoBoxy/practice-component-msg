<script setup>
import { ref, onMounted } from 'vue';
import { useAlerterStore } from "@/stores/msg.js";

const store = useAlerterStore(); // 使用 pinia store 來設置提示語

const checkAccess = async function () {
  const A = localStorage.getItem("A") ?? 0;
  console.log("checkAccess");

  if (!A) {
    store.setAlerter("嗨");
  }
};

onMounted(() => {
  checkAccess();
});


</script>

<template>
  <div class="">hello</div>
</template>

<style scoped>
div {
  position: absolute;
}
</style>