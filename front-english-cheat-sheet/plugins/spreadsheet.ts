import Vue from 'vue';
import { SlideData } from '@/types/app';
import { appStore } from '@/store';

const pagedata: SlideData = [
  {
    children: [
      {
        children: [
          { ja: 'ハロー1', en: 'hello1' },
          { ja: 'ハロー1', en: 'hello1' },
          { ja: 'ブロック1', en: 'block1' },
        ],
        title: 'セクションタイトル1',
      },
      {
        children: [
          { ja: 'ハロー2', en: 'hello1' },
          { ja: 'ハロー2', en: 'hello2' },
          { ja: 'ブロック2', en: 'block2' },
        ],
        title: 'セクションタイトル2',
      },
    ],
    title: 'ページタイトル1',
  },
  {
    children: [
      {
        children: [
          { ja: 'ハロー1', en: 'hello1' },
          { ja: 'ハロー1', en: 'hello1' },
          { ja: 'ブロック1', en: 'block1' },
        ],
        title: 'セクションタイトル1',
      },
    ],
    title: 'なんかいう',
  },
];

export default function ({ $config }: { $config: any }) {
  console.log('$configです', $config);
  let sheetJson = null;
  if ($config.sheetJsonStr) {
    const sheetJsonStr = decodeURIComponent(
      JSON.stringify($config.sheetJsonStr),
    );
    sheetJson = JSON.parse(sheetJsonStr);
  }
  if (!sheetJson) {
    sheetJson = pagedata;
  }

  // Vue.prototype.$sheetJson = sheetJson;
  appStore.SET_PAGEJSON(sheetJson);
}