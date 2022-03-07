<template>
  <BtnPrimary text="Daybook" @click="goTodaybook"/>
</template>
<script>
import BtnPrimary from "../components/Buttons/BtnPrimary.vue";
export default {
    components: { BtnPrimary },

    methods: {
        goTodaybook() {
            this.$router.push({ name: "no-entry" });
        }
    },
}
</script>
