<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  // computed
  get computedMsg() {
    return `computed${this.msg}`;
  }
  // method
  public greet() {
    console.log(`greeting${this.msg}`);
  }
  // lifecycle hook
  private mounted() {
    this.greet();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  font-size: 16px;
}

</style>
