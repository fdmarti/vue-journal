<template>
    <nav class="bg-cyan-800 flex justify-between p-4">
        <router-link to="/daybook" class="text-white flex justify-start items-center cursor-pointer">
            <img 
                src="@/assets/logo.png" 
                alt="logo_vue"
                class="h-10"
            >
            <span class="mx-4 text-lg">Daybook</span>
        </router-link>
        <div class="flex mx-2">
            <button
                class="p-2 text-cyan-500 hover:bg-cyan-700 hover:text-white rounded-xl text-xl"
                ><i class='bx bx-log-out-circle'></i>
            </button>
        </div>
    </nav>
</template>
