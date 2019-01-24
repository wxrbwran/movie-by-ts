<template>
    <div>
      <NavBar title="首页" />
    </div>
</template>

<script lang = "ts" >
import { Component, Vue } from 'vue-property-decorator';
import { NavBar } from 'vant';

@Component({
  components: {
    NavBar,
  },
})
export default class Nav extends Vue {
}
</script>

<style lang="scss" scoped>
</style>
