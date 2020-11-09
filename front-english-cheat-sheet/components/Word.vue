<template>
  <li class="word">
    <span>{{ text }}</span>
    <span class="word-des">
      <slot />
    </span>
  </li>
</template>
<!------------------------------->

<!------------------------------->
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Word',
  props: {
    text: {
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

.word {
  background-color: #c8bc8e;
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
  padding: 4px 8px;
  margin: 0 6px 6px 0;
}
.word-des {
  font-size: 12px;
}
</style>
