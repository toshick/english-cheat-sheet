<template>
  <main :class="classLang">
    <ViewBase>
      <Header
        :lang="lang"
        @open-side-menu="open = true"
        @toggle-lang="toggleLang"
      />
      <Body>
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div
              v-for="(p, index) in slidedata"
              :key="`${index}-${p.title}`"
              class="swiper-slide"
            >
              <SlideTemplate :json="p" />
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
      :lang="lang"
      @close="open = false"
      @select="onSelect"
    />
  </main>
</template>
<!------------------------------->

<!------------------------------->
<script lang="ts">
import Vue from 'vue';
import { appStore } from '@/store';
import { SlideDir, Lang } from '@/types/app';
import Swiper from 'swiper';
import SlideTemplate from '@/components/slide/SlideTemplate.vue';

type State = {
  swiper: Swiper | null;
  open: boolean;
};

export default Vue.extend({
  name: 'ViewHome',
  components: { SlideTemplate },
  props: {},
  data(): State {
    return {
      swiper: null,
      open: false,
    };
  },
  computed: {
    classLang(): string {
      return `-${this.lang}`;
    },
    slidedata(): SlideDir[] {
      return appStore.slidedata;
    },
    lang(): string {
      return appStore.lang;
    },
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
    onSelect(index: number) {
      this.swiper?.slideTo(index);
      this.open = false;
    },
    toggleLang() {
      const lang: Lang = this.lang === 'ja' ? 'en' : 'ja';
      appStore.SET_LANG(lang);
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
  background-color: $app-color-dark;
}
.swiper-slide {
  height: 100vh;
  overflow: scroll;
}
</style>
