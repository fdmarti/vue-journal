<template>
   <button class="p-3 text-white bg-green-400 hover:bg-green-500 border-none rounded-md shadow">{{text}}</button>
</template>
<script>
export default {
   props:{
       text:{
           type: String,
           default: 'Default text'
       }
   }
}
</script>