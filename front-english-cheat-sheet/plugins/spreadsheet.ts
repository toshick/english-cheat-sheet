import Vue from 'vue';
import { SlideDir, SlideSource, SlideDirLang } from '@/types/app';
import { appStore } from '@/store';

export default function ({ $config }: { $config: any }) {
  let sheetJson: any = null;

  if ($config.sheetJsonStr) {
    const sheetJsonStr = decodeURIComponent(
      JSON.stringify($config.sheetJsonStr),
    ).replace(/\n/g, '\\n');
    sheetJson = JSON.parse(sheetJsonStr);

    console.log('$config.sheetJsonStr', sheetJsonStr);
  } else {
    console.log('$config.sheetJsonStrなし');
  }
  if (!sheetJson) {
    sheetJson = pagedata;
  }

  // GASによる加工なしの場合jsで加工する
  if (Array.isArray(sheetJson) && sheetJson[0].pageTitle) {
    sheetJson = getSheetJson(sheetJson);
  }

  // console.log('sheetJson', JSON.stringify(sheetJson));

  if (sheetJson) {
    appStore.SET_PAGEJSON(sheetJson);
  }
}

const pagedata: SlideSource[] = [
  {
    pageTitle: 'ページタイトル',
    sectionTitle: '会議（かいぎ）をはじめる',
    ja:
      'チーム内(ない)のコミュニケーション不足(ぶそく)が、問題(もんだい)になっています。',
    en: 'The lack of communication among team members is becoming a problem.',
    who: 'タコのすけ',
  },
  {
    pageTitle: '',
    sectionTitle: '',
    ja:
      'ちょっと不具合(ふぐあい)があるので、今日中(きょうじゅう)に直(なお)します。',
    en: "There are some defects, so I'll fix it by the end of the day.",
    who: '',
  },
  {
    pageTitle: '',
    sectionTitle: '',
    ja: '週末（しゅうまつ）はどうでしたか？2',
    en: 'How was your weekend?',
    who: 'タコのすけ',
  },
  {
    pageTitle: '',
    sectionTitle: 'セクションタイトル',
    ja: '今日（きょう）は寒（さむ）いよね',
    en: 'It’s cold today, isn’t it?',
    who: 'イカ二郎',
  },
  {
    pageTitle: '',
    sectionTitle: '',
    ja: 'それでははじめよう',
    en: 'Shall we get started?',
    who: 'タコのすけ',
  },
  {
    pageTitle: '',
    sectionTitle: 'セクションタイトル2',
    ja: '***さんからはじめよう',
    en: 'Let’s start with Mr.***.',
    who: 'イカ二郎',
  },
  {
    pageTitle: '',
    sectionTitle: '',
    ja: '時間（じかん）がなくなってきました',
    en: 'We’re running out of time.',
    who: 'タコのすけ',
  },
  {
    pageTitle: 'ページタイトル2',
    sectionTitle: '会議（かいぎ）をはじめる',
    ja: 'ごきげんいかが？',
    en: 'Hi everyone. How’s it going?',
    who: 'イカ二郎',
  },
  {
    pageTitle: '',
    sectionTitle: 'ページタイトル2のセクション',
    ja: '週末（しゅうまつ）はどうでしたか？',
    en: 'How was your weekend?',
    who: 'タコのすけ',
  },
];

type Key = 'pageTitle' | 'sectionTitle' | 'ja' | 'en' | 'who';
const keys: Key[] = ['pageTitle', 'sectionTitle', 'ja', 'en', 'who'];

function getSheetJson(rows: SlideSource[]) {
  const pages = splitPageData(rows, keys);

  // console.log('pages', JSON.stringify(pages));

  const d = pages.map((ary) => {
    return mergeChildren(ary);
  });

  // console.log('ori after', JSON.stringify(d));

  return d;
}

// タイトルブロックを区別する
// タイトルが存在する場合配列を別にする
function splitPageData(rows: SlideSource[], keys: Key[]): SlideDir[][] {
  const ret: SlideDir[][] = [];
  let tmp: SlideDir[] = [];
  rows.forEach(function (row) {
    const obj = makeDirObj(row, keys);
    if (!obj) return;
    if (obj.title) {
      if (tmp.length > 0) ret.push(tmp);
      tmp = [];
    }
    tmp.push(obj);
  });
  if (tmp.length > 0) ret.push(tmp);
  return ret;
}

// childrenをマージする
function mergeChildren(items: SlideDir[]) {
  const ret: SlideDir = {
    title: '',
    children: [],
    sentences: [],
  };
  const children: any[] = [];
  const sentences: any[] = [];
  let tmpChildren: any[] = [];
  let tmpSentences: any[] = [];
  let currentTitle = '';
  items.forEach(function (item: SlideDir | SlideDirLang) {
    const isDir = item as SlideDir;
    const mytitle = isDir?.title;
    if (mytitle) {
      if (tmpChildren && tmpChildren.length > 0) {
        const merged = mergeChildren(tmpChildren);
        merged.title = currentTitle;
        children.push(merged);
      }
      if (tmpSentences && tmpSentences.length > 0) {
        sentences.push({
          title: currentTitle,
          children: [],
          sentences: tmpSentences,
        });
      }

      tmpChildren = [];
      tmpSentences = [];
      currentTitle = mytitle;
    }

    const mysentences = isDir?.sentences as SlideDirLang[];
    if (mysentences && mysentences.length > 0) {
      tmpSentences = tmpSentences.concat(mysentences);
    }

    const mychildren = isDir?.children as SlideDir[];
    if (mychildren && mychildren.length > 0) {
      tmpChildren = tmpChildren.concat(mychildren);
    }
  });

  if (currentTitle) {
    ret.title = currentTitle;
  }

  if (tmpSentences && tmpSentences.length > 0) {
    sentences.push({
      title: currentTitle,
      children: [],
      sentences: tmpSentences,
    });
  }
  if (sentences.length > 0) {
    ret.children = sentences;
    return ret;
  }

  if (tmpChildren && tmpChildren.length > 0) {
    const merged = mergeChildren(tmpChildren);
    merged.title = currentTitle;
    children.push(merged);
  }
  ret.children = children;

  return ret;
}

// ディレクトリにchildrenとtitleを配置したオブジェクトを生成
function makeDirObj(data: SlideSource, keys: Key[]): SlideDir | null {
  let ret: SlideDir | null = null;
  let tmp: SlideDir | null = null;

  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const str = data[key];

    if (key === 'en' || key === 'who') continue;

    if (tmp && str && key === 'ja') {
      tmp.sentences.push({
        ja: data.ja.trim().replace(/\(/g, '（').replace(/\)/g, '）'),
        en: data.en.trim(),
        who: data.who?.trim() || '',
      });
      continue;
    }
    const item: SlideDir = {
      title: str || '',
      children: [],
      sentences: [],
    };
    if (tmp && tmp.children) {
      const ary = tmp.children as SlideDir[];
      ary.push(item);
    }
    if (!ret) {
      ret = item;
    }

    tmp = item;
  }
  return ret;
}
