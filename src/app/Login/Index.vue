<template>
  <Card class="login">
    <p slot="title">后台管理系统</p>
    <Form ref="formValidata" :model="formValidata" :rules="ruleValidata" :label-width="60" label-position="left" inline>
      <FormItem label="用户名" prop="username">
        <Input type="text"  v-model="formValidata.username" placeholder="请输入用户名">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <FormItem label="密码" prop="password">
        <Input type="password" v-model="formValidata.password" placeholder="请输入密码">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
        </Input>
      </FormItem>
      <Form-item>
        <Button type="primary" @click="handleLogin">登录</Button>
      </Form-item>
    </Form>
  </Card>
</template>


<script>
  export default {
    name: 'login',
    data () {
      return {
        formValidata: {
          username: 'admin',
          password: 'admin'
        },
        ruleValidata: {
          username: [
            {
              required: true,
              message: '用户名不能为空'
            }
          ],
          password: [
            {
              required: true,
              message: '密码不能为空'
            }
          ]
        }
      }
    },
    methods: {
      handleLogin () {
        this.$refs.formValidata.validate(async valid => {
          
        })
      }
    }
  }
</script>

<style>
.login {
  position: absolute;
  top: 250px;
  left: 50%;
  background-color: #fff;
  margin-left: -180px;
  width: 360px;
}
</style>
