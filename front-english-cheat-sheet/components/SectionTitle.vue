<template>
  <h1 v-html="mytext" />
</template>
<!------------------------------->

<!------------------------------->
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SectionTitle',
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
  },
});
</script>
<!------------------------------->

<!------------------------------->
<style scoped lang="scss">
@import '~/assets/css/_for-component';
h1 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 1em;
  color: #fff;
  border-top: dashed 1px #fff;
  border-bottom: dashed 1px #fff;
  padding: 4px 0;
}
</style>
