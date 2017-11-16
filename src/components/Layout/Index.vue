<template>
  <div class="layout">
    <Row type="flex" :class="{'layout-hide-text': spanLeft < 3}">
    <Sidebar ref="sidebar" :spanLeft="spanLeft" :userName="userName"></Sidebar>
    <VMain :spanRight="spanRight" :toggle="toggleClick" :userName="userName"></VMain>
    </Row>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import VMain from './components/Main'
import auth from '@/utils/auth'

export default {
  name: 'layout',
  components: {
    Sidebar,
    VMain
  },
  data () {
    return {
      spanLeft: 3,
      spanRight: 21,
      userName: auth.get()['userinfo'].username
    }
  },
  methods: {
    toggleClick () {
      if (this.spanLeft === 3) {
        this.spanLeft = 2
        this.spanRight = 22
      } else {
        this.spanLeft = 3
        this.spanRight = 21
      }
    }
  }
}
</script>

<style src="./style/index.css">

</style>
