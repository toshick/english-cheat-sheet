<template>
  <article class="sentence">
    <h1 v-html="mytext" />
    <div class="sentence-des">
      <!-- slot -->
      <p v-html="entext" />
    </div>
  </article>
</template>
<!------------------------------->

<!------------------------------->
<script lang="ts">
import Vue, { PropType } from 'vue';
import { SlideDirLang } from '@/types/app';
export default Vue.extend({
  name: 'Sentence',
  props: {
    textdata: {
      default: () => {},
      type: Object as PropType<SlideDirLang>,
    },
  },
  computed: {
    mytext(): string {
      if (!this.textdata) return '';
      return this.textdata.ja.replace(
        /(（.+?）)/g,
        '<span class="furigana">$1</span>',
      );
    },
    entext(): string {
      if (!this.textdata) return '';
      return this.textdata.en.replace(/[\n]/g, '<br />');
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
