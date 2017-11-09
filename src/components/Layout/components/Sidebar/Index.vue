<template>
  <Col :span="spanLeft" class="layout-menu-left">
    <Menu active-name="1" theme="dark" width="auto">
      <div class="logo">
        <div class="menu-title">
            后台管理系统
        </div>
        <div class="logo-icon">
          <Avatar class="logo-icon-image" src="https://i.loli.net/2017/08/21/599a521472424.jpg"></Avatar>
          <div style="display:inline-block;float:left;padding:0px 0 5px 20px;">
            <p id="p1" class="logo-icon-uname layout-text" >adimn</p>
            <p class="logo-icon-state layout-text">online</p>
          </div>
        </div>
      </div>
      <Submenu name="1">
        <template slot="title">
            <Icon type="ios-paper" :size="iconSize"></Icon>
            <span class="layout-text">内容管理</span>
        </template>
        <MenuItem name="1-1">文章管理</MenuItem>
        <MenuItem name="1-2">评论管理</MenuItem>
        <MenuItem name="1-3">举报管理</MenuItem>
      </Submenu>
      <Submenu name="2">
        <template slot="title">
          <Icon type="ios-people" :size="iconSize"></Icon>
          <span class="layout-text">用户管理</span>
        </template>
        <MenuItem name="2-1">新增用户</MenuItem>
        <MenuItem name="2-2">活跃用户</MenuItem>
      </Submenu>
      <Submenu name="3">
        <template slot="title">
          <Icon type="stats-bars" :size="iconSize"></Icon>
          <span class="layout-text">统计分析</span>
        </template>
        <MenuGroup title="使用">
          <MenuItem name="3-1">新增和启动</MenuItem>
          <MenuItem name="3-2">活跃分析</MenuItem>
          <MenuItem name="3-3">时段分析</MenuItem>
        </MenuGroup>
        <MenuGroup title="留存">
          <MenuItem name="3-4">用户留存</MenuItem>
          <MenuItem name="3-5">流失用户</MenuItem>
        </MenuGroup>
      </Submenu>
    </Menu>
  </Col>
</template>

<script>
export default {
  name: 'sidebar',
  props: ['spanLeft'],
  computed: {
    iconSize () {
      return this.spanLeft === 3 ? 14 : 24
    }
  }
}
</script>