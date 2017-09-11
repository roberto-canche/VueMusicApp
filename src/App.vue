<template lang="pug">
  #app
    vm-header
    router-view
    vm-footer
</template>

<script>

import VmFooter from '@/components/layout/Footer.vue'
import VmHeader from '@/components/layout/Header.vue'

export default {
  name: 'app',
  components: {
    VmFooter,
    VmHeader
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';
  .results {
    margin-top: 50px;
  }
  .columns,.column{
    display:block;
  }

  .is-active {
    border:3px #23d160 solid;
  }
</style>
