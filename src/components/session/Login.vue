<template>
  <div class="login">
    <div class="login-wrap">
      <div class="avatar">
        <img src="../../assets/img/monkey.png" class="img-circle" alt="">
      </div>
      <form class="col-md-offset-1 col-md-10" @submit.prevent="login">
        <div class="input-group input-group-lg">
          <span class="input-group-addon">
                        <i class="fa fa-user"></i>
                    </span>
          <input name="username" type="text" class="form-control" placeholder="用户名" v-model="user.tc_name">
        </div>
        <div class="input-group input-group-lg">
          <span class="input-group-addon">
                        <i class="fa fa-key"></i>
                    </span>
          <input type="password" class="form-control" placeholder="密码" v-model="user.tc_pass">
        </div>
        <p v-if="loading">正在登录。。。</p>
        <button type="submit" class="btn btn-lg btn-primary btn-block">登 录</button>
        <!-- <router-link to="/home" class="btn btn-lg btn-primary btn-block">登 录</router-link> -->
      </form>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import router from '../../router/index'

  export default {
    data () {
      return {
        user: {
          tc_name: '',
          tc_pass: ''
        },
        loading: false
      }
    },

    methods: {
      login () {
        this.loading = true
        const params = new URLSearchParams()
        params.append('tc_name', this.user.tc_name)
        params.append('tc_pass', this.user.tc_pass)
        axios.post('/api/login', params)
          .then(res => {
            // 登陆成功
            if ( res.data.code === 200 ) {
              // 实现跳转
              let redirect = this.$route.query.redirect || '/home'
              if ( redirect === '/' ) {
                redirect = "/home"
              }

              router.push( redirect )
            }
          })
          .catch(err => {
            console.log( err )
            window.alert('登陆失败，用户名或密码不正确')
          })
      }
    }
  }  
</script>
<style>
</style>
