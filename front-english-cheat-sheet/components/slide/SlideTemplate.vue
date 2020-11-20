<template>
  <div class="slide">
    <SlideTitle :text="json.title" />
    <div v-for="(s, index) in json.children" :key="`${index}-${s.title}`">
      <section
        v-for="(sec, index2) in s.children"
        :key="`${index2}-${sec.title}`"
        class=""
      >
        <SectionTitle :text="sec.title" />
        <Sentence
          v-for="(sen, index3) in sec.sentences"
          :key="`${index3}-${sen.ja}`"
          :text="sen.ja"
          :en="sen.en"
        />
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
});
</script>
<!------------------------------->

<!------------------------------->
<style scoped lang="scss">
@import '~/assets/css/_for-component';

.slide {
  background-color: $app-color;
}

section {
  padding: 20px 20px 0;
}
</style>
