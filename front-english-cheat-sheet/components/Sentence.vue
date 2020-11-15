<template>
  <article class="sentence">
    <h1 v-html="mytext" />
    <div class="sentence-des">
      <!-- slot -->
      <p v-html="mysentence" />
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
  computed: {
    mytext(): string {
      return this.text.replace(
        /(（.+?）)/g,
        '<span class="furigana">$1</span>',
      );
    },
    mysentence(): string {
      if (!this.$slots.default) return '';
      const vnode = this.$slots.default[0];
      return vnode.text || '';
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
