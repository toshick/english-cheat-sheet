<template>
  <section>
    <h1>単語</h1>
    <ul class="wordlist">
      <slot />
    </ul>
  </section>
</template>
<!------------------------------->

<!------------------------------->
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'WordList',
  props: {},
});
</script>
<!------------------------------->

<!------------------------------->
<style scoped lang="scss">
@import '~/assets/css/_for-component';
h1 {
  font-size: 14px;
  margin-bottom: 0.5em;
}
.wordlist {
  display: flex;
  flex-wrap: wrap;
}
</style>
