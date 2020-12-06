<template>
  <div class="slide">
    <SlideTitle :text="json.title" />
    <div v-for="(s, index) in json.children" :key="`${index}-${s.title}`">
      <section class="sentence-list">
        <SectionTitle :text="s.title" />
        <template v-if="isTalk">
          <!-- 会話 -->
          <SentenceTalk
            v-for="(sen, index3) in s.celldata"
            :key="`${index3}-${sen.ja}`"
            :textdata="sen"
            :right="index3 % 2 === 1"
          />
        </template>
        <template v-else>
          <!-- 一覧 -->
          <Sentence
            v-for="(sen, index3) in s.celldata"
            :key="`${index3}-${sen.ja}`"
            :textdata="sen"
          />
        </template>
      </section>
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>
<!------------------------------->

<!------------------------------->
<script lang="ts">
import Vue, { PropType } from 'vue';
import { SpreadSheetDir } from 'spread-sheet-to-nested-json';

export default Vue.extend({
  name: 'SlideTemplate',
  props: {
    json: {
      default: () => {},
      type: Object as PropType<SpreadSheetDir>,
    },
  },
  computed: {
    isTalk(): boolean {
      if (this.json && this.json.children.length > 0) {
        const celldata = this.json.children[0].celldata;
        if (celldata && celldata.length > 0) {
          if (celldata[0].who) {
            console.log('celldata[0].who', celldata[0].who);
            return true;
          }
        }
      }
      return false;
    },
  },
});
</script>
<!------------------------------->

<!------------------------------->
<style scoped lang="scss">
@import '~/assets/css/_for-component';

.slide {
  background-color: $app-color;
}

.sentence-list {
  padding: 20px 20px 0;
  max-width: 360px;
}
</style>
