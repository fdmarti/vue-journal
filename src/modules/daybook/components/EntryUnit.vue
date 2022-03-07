<template>
    <div 
        class="mb-3 cursor-pointer p-2 hover:bg-gray-100 border-b-2"
        @click="$router.push({name : 'entry', params : {id : 10}})"
        >
        <div>
            <span class="text-green-700 font-bold">15</span>
            <span class="mx-1">Julio</span>
            <span class="mx-2">2021, jueves</span>
        </div>

        <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit corporis nostrum id rerum cupiditate! Impedit soluta dolores, repellendus facilis ex, adipisci obcaecati sapiente sequi in corporis, accusamus voluptas quo. Totam.
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>