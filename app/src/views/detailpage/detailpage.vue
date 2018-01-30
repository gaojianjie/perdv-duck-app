<template>
    <div v-html="this.$route.params.data">
    </div>
</template>
<script>
    export default {
        mounted() {
            console.log(this.$route.params.data)
        }
    }
</script>
<style scoped src="./detailpage.css">
    
</style>

