<template>
  <Col :span="spanLeft" class="layout-menu-left">
    <Menu ref="menu" @on-select="handleSelect" active-name="1" theme="dark" width="auto">
      <div class="logo">
        <div class="menu-title">
            后台管理系统
        </div>
        <div class="logo-icon">
          <Avatar class="logo-icon-image" src="https://i.loli.net/2017/08/21/599a521472424.jpg"></Avatar>
          <div style="display:inline-block;float:left;padding:0px 0 5px 20px;">
            <p id="p1" class="logo-icon-uname layout-text" >{{ userName }}</p>
            <p class="logo-icon-state layout-text">online</p>
          </div>
        </div>
      </div>
      <Submenu v-for="(menuitem, index) in menuList" :key="index" :name="menuitem.path">
        <template slot="title">
            <Icon :type="menuitem.icon" :size="iconSize"></Icon>
            <span class="layout-text">{{ menuitem.title }}</span>
        </template>
        <MenuItem v-for="(menuChild, childIndex) in menuitem.childs" :key="childIndex" :name="menuChild.parlink">
          {{ menuChild.subtitle}}
        </MenuItem>
      </Submenu>
    </Menu>
  </Col>
</template>

<script>
import api from '@/api/axios'
import { mapGetters } from 'vuex'

export default {
  name: 'sidebar',
  props: ['spanLeft', 'userName'],
  computed: {
    iconSize () {
      return this.spanLeft === 3 ? 14 : 24
    },
    ...mapGetters([
      'menuList'
    ])
  },
  created () {
    this.get()
  },
  methods: {
    get () {
      api.getMenu().then((data) => {
        console.log(data)
        this.$store.dispatch('getMenuList', data)
      })
    },
    handleSelect (name) {
      this.$router.push(name)
    }
  }
}
</script>