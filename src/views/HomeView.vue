<script setup>
import { ref, onMounted } from 'vue';

const checkAccess = async function () {
  const A = localStorage.getItem("A") ?? 0;
  const B = localStorage.getItem("B") ?? "";
  console.log("checkAccess");

  if (!A && !B) {
    alert("要做完 A + B 才看的到人家喔 >///<");
  }

  if (!A) {
    console.log("請 A ");
  } else if (!B) {
    console.log("請進行 B");
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