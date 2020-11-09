<template>
  <article class="sentence">
    <h1>{{ text }}</h1>
    <div class="sentence-des">
      <slot />
    </div>
  </article>
</template>
<!------------------------------->

<!------------------------------->
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Sentence',
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
h1 {
  display: inline-block;
  background-color: #ece3c1;
  border-radius: 3px;
  padding: 4px 10px;
  margin-bottom: 0.5em;
  font-size: 12px;
}
.sentence {
  font-size: 14px;
  padding-bottom: 10px;
}
</style>
