<template>
<section>
    <div class="p-2">
        <input 
          type="text" 
          class="p-3 border-2 rounded-xl outline-none focus:border-cyan-500 w-96" 
          placeholder="Buscar entradas">
    </div>
    <div class="overflow-y-auto max-h-screen">
        <Entry
          v-for="item in 100"
          :key="item"
        />
    </div>
  </section>
</template>
<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components:{
    Entry: defineAsyncComponent(() => import('./EntryUnit.vue'))
  }
    
}
</script>