<template>
    <section class="cont">
        <h1 class="sectionTitle">Dispositivos</h1>
        <FilterComp @search="search" />
        <div class="flex flex-col gap-3 mt-4 max-h-80 overflow-y-scroll pr-4 ">
            <DeviceCard v-for="elm in allExecutors" :key="elm.id" :device="elm"/>
            <DeviceCard v-for="elm in allSensors" :key="elm.id" :device="elm"/>
        </div>
    </section>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { getAllSensors, getAllExecutors, getFilteredExecutors, getFilteredSensors } from '@/fb.js';
    import FilterComp from '@/components/FilterComp.vue'
    import DeviceCard from '@/components/cards/DeviceCard.vue'
    //

    const allSensors = ref([])
    const allExecutors = ref([])

    //

    const loadAllDevices = () => {
        getAllExecutors(docs => {
            allExecutors.value = []
            docs.forEach(doc => {allExecutors.value.push({id: doc.id, type: 'Executor', ...doc.data()})})
        })
        getAllSensors(docs => {
            allSensors.value = []
            docs.forEach(doc => {allSensors.value.push({id: doc.id, type: 'Sensor', ...doc.data()})})
        })
    }
    const loadFilteredDevices = (filter) => {
            getFilteredExecutors(filter.filterName, filter.filterValue, docs => {
                allExecutors.value = []
                docs.forEach(doc => {allExecutors.value.push({id: doc.id, type: 'Executor', ...doc.data()})})
            })
            getFilteredSensors(filter.filterName, filter.filterValue, docs => {
                allSensors.value = []
                docs.forEach(doc => {allSensors.value.push({id: doc.id, type: 'Sensor', ...doc.data()})})
            })
    }

    const search = (filter) => {
        if(filter.filterName == 'All'){
            loadAllDevices()
        }
        else{
            loadFilteredDevices(filter)
        }
        
    }

    //

    onMounted(() => {
        loadAllDevices()

    })

</script>

<style scoped>
    ::-webkit-scrollbar { @apply w-[10px] ml-2 }

    /* Estilo del pulgar (thumb) de la barra de desplazamiento */
    ::-webkit-scrollbar-thumb { @apply bg-lightBlue rounded-sm }

    /* Estilo de la pista (track) de la barra de desplazamiento */
    ::-webkit-scrollbar-track { @apply bg-white rounded-sm }
</style>