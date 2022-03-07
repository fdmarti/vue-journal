<template>
    <button class="fixed bottom-10 right-10 bg-cyan-900 hover:bg-cyan-800 rounded-full text-white p-1 text-6xl">
        <i class='bx' :class="icon"></i>
    </button>
</template>
<script>
export default {
    props:{
        icon : {
            type : String,
            default : 'bx-plus'
        }
    }
}
</script>