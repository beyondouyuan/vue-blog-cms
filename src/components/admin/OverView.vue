<template>
    <div class="overview">
        <Message></Message>
        <router-view></router-view>
    </div>
</template>
<script>
    import Message    from './Message.vue'
    export default {
        name: 'OverView',
        components: {Message}
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    div.overview {
        flex-grow: 2;
        overflow: hidden;
    }
</style>
