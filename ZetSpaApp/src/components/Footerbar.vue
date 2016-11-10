<template>	
	<footer class="footer footer-bar">
		<div class="container">
			<nav class="pull-left">
				<ul>
					<li v-for="item in items">
						<a :href="item.href">
                                {{item.msg}}
                            </a>
					</li>

				</ul>
			</nav>
			<div class="copyright">
				&copy; {{fullyear}}, made with <i class="fa fa-heart heart"></i> by
				<a href="mailto:huangstao@hotmail.com">hst</a>
			</div>
		</div>
	</footer>
</template>
<script>
    export default {
        name: 'Footerbar',
		data(){
			return {
			fullyear: new Date().getFullYear(),
			items: []
			}
		},
    }
</script>
<style>
	.footer-bar {
		position: relative;
		bottom: 0;
		width: 100%;
		margin: 0 -20px;
	}

	.footer-bar .container {
		padding: 0 0;
	}
</style>