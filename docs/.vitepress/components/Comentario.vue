<template>
  <div class="comentario-section vp-doc">
    <h2 id="comments">
      Comments
    </h2>
    <comentario-comments />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { useComentario } from "../composables/useComentario";

const comentario = useComentario();

onMounted(() => {
  comentario.initialize();
});

onUnmounted(() => {
  comentario.cleanup();
});
</script>
