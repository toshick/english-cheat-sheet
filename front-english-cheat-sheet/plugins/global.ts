import Vue from 'vue';
import axios from 'axios';

import Header from '@/components/Header.vue';
import Body from '@/components/Body.vue';
import Footer from '@/components/Footer.vue';
import ViewBase from '@/components/ViewBase.vue';
import SideMenu from '@/components/SideMenu.vue';
import WordList from '@/components/WordList.vue';
import Word from '@/components/Word.vue';
import Sentence from '@/components/Sentence.vue';
import SectionTitle from '@/components/SectionTitle.vue';
import SlideTitle from '@/components/SlideTitle.vue';

Vue.component('Header', Header);
Vue.component('Body', Body);
Vue.component('Footer', Footer);
Vue.component('ViewBase', ViewBase);
Vue.component('SideMenu', SideMenu);
Vue.component('WordList', WordList);
Vue.component('Word', Word);
Vue.component('Sentence', Sentence);
Vue.component('SectionTitle', SectionTitle);
Vue.component('SlideTitle', SlideTitle);

console.log('なんで');

/**
 * axios settings
 */
axios.defaults.headers.common['X-Requested-By'] =
  'english-cheat-sheet-requested-by';
Vue.prototype.$http = axios;

/**
 * 拡大縮小禁止
 */
document.addEventListener('touchmove', mobileNoScroll, { passive: false });

function mobileNoScroll(e: any) {
  if (e.touches.length >= 2) {
    e.preventDefault();
  }
}

/**
 * ダブルタップ禁止
 */
let touchendFlag = false;
document.addEventListener(
  'touchend',
  (e) => {
    if (touchendFlag) {
      e.preventDefault();
    } else {
      touchendFlag = true;
      setTimeout(() => {
        touchendFlag = false;
      }, 500);
    }
  },
  true,
);

/**
 * mixin
 */
Vue.mixin({
  data() {
    return {};
  },
  methods: {
    goTop() {
      if (!this.$router) return;
      this.$router.push('/');
    },
  },
});

// manifestのlinkタグを生成
function setManifest(path: string) {
  const manifest = document.createElement('link');
  manifest.rel = 'manifest';
  manifest.href = path;
  document.head.appendChild(manifest);
}

// OSに応じて読み込むmanifestを変更
const userAgent = navigator.userAgent.toLowerCase();
if (userAgent.indexOf('iphone') > 0 || userAgent.indexOf('ipad') > 0) {
  setManifest('/manifest-ios.json');
} else {
  setManifest('/manifest.json');
}

// serviceWorker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function (registration) {
      // 登録成功
      console.log(
        'ServiceWorker の登録に成功しました。スコープ: ',
        registration.scope,
      );
    })
    .catch(function (err) {
      // 登録失敗
      console.log('ServiceWorker の登録に失敗しました。', err);
    });
}
