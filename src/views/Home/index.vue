<template>
  <div class="home">
    <ly-tab
      v-model="selectedId"
      :items="items"
      :options="options"
      @change="handleChange"
    >
    </ly-tab>
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
  import TabBar from '../../components/TabBer/'

  export default {
    components: {
      TabBar
    },
    data() {
      return ({
        selectedId: 0,
        items: [
          {label: '热门'},
          {label: '服饰'},
          {label: '鞋包'},
          {label: '母婴'},
          {label: '百货'},
          {label: '食品'},
          {label: '内衣'},
          {label: '男装'},
          {label: '电器'}
        ],
        options: {
          activeColor: '#e9232c'
        },
        subRouter: ['hot', 'dress', 'box', 'mbaby', 'general', 'food', 'shirt', 'man', 'ele']
      })
    },
    methods: {
      handleChange (item, index) {
        this.$router.replace(this.subRouter[index])
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "../../assets/style/global";

  .home {
    height: 100%;
    width: 100%;
  }
</style>
