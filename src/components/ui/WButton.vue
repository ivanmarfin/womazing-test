<template>
  <button :class="theme === 'light' ? 'w-button w-button-light' : 'w-button'">
    {{ innerText }}
  </button>
</template>

<script>
export default {
  props: {
    innerText: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: "dark",
    },
  },
};
</script>

<style lang="scss" scoped>
.w-button {
  padding: 22px 50px;
  font-size: 17px;
  letter-spacing: 0.02em;
  color: #ffffff;
  background-color: #6e9c9f;
  border: none;
  cursor: pointer;
  transition: 0.2s;
  width: max-content;

  &:hover {
    background-color: #509498;
  }

  &-light {
    color: #509498;
    box-shadow: inset 0 0 1px 1px #509498;
    background-color: #fff;

    &:hover {
        color: white;
        box-shadow: inset 0 0 1px 1px transparent;
        background: #509498;
    }
  }
}
</style>
