<template>
  <div class="slide">
    <SlideTitle :text="json.title" />
    <section v-for="(s, index) in json.children" :key="`${index}-${s.title}`">
      <SectionTitle :text="s.title" />

      <Sentence
        v-for="(sen, index2) in s.children"
        :key="`${index2}-${sen.ja}`"
        :text="sen.ja"
        :en="sen.en"
      />
    </section>

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
