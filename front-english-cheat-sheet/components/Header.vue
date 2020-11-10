<template>
  <header class="wf">
    <a @click="$emit('open-side-menu')"><b-icon icon="menu" /></a>
    ENGLISH CHEAT SHEET
    <a class="btn-toggle" @click="$emit('toggle-lang')">{{ lang }}</a>
  </header>
</template>
<!------------------------------->

<!------------------------------->
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Header',
  props: {
    lang: {
      default: '',
      type: String,
    },
  },
});
</script>
<!------------------------------->

<!------------------------------->
<style scoped lang="scss">
@import '~/assets/css/_for-component';

header {
  position: relative;
  display: flex;
  align-items: center;
  background-color: $app-color-dark;
  font-size: 16px;
  padding: 0px 10px;
  color: $app-color;
  a {
    display: block;
    color: $app-color;
    padding: 4px 10px 4px 0;
    line-height: 1;
  }
  .icon {
    display: inline-block;
  }
}
.btn-toggle {
  margin-left: auto;
}
</style>
