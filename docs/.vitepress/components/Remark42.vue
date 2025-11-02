<template>
  <div class="remark42-section vp-doc">
    <h2 id="comments">Comments</h2>
    <div id="remark42" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue";
import { useRemark42 } from "../composables/useRemark42";

const { initialize, destroy } = useRemark42("remark42");

onMounted(() => {
  initialize();
});

onBeforeUnmount(() => {
  destroy();
});
</script>

<style>
.remark42-section {
  margin-top: 2rem;
  margin-bottom: 2rem;
  max-width: 100%;
}
.remark42 {
  margin-top: 1rem;
}
</style>
