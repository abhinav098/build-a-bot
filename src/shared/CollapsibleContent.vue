<template>
  <div>
    <div class="header">
      <span v-if="open" @click="open = !open"> &#x25B2; See Less </span>
      <span v-if="!open" @click="open = !open"> &#x25BC; See More </span>
    </div>
    <slot v-if="open">
      <div class="default">
        Nothing to show!!
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: true,
    };
  },
};
</script>

<style scoped>
  .header {
    font-size: 12px;
    padding: 3px;
    cursor: pointer;
  }
</style>
