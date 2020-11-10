<template>
  <main>
    <ViewBase>
      <Header @open-side-menu="open = true" />
      <Body>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <Slide01 />
            </div>
            <div class="swiper-slide">
              <Slide02 />
            </div>
            <div class="swiper-slide">
              <Slide03 />
            </div>
            <div class="swiper-slide">
              <Slide04 />
            </div>
            <div class="swiper-slide">
              <Slide05 />
            </div>
          </div>
        </div>
      </Body>
    </ViewBase>
    <!-- SideMenu -->
    <SideMenu
      v-if="swiper"
      :open="open"
      :index="swiper.activeIndex"
      @close="open = false"
      @select="onSelect"
    />
  </main>
</template>
<!------------------------------->

<!------------------------------->
<script lang="ts">
import Vue from 'vue';
import Swiper from 'swiper';
import Slide01 from '@/components/slide/Slide01.vue';
import Slide02 from '@/components/slide/Slide02.vue';
import Slide03 from '@/components/slide/Slide03.vue';
import Slide04 from '@/components/slide/Slide04.vue';
import Slide05 from '@/components/slide/Slide05.vue';

type State = {
  swiper: Swiper | null;
  open: boolean;
  slideMap: { [key: string]: number };
};

export default Vue.extend({
  name: 'ViewHome',
  components: { Slide01, Slide02, Slide03, Slide04, Slide05 },
  props: {},
  data(): State {
    return {
      swiper: null,
      open: false,
      slideMap: {
        control: 0,
        hearing: 1,
        opinion: 2,
        ask: 3,
        answer: 4,
      },
    };
  },
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      // on: {
      //   slideChange(e: Event) {
      //     const s = e as Swiper;
      //     console.log('slideChange', s.activeIndex);
      //   },
      // },
    });
  },
  methods: {
    onSelect(slide: string) {
      console.log('slide', slide);
      this.swiper?.slideTo(this.slideMap[slide]);
      this.open = false;
    },
  },
});
</script>
<!------------------------------->

<!------------------------------->
<style scoped lang="scss">
@import '~/assets/css/_for-component';

.swiper-container {
  height: 100%;
  width: 100vw;
}
.swiper-slide {
  height: 100vh;
  overflow: scroll;
}
</style>