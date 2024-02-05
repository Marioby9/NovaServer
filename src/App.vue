<template>
    <div class="view">
      <div class="page">
        <div class="main">
          <HeaderComp/>
          <RouterView/>
        </div>
      </div>
    </div>
    <OverlayComp/>
</template>

<script setup>
  import { RouterView } from 'vue-router';
  import OverlayComp from './components/OverlayComp.vue';
  import HeaderComp from '@/components/HeaderComp.vue';
</script>

<style scoped>

</style>
