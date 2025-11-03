<template>
  <div class="comentario-section vp-doc">
    <h2 id="comments">Comments</h2>
    <comentario-comments></comentario-comments>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useComentario } from "../composables/useComentario";

onMounted(() => {
  useComentario().initialize();
});
</script>
