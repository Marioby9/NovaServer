<template>
    <div class="">
        <a class="flex items-center gap-2 w-fit py-2 px-3 text-xl rounded-lg"
            :href=" props.link" target="_blank" rel="noopener noreferrer"
            :style="{'color':  props.txtColor, 'background-color': props.bgColor}">
            <font-awesome-icon :icon="props.icon" />
            <p>{{ props.name }}</p>
        </a>
    </div>
</template>

<script setup>
    const props = defineProps(['link', 'name', 'icon', 'bgColor', 'txtColor'])
</script>

<style scoped>
</style>