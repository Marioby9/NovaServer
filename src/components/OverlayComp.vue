<template>
  <BtnSocialMedia
    class="absolute top-0 right-0 m-5 hover:scale-[1.03] transition duration-300 ease-in-out"
    link="https://github.com/Marioby9/NovaServer"
    name="Ver Proyecto"
    txtColor="black"
    bgColor="white"
    icon="fa-brands fa-github"
  />
  <img
    class="imgOverlay fixed w-full h-full top-0 left-0 bg-center bg-cover z-[-2]"
    src="@/assets/img/overlays/overlayLogin.jpg"
    alt="background"
  />
  <div class="fixed w-full h-full top-0 left-0 bg-darkBlack opacity-80 z-[-1]"></div>
</template>

<script setup>
  import BtnSocialMedia from '@/components/buttons/BtnSocialMedia.vue'

</script>

<style scoped>
    .imgOverlay{
        filter: grayscale(60%);
    }

</style>
