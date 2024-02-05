<template>
    <div class="flex items-center w-full ps-5 px h-14 min-h-14 bg-bone text-darkBlack rounded-md">
        <div class="w-[25%] h-full flex items-center">{{ device.name }}</div>
        <div class="w-[30%] h-full flex items-center">{{ device.id }}</div>
        <div v-if="device.type == 'Sensor'" class="w-[30%] h-full flex gap-3 items-center">
            <p>{{ device.unit }}:</p>
            <p>{{ device.value }}</p>
        </div>
        <div v-if="device.type == 'Executor'" class="w-[30%] h-full flex gap-3 items-center">
            <p>{{ device.on ? 'Encendido' : 'Apagado' }}</p>
        </div>
        <div class="w-[15%] h-full flex justify-center gap-3">
            <RouterLink class=" w-full flex gap-3 items-center justify-center h-full rounded-e-md bg-orange hover:bg-lightOrange" :to="'/device/'+device.id">
                Gestionar
                <font-awesome-icon icon="gear"/>
            </RouterLink>
            
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router';
    const {device} = defineProps(['device'])
</script>

<style scoped>

</style>