<template>
  <div class="m-10 text-center">
    <h1 class="text-4xl">Nuxt.js App</h1>
    <ui-button />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Button } from "vue-ui";

export default Vue.extend({
  components: { "ui-button": Button },
  name: "IndexPage",
});
</script>
