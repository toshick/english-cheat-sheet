import Vue from 'vue';
import { SlideData } from '@/types/app';
import { appStore } from '@/store';

const pagedata: SlideData = [
  {
    children: [
      {
        children: [
          { ja: 'ハロー1\nハロー1', en: 'hello1\nhello11' },
          { ja: 'ハロー1', en: 'hello1' },
          { ja: 'ブロック1', en: 'block1' },
        ],
        title: 'セクションタイトル1（たいとる）',
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
    title: 'ページタイトル1（たいとる）',
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
    title: 'ページタイトル2（たいとる）',
  },
];

export default function ({ $config }: { $config: any }) {
  let sheetJson = null;
  if ($config.sheetJsonStr) {
    const sheetJsonStr = decodeURIComponent(
      JSON.stringify($config.sheetJsonStr),
    ).replace(/\n/g, '\\n');
    sheetJson = JSON.parse(sheetJsonStr);
  }
  if (!sheetJson) {
    sheetJson = pagedata;
  }
  console.log('sheetJson', JSON.stringify(sheetJson));

  // Vue.prototype.$sheetJson = sheetJson;
  appStore.SET_PAGEJSON(sheetJson);
}
