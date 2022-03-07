<template>
  <NavbarDaybook />
  <div class="grid grid-cols-3">
    <EntryList/>
    <div  class="col-span-2">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

import { defineAsyncComponent } from 'vue'

export default {
    components: {
    NavbarDaybook: defineAsyncComponent(() => import("../components/NavbarDaybook.vue")),
    EntryList: defineAsyncComponent(() => import("../components/EntryList.vue")),
}
}
</script>