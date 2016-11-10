<template>
	<nav class="navbar navbar-default">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" :class="{toggled : toggled}" @click='toggleClick'>
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar bar1"></span>
                        <span class="icon-bar bar2"></span>
                        <span class="icon-bar bar3"></span>
                    </button>
				<a class="navbar-brand">{{header}}</a>
			</div>
			<div class="collapse navbar-collapse">
				<ul class="nav navbar-nav navbar-right">
					<li v-for="item in items" :class="{dropdown: item.className == 'dropdown'}" @click="itemClick(item)">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown">
							<i :class="item.icon"></i>
							<p v-if="item.className == 'dropdown'" class="notification">{{item.dropMenus.length}}</p>
							<p>{{item.caption}}</p>
							<b v-if="item.className == 'dropdown'" class="caret"></b>
						</a>
						<ul v-if="item.className == 'dropdown'" class="dropdown-menu">
							<li v-for="dropMenu in item.dropMenus"><a @click="itemClick(dropMenu)">{{dropMenu.caption}}</a></li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</template>
<script>
function click(menu) {
	alert(menu.caption)
}

 export default {
     name: 'Navbar',
     props: {
		header: String,
		items: {
			type: Array,
			default: function() {
				return [
					{
						className: 'dropdown',
						caption: 'Notifications',
						icon: 'ti-bell',
						dropMenus: [
							{
								caption: 'Notification 1',
								click
							},
							{
								caption: 'Notification 2',
								click
							}
						]
					},{
						caption: 'Setting',
						icon: 'ti-settings'
					}
				]
			}
		},
		toggled: Boolean
	},
	data() {
		return {
		}
	},
     methods: {
         toggleClick(event) {			 
			 this.$emit('toggleClick');
		 },
		 itemClick(item) {
			 this.$emit('itemClick');
		 }
     }
 }
</script>