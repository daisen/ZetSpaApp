<template>
    <div class="collapse navbar-collapse off-canvas-sidebar" data-background-color="white" data-active-color="danger">
        <div class="sidebar-wrapper">
            <div class="logo">
                <a :href="logoHref" class="simple-text">
                    {{logo}}
                </a>
            </div>
            <ul class="nav navbar-nav">
                <li v-for="item in rightMenus" :class="[{active: item.isActive}, item.className]" @click="itemClick(item)">
                    <template v-if="item.className != 'divider'">
                        <a :href="item.href" class="dropdown-toggle" data-toggle="dropdown">
                            <i :class="item.icon"></i>
                            <p v-if="item.className == 'dropdown'" class="notification">{{item.dropMenus.length}}</p>
                            <p>{{item.caption}}</p>
                            <b v-if="item.className == 'dropdown'" class="caret"></b>
                        </a>
                        <ul v-if="item.className == 'dropdown'" class="dropdown-menu">
                            <li v-for="dropMenu in item.dropMenus"><a @click="itemClick(dropMenu)">{{dropMenu.caption}}</a></li>
                        </ul>
                    </template>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props: {   
        logo: String,
        logoHref: String,
        rightMenus: Array
    },    
    methods: {
        itemClick: function(item) {      
              
            if (item.isActive !== undefined) {
                this.rightMenus.forEach(function(it){
                    if (it.isActive === true) {
                        it.isActive = false;
                    }
                    
                })
                
                item.isActive = true;
            }

            this.$emit('itemClick', item);
        }
    }
}
</script>
<style>
    @media (min-width: 991px) {
        .navbar-collapse.collapse.off-canvas-sidebar {
            display: none!important;
        }
    }
</style>