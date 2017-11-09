<template>
  <div class="layout">
    <Row type="flex" :class="{'layout-hide-text': spanLeft < 3}">
    <Sidebar ref="sidebar" :spanLeft="spanLeft"></Sidebar>
    <VMain :spanRight="spanRight" :toggle="toggleClick"></VMain>
    </Row>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'
import VMain from './components/Main'

export default {
  name: 'layout',
  components: {
    Sidebar,
    VMain
  },
  data () {
    return {
      spanLeft: 3,
      spanRight: 21
    }
  },
  methods: {
    toggleClick () {
      console.log(1)
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
