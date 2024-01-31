<template>
    <div class="view">
      <RouterView/>
    </div>
    <OverlayComp/>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import OverlayComp from './components/OverlayComp.vue';
</script>

<style scoped>

</style>
