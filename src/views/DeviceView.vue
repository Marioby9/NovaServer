<template>
    <section class="cont h-full">
        <RouterLink to="/">
            <font-awesome-icon class="text-3xl" icon="arrow-left"/>
        </RouterLink>
        <h1 class="sectionTitle">Gestionar dispositivo</h1>
        <div class="flex items-center justify-center w-full h-[60%]">
            <div class="flex flex-col p-10 gap-3 w-[60%] bg-lightWhite rounded-lg text-darkBlack">
                <p class="text-center text-3xl font-bold mb-4">{{ device.name }}</p>
                <p class="text-xl"> <span class="font-semibold">ID-Dispositivo:</span> {{ device.space }}</p>
                <p class="text-xl "><span class="font-semibold">ID-Espacio:</span>  {{ device.space }}</p>
                <p class="text-xl "><span class="font-semibold">Tipo:</span>  {{ device.type }}</p>
                <p v-if="device.type == 'Ejecutor'" class="text-xl "><span class="font-semibold">Estado:</span>  {{ device.on ? 'Encendido' : 'Apagado' }}</p>
                <div v-if="device.type == 'Sensor'" class="flex items-center  w-full">
                    <div class="w-1/2 flex gap-5 items-center">
                        <p class="text-xl "><span class="font-semibold">Unidad:</span>  {{ device.unit }}</p>
                    </div>
                    <div class="w-1/2 flex gap-5 items-center">
                        <p class=" text-xl font-semibold">Valor: </p> 
                        <input type="number" class="p-2 bg-coal w-24 rounded-md text-white" v-model="device.value">
                        <font-awesome-icon @click="saveChanges" icon="floppy-disk" class="text-2xl hover:scale-110 cursor-pointer"/>
                    </div>
                    
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute, RouterLink } from 'vue-router';
    import { getSensor, getExecutor, updateSensor } from '@/fb.js';

    //

    const route = useRoute()
    const device = ref({})

    //

    //SEARCH IN SENSORS, IF DOESN´T FIND DATA, SEARCH IN EXECUTORS
    const loadDevice = () => {
        getSensor(route.params.id, doc => {
            if(doc.data()){
                device.value = {id: doc.id, type: 'Sensor',...doc.data()}
            }
            else{
                getExecutor(route.params.id, doc => {
                    if(doc.data()){
                        device.value = {id: doc.id, type: 'Ejecutor', ...doc.data()}
                    }
                })
            }
        })
        
    }

    const saveChanges = () => {
        updateSensor(device.value.id, {value: device.value.value} )
    }

    onMounted(() => {
        loadDevice()
    })

    

</script>

<style scoped>

</style>