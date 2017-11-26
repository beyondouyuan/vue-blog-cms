<template>
    <section>
        <router-view></router-view>
    </section>
</template>
<script>
    import Archive    from './Archive.vue'
    // 此处组件命名不为Article是因为与HTML标签的article重复，渲染时虽然可以渲染出来，但是会报错，故而不推荐组件命名与HTML标签名相同
    import MyArticle    from './Article.vue'
    export default {
        name: 'Blog',
        components: {Archive, MyArticle}
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    section.container {
        height: 100%;
        min-height: 800px;
    }
</style>
