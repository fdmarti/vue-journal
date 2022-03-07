<template>
  <div class="flex justify-between p-2">
      <div class="m-2">
          <span class="text-green-700 text-xl mx-1">15</span>
          <span class="mx-1 font-bold">Julio</span>
          <span class="mx-1">2021, jueves</span>
      </div>
      <div class="flex gap-3">
          <button class="bg-red-600 px-2 text-white rounded-lg">
              <span>Borrar <i class='bx bx-trash'></i></span>
          </button>
          <button class="bg-sky-800 px-2 text-white rounded-lg">
              <span>Subir foto <i class='bx bx-upload'></i></span>
          </button>
      </div>
  </div>

  <hr>

  <div>
      <textarea rows="3" placeholder="¿Que sucedio hoy?" class="w-11/12 m-7 p-2 border-none focus:outline-none rounded"></textarea>
  </div>

    <Fab icon="bx-save"/>

    <img 
        src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1590&q=80" ç
        alt="entry-pic"
        class="fixed w-64 bottom-32  right-10 border-4 border-gray-400 rounded-xl"
        >
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components:{
        Fab : defineAsyncComponent(() => import('../components/FabDayBook.vue'))
    }

}
</script>