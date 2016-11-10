<template>
    <div id="main" :class="{'nav-open':openRightSide}">
        <div class="wrapper">
            <MenuSlider logo="logo" :menus="menus" @itemClick=""></MenuSlider>
            <div class="main-panel">
                <!--上方导航-->
                <Navbar :toggled="openRightSide" :header="navHeader" :items="buttons" @toggleClick="toggleClick"></Navbar>
                <!--上方导航结束-->

                <!--<Dashboard></Dashboard>-->
                <router-view></router-view>

                <!--页脚-->
                <Footerbar></Footerbar>
                <!--页脚结束-->
            </div>            
        </div>
        <RightSidebar :logo="logo" :right-menus="rightMenus"></RightSidebar>
    </div>
</template>

<script>
import MenuSlider from './MenuSlider'
import Navbar from './Navbar'
import Footerbar from './Footerbar'
import Dashboard from './Dashboard' 
import RightSidebar from './RightSidebar'
import {menus, buttons} from '../assets/data.js'

export default {
    name: 'app',
    mounted() {        
        var self = this;
        window.addEventListener('resize', function(){            
            let width = window.screen.width;
            if (width > 991 ) {
                self.openRightSide = false;
            }
        })
    },   
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.setMenuActive(to.meta.title)
        })
    },
    data() {
        return {
        logo: "PROJECT",
        navHeader: 'Dashboard',
        smallShow: false,
        openRightSide: false,
        menus: menus,
        buttons: buttons
        }
    },
    methods: {
        toggleClick() {
            this.openRightSide = !this.openRightSide; 
        },
        menuClick(item) {
            this.navHeader = item.caption;
        },
        setMenuActive(title) {
            this.navHeader = title;
            for(let m of this.menus) {
                if (m.caption == this.navHeader) {
                    m.isActive = true;
                } else {
                    m.isActive = false;
                }
            }
        }
    },
    computed: {
        rightMenus: function() {
            let ms = [];
            ms = ms.concat(this.buttons);
            ms.push({
                className: 'divider'
            });
            ms = ms.concat(this.menus);
            return ms;
        }
    },
    watch: {
        '$route' :function() {
            this.setMenuActive(this.$route.meta.title)
        }
    },
    components: {
        MenuSlider,
        Navbar,
        Footerbar,
        Dashboard,
        RightSidebar
    }
}
</script>

<style>
    /*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>