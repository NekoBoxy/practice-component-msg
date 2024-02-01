import { ref } from "vue";
import { defineStore } from "pinia";

// option 寫法
// export const useAlerterStore = defineStore("alerter", {
//   state: () => ({
//     vusible: false,
//     msg: ""
//   }),
//   actions: {
//     setAlerter(visible, msg) {
//       this.vusible = visible;
//       this.msg = msg;
//     },
//   },
// });

// composition 寫法
export const useAlerterStore = defineStore("alerter", () => {
  const visible = ref(false);
  const message = ref("");
  function setAlerter(msg) {
    visible.value = true;
    message.value = msg;

    setTimeout(() => {
      visible.value = false;
    }, 3000);
  };

  return { visible, message, setAlerter };
});
