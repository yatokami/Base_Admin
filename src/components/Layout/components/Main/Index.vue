<template>
  <Col :span="spanRight">
    <div class="layout-header">
      <Button type="text" @click="emitClick">
        <Icon type="navicon" size="32" ></Icon>
      </Button>
      <div class="layout-header-right">
        <ul class="layout-header-ul">
          <li @click="handleLogout"><a><Avatar icon="log-out"></Avatar></a></li>
          <li>&nbsp;&nbsp;</li>
          <li>admin</li>
          <li><Avatar  src="https://i.loli.net/2017/08/21/599a521472424.jpg"></Avatar></li>
        </ul>
      </div>
    </div>
    <div class="layout-breadcrumb">
      <Breadcrumb>
        <BreadcrumbItem href="#">Index</BreadcrumbItem>
        <BreadcrumbItem href="#">Apps</BreadcrumbItem>
        <BreadcrumbItem>App</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="layout-content">
      <div class="layout-content-main">
        <router-view></router-view>
      </div>
    </div>
    <div class="layout-copy">
      2011-2016 &copy; TalkingData
    </div>
  </Col>
</template>

<script>

export default {
  name: 'main',
  props: {
    spanRight: Number,
    toggle: {
      type: Function,
      default: null
    }
  },
  methods: {
    emitClick () {
      this.toggle()
    },
    handleLogout () {
      this.$router.push('/logout')
      this.$Message.success('退出成功')
    }
  }
}
</script>

