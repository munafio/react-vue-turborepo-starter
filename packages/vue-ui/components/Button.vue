<template>
  <button @click="handleClick">Click Me</button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  methods: {
    handleClick: () => {
      alert("Woooha!");
    },
  },
});
</script>
