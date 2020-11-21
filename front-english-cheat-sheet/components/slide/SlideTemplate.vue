<template>
  <div class="slide">
    <SlideTitle :text="json.title" />
    <div v-for="(s, index) in json.children" :key="`${index}-${s.title}`">
      <section
        v-for="(sec, index2) in s.children"
        :key="`${index2}-${sec.title}`"
        class="sentence-list"
      >
        <SectionTitle :text="sec.title" />
        <template v-if="isTalk">
          <!-- 会話 -->
          <SentenceTalk
            v-for="(sen, index3) in sec.sentences"
            :key="`${index3}-${sen.ja}`"
            :textdata="sen"
            :right="index3 % 2 === 1"
          />
        </template>
        <template v-else>
          <!-- 一覧 -->
          <Sentence
            v-for="(sen, index3) in sec.sentences"
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
import { SlideDir } from '@/types/app';

export default Vue.extend({
  name: 'SlideTemplate',
  props: {
    json: {
      default: () => {},
      type: Object as PropType<SlideDir>,
    },
  },
  computed: {
    isTalk(): boolean {
      if (this.json && this.json.children.length > 0) {
        const secchild = this.json.children[0].children;
        console.log('secchild', secchild);
        if (secchild && secchild.length > 0) {
          const sentences = secchild[0].sentences;
          if (sentences && sentences.length > 0) {
            if (sentences[0].who) {
              return true;
            }
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
