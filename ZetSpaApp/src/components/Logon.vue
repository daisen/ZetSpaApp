<template> 
<div class="container">
	<div class="login col-md-4 col-md-offset-4">
		<div class="login-screen">
			<div class="login-icon">
				<img title="欢迎 ZetSpa" src="../assets/logo.png" />
				<h1>
					欢迎 <small>&nbsp;&nbsp;ZetSpa</small>
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
				<div class="form-group">
					<button class="btn btn-primary btn-lg btn-block" type="submit">登录</button>
				</div>

				<p> <a class="login-link" href="#">忘记密码?</a> </p>

				<div v-show="hasError" class="has-error center"><label class="control-label">{{msg}}</label></div>
			</form>
		</div>
	</div>
</div> 
  
</template>

<script>
export default {
	name: 'logon',
  data () {
    return {
      username: '123',
      password: '456',
      hasError: false,
      msg: 'Success'
    }
  },
  methods: {
    submit: ()=>{
      window.location.href = '#/home/'
    }
  }
}
</script>


<style scoped>
/*.login {
    font-family: "Microsoft YaHei", "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    line-height: 1.42857143;
    color: #58666e;
    background-color: transparent;  

}

.login .form-group {
  text-align: left;
}*/
</style>
