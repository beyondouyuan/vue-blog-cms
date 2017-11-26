<template>
    <aside class="log">
        <div class="logo">
            <img src="../../assets/img/ouyuan.jpg" alt="me" />
        </div>
        <menu class="navigation">
            <ul>
                <router-link :to="{path:'/admin'}" tag="li">
                    <i class="fa fa-flag fa-fw"></i>
                    <span>Board</span>
                </router-link>
                <router-link :to="{name:'editor'}" tag="li">
                    <i class="fa fa-pencil fa-fw"></i>
                    <span>Add</span>
                </router-link>
                <router-link :to="{path:'/blog'}" tag="li">
                    <i class="fa fa-link fa-fw"></i>
                    <span>Archive</span>
                </router-link>
                <router-link :to="{name:'account'}" tag="li">
                    <i class="fa fa-user fa-fw"></i>
                    <span>Account</span>
                </router-link>
            </ul>
        </menu>
    </aside>
</template>

<script>
    export default {
        name: 'Aside'
    }
</script>

<style lang="sass" rel="stylesheet/scss" scoped>
    @import "../../style/includes";
    aside.log {
        box-sizing: border-box;
        padding-top: 20px;
        width: 200px;
        flex-grow: 0;
        background-color: #343531;
        .logo {
            width: $logoSize;
            height: $logoSize;
            margin: 0 auto;
            border-radius: 50%;
            overflow: hidden;
            img {
                display: block;
                transition: all 4s;
                width: $logoSize;
                height: $logoSize;
                &:hover {
                    cursor: pointer;
                    transform: rotate(960deg);
                }
            }

        }
        .navigation {
            margin: 20px 0;
            padding: 0;
            ul {
                list-style: none;
                padding: 0;
                overflow: hidden;
                > li {
                    width: 100%;
                    color: $lightGreen;
                    transition: all 0.4s;
                    margin-top: 10px;
                    padding-left: 4px;
                    cursor: pointer;
                    height: 40px;
                    line-height: 40px;
                    padding-left: 20px;
                    > span {
                        color: $lightGreen;
                        display: inline-block;
                        padding-left: 6px;
                    }
                    &:hover {
                        padding-left: 40px;
                        background-color: rgba(0,0,0,0.15)
                    }
                }
            }
        }
    }
</style>
