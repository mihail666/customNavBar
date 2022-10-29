<template>
  <side-bar />

 <router-view />
</template>

<script>
import sideBar from '@/components/sidebar'


export default {
  name: 'App',
  components: {
    sideBar

  }
}
</script>

<style>

</style>
