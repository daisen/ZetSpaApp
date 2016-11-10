<template>
	<div class="sidebar" data-background-color="white" data-active-color="danger">
		<!--
		Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black"
		Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
	    -->
		<div class="sidebar-wrapper">
			<router-link to="/main">
				<div class="logo">
				<a :href="logoUrl" class="simple-text">
					<div v-html="logo"></div>
				</a>
			</div>
			</router-link>


			<ul class="nav">
				<li v-for="item in menus" :class="{ active: item.isActive}" v-on:click="itemClick(item, $event)">
					<a :href="item.href">
						<i :class="item.icon"></i>
						<p>{{item.caption}}</p>
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
    export default {
		props: {
			menus: {
				type: Array,
				default: function () {
					return [
								{
									href: '#/main/dashboard/',
									caption: 'Dashboard',
									icon: 'ti-panel',
									isActive: true
								},
												{
									href: '#',
									caption: 'User Profile',
									icon: 'ti-user',
									isActive: false
								},
								{
									href: '#',
									caption: 'Table List',
									icon: 'ti-view-list-alt',
									isActive: false
								},
												{
									href: '#',
									caption: 'Typography',
									icon: 'ti-text',
									isActive: false
								},
								{
									href: '#',
									caption: 'Icons',
									icon: 'ti-pencil-alt2',
									isActive: false
								},
												{
									href: '#',
									caption: 'Maps',
									icon: 'ti-map',
									isActive: false
								}
							]
				}

			},
			logo: {
				type: String,
				default: 'Project'
			},
			logoUrl: {
				type: String,
				default: '#'
			},
		},
		methods: {
			itemClick: function(item, event) {
				if (event && !item.href) {
					event.preventDefault()
				} else {
					console.log(item);
				}

				this.menus.forEach(function(it){
					it.isActive = false;
				})
				
				item.isActive = true;
				this.$emit('itemClick', item);
			}
		}
	}
</script>