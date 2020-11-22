<template>
  <main :class="classLang">
    <ViewBase>
      <Header
        :lang="lang"
        @open-side-menu="open = true"
        @toggle-lang="toggleLang"
      >
        <!-- nav -->
        <nav v-if="slidedata" class="header-nav">
          <ul v-if="swiper">
            <li
              v-for="(item, index) in menuItems"
              :key="`nav-${index}-${item}`"
              :class="{ '-current': swiper.activeIndex === index }"
            >
              <a @click="() => onSelect(index)" v-html="item" />
            </li>
          </ul>
        </nav>
      </Header>
      <Body ref="mybody" class="mybody">
        <!-- nodata -->
        <div v-if="slidedata.length === 0" class="nodata wf">NO DATA</div>
        <!-- swiper -->
        <div v-else class="swiper-container">
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
    menuItems(): string[] {
      return appStore.slidedata.map((d: SlideDir) => {
        return d.title.replace(
          /(（.+?）)/g,
          '<span class="furigana">$1</span>',
        );
      });
    },
  },
  mounted() {
    const mybody = this.$refs.mybody as Vue;
    const $mybody = mybody.$el as HTMLDivElement;

    this.swiper = new Swiper('.swiper-container', {
      on: {
        slideChange() {
          $mybody.scrollTo(0, 0);
        },
      },
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
@import '~/assets/css/_mixins.scss';

.mybody {
  position: relative;
  overflow: scroll;
}
.nodata {
  font-size: 55px;
  white-space: nowrap;
  @include center;
  top: 20%;
  width: 90%;
  text-align: center;
  color: #fff;
}

.swiper-container {
  width: 100vw;
  background-color: $app-color-dark;
  margin: 0;
}
.swiper-slide {
  // height: 100vh;
  // overflow: scroll;
}
.header-nav {
  position: relative;
  width: 100vw;
  height: 30px;
  overflow: hidden;
  ul {
    display: flex;
    align-items: center;
    border-bottom: solid 1px rgba($app-color-dark, 0.2);
    height: 100%;

    overflow: scroll;
    scrollbar-width: none;
  }
  li {
    padding: 0 10px;
    height: 30px;
    &.-current {
      a {
        color: $app-color-dark;
      }
    }
  }
  a {
    white-space: nowrap;
    font-size: 10px;
    color: #fff;
  }
}

.debug-footer {
  background-color: blue;
}
</style>
