<template>
	<div class="container-fluid logon">
		<div class="col-md-4 col-md-offset-4">
			<div class="login-screen">
				<div class="login-icon">
					<img title="欢迎 Project" src="static/img/new_logo.png" />
					<h1>
						欢迎 <small>&nbsp;&nbsp;Project</small>
						</h4>
				</div>

				<form @submit.prevent="submit">
					<div class="form-group">
						<!--<label for="username">用户名</label>-->
						<input type="text" class="form-control" name="username" v-model="username" placeholder="用户名" autofocus="autofocus" required
						/>
						
					</div>
					<div class="form-group">
						<!--<label for="password">密码</label>-->
						<input type="password" class="form-control" v-model="password" name="password" placeholder="密码" required />
					</div>					
					<button class="btn btn-primary btn-lg btn-block" type="submit">登录</button>					
					<a class="login-link" href="#">忘记密码?</a>
					<div v-show="hasError" class="has-error center"><label class="control-label">{{msg}}</label></div>
				</form>
			</div>
		</div>
		<!--页脚-->
		<Footerbar></Footerbar>
		<!--页脚结束-->
		
	</div>



</template>

<script>
import Footerbar from './Footerbar'
export default {
  data () {
    return {
      username: '123',
      password: '456',
      hasError: false,
      msg: 'Success'
    }
  },
  methods: {
    submit(){
			this.$router.push('/main')
    }
  },
	components: {
		Footerbar
	}
}
</script>


<style scoped>
	.logon {
		font-family: 'Muli', "Helvetica", Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		line-height: 1.42857143;
		color: #58666e;
		background-color: transparent;
		text-align: center;		
	}

	.login-screen {
		padding: 60px 0px 0px 0px;
	}
	
	.logon .form-group {
		text-align: left;
	}

	.logon .form-group input {		
		font-size: 1.2em;
		border-bottom: 1px solid #7A9E9F;
		padding: 30px 0;
		border-radius: 0;	
	}

	.logon button {		
		margin: 50px 0;	
	}
	
	.logon .footer-bar {
		position: absolute;
	}

	.logon .btn-lg {
		border-radius: 0;
	}
</style>