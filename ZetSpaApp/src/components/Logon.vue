<template> 

  <div class="login col-md-4 col-md-offset-4">
    <div class="login-screen">
      <div class="login-icon">
        <img  title="欢迎 ZetSpa" />
        <h1>
          欢迎 <small>&nbsp;&nbsp;&nbsp;ZetSpa</small>
        </h4>
      </div>

      <form>
        <div class="form-group">
          <label for="username">用户名</label>
          <input type="text" class="form-control" name="username" v-model="username" placeholder="请输入用户名" autofocus="autofocus" required />          
        </div>
        <div class="form-group">
          <label for="password">密码</label>
          <input type="password" class="form-control" v-model="password" name="password" placeholder="请输入密码" required />          
        </div>
        <button class="btn btn-primary btn-lg btn-block" type="submit">登录</button>
        <a class="login-link" href="#">忘记密码?</a>
        <div v-show="hasError" class="has-error center"><label class="control-label">{{msg}}</label></div>
      </form>
    </div>
  </div>
  
</template>

<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      hasError: false
    }
  }
}
</script>


<style scoped>
html {
    background-color: #f0f3f4;
}

.login {
    font-family: "Microsoft YaHei", "Source Sans Pro", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
    line-height: 1.42857143;
    color: #58666e;
    background-color: transparent;  

}

.login .form-group {
  text-align: left;
}
</style>
