<template>
    <header class="container">
        <span class="span toggle">
            <i class="fa fa-bars fa-fw"></i>
        </span>
        <span class="span home">
            <a href="http://beyondouyuan.github.io" target="_blank">Github</a>
        </span>
        <div class="user">
            <span class="span info">
                Good {{time}}! {{user.name || me}}
            </span>
            <span class="span logout"
                @click="doLogout"
                >
                Logout
            </span>
        </div>
    </header>
</template>

<script>
    import { mapState, mapActions } from 'vuex'

    export default {
        name: 'message',
        methods: {
            doLogout() {
                this.logout({name: '', pwd: ''})
                    .then(() => {
                    this.$router.push({path: '/login'})
                })
            },
            ...mapActions(['logout']),
        },
        computed: {
            time() {
                const hours = new Date().getHours();
                if (hours > 5 && hours < 12) {
                    return 'Morning'
                }
                if (hours > 12 && hours < 18) {
                    return 'Afternoon'
                }
                return 'Evening'
            },
            // 暂时通过sessionStorage解决刷新浏览器时Message通过计算顺行获取user失败的问题
            me() {
                return sessionStorage.getItem('me')
            },
            ...mapState(['user'])
        }
    }
</script>
<style lang="sass" rel="stylesheet/scss" scoped>
    @import "../../style/includes";

    header.container {
        height: 60px;
        line-height: 60px;
        z-index: 1000;
        // background-color: rgba(0,0,0,0.85);
        background-color: #343531;
        .span {
            display: inline-block;
            cursor: pointer;
        }
        .toggle {
            width: 20px;
            height: 60px;
            @include infoButton()
        }
        .home {
            color: $lightGreen;
            text-align: center;
            width: 60px;
            height: 60px;
            // margin-left: 10px;
            & a {
                display: block;
                width: 100%;
                height: 100%;
                color: $lightGreen;
            }
        }
        .user {
            color: $lightGreen;
            height: 60px;
            float: right;
        }
        .info {
            margin-right: 16px;
        }
        .logout {
            text-align: center;
            width: 100px;
        }
        .home,
        .logout {
            @include infoButton()
        }
    }
</style>



















