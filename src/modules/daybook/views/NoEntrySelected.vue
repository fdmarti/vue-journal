<template>
    <div class="flex justify-center items-center h-full">
        <h1 class="text-3xl font-bold">No hay nada seleccionado</h1>
    </div>

    <Fab />
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components:{
        Fab : defineAsyncComponent(() => import('../components/FabDayBook.vue'))
    }
}
</script>