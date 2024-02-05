<template>
    <form @submit.prevent>
        <div class="flex items-center rounded-md bg-grayBlue h-12">
            <button @click="isDropdown = !isDropdown" class="w-60 rounded-s-md border-r-2 border-solid border-white px-6 h-full hover:bg-gray ">{{currentFilter.es}} <font-awesome-icon class="ml-2" icon="caret-down"/></button>
            <input type="search" class="w-full h-full px-4 bg-grayBlue" placeholder="Introduce el valor a buscar" v-model="filterValue">
            <button class="px-6 h-full bg-blue w-fit rounded-e-md hover:bg-lightBlue2" @click="search" ><font-awesome-icon icon="magnifying-glass" /></button>
        </div>
        <div id="dropdown" ref="dropdown" v-if="isDropdown" class="z-10 mt-2 bg-black rounded-md shadow w-48 font-semibold absolute">
            <ul class="text-sm text-white">
                <li>
                    <button v-for="(elm, indx) in filters" :key="indx" @click="changeFilter(elm)" type="button" class="inline-flex w-full px-4 py-2 hover:bg-lightOrange rounded-md hover:text-darkBlack">{{ elm.es }}</button>
                </li>
            </ul>
        </div>
    </form>
</template>

<script setup>
    import { ref } from 'vue';
    import {onClickOutside} from '@vueuse/core'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faL } from '@fortawesome/free-solid-svg-icons';

    //

    const emit = defineEmits(['search'])
    const isDropdown = ref(false)
    const filters = [{es: 'ID', en:'id'}, {es: 'Nombre', en:'name'}, {es: 'Espacio', en:'space'}, {es: 'Todos', en:'All'}]
    const currentFilter = ref({es: 'Todos', en:'All'})
    const filterValue = ref('')
    const dropdown = ref(null)

    //

    const changeFilter = (elm) => {
        currentFilter.value = elm
        isDropdown.value = false
    }

    const search = () => {
        if(currentFilter.value.en == 'All'){
            filterValue.value = ''
        }
        emit('search', {filterName: currentFilter.value.en, filterValue: filterValue.value})
    }

    onClickOutside(dropdown, () => isDropdown.value = false)

</script>

<style scoped>

</style>