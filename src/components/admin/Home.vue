<template>
    <section class="container">
        <Submenu></Submenu>
        <over-view></over-view>
    </section>
</template>
<script>
    import Submenu    from './Aside.vue'
    import OverView    from './OverView.vue'
    export default {
        name: 'Home',
        components: {Submenu, OverView}
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    section.container {
        height: 100%;
        min-height: 800px;
        display: flex;
    }
</style>
