<template>
  <h1 class="title" v-html="mytext" />
</template>
<!------------------------------->

<!------------------------------->
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'SlideTitle',
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
.title {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 20px 0;
  margin: 0;
}
</style>
