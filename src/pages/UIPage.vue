<template>
  <div style="display: flex; flex-direction: column;">
    <w-button innerText="кнопка"></w-button>
    <w-button style="margin-top: 20px" theme="light" innerText="кнопка"></w-button>
  </div>
</template>

<style scoped>
</style>

<script>
import WButton from "../components/ui/WButton.vue";

export default {
  components: { WButton },
};
</script>
