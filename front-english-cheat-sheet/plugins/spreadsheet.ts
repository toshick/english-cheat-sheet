import { getNestedJson, SpreadSheetSource } from 'spread-sheet-to-nested-json';
import { appStore } from '@/store';

export default function ({ $config }: { $config: any }) {
  let sheetJson: any = null;

  if ($config.sheetJsonStr) {
    const sheetJsonStr = decodeURIComponent(
      JSON.stringify($config.sheetJsonStr),
    ).replace(/\n/g, '\\n');
    sheetJson = JSON.parse(sheetJsonStr);
  } else if (process.env.NODE_ENV === 'development') {
    sheetJson = pagedata;
  }

  // GASによる加工なしの場合jsで加工する
  if (Array.isArray(sheetJson) && sheetJson[0].pageblock) {
    // sheetJson = getNestedJson(sheetJson, (str: string) => {
    //   return str.trim().replace(/\(/g, '（').replace(/\)/g, '）');
    // });

    sheetJson = getNestedJson({
      rows: sheetJson,
      onStore: (str: string) => {
        return str.trim().replace(/\(/g, '（').replace(/\)/g, '）');
      },
    });
  }

  console.log('sheetJson', sheetJson[1].length, JSON.stringify(sheetJson[1]));

  if (sheetJson) {
    appStore.SET_PAGEJSON(sheetJson);
  }
}

const pagedata: SpreadSheetSource[] = [
  {
    pageblock: '会話してみる',
    sectionblock: '会議（かいぎ）をはじめる',
    ja:
      'チーム内(ない)のコミュニケーション不足(ぶそく)が、問題(もんだい)になっています。',
    en: 'The lack of communication among team members is becoming a problem.',
    who: '',
  },
  {
    pageblock: '',
    sectionblock: '',
    ja:
      'ちょっと不具合(ふぐあい)があるので、今日中(きょうじゅう)に直(なお)します。',
    en: "There are some defects, so I'll fix it by the end of the day.",
    who: '',
  },
  {
    pageblock: '',
    sectionblock: '',
    ja: '週末（しゅうまつ）はどうでしたか？2',
    en: 'How was your weekend?',
    who: 'タコのすけ',
  },
  {
    pageblock: '',
    sectionblock: 'セクションタイトル',
    ja: '今日（きょう）は寒（さむ）いよね',
    en: 'It’s cold today, isn’t it?',
    who: 'イカ二郎',
  },
  {
    pageblock: '',
    sectionblock: '',
    ja: 'それでははじめよう',
    en: 'Shall we get started?',
    who: 'タコのすけ',
  },
  {
    pageblock: '',
    sectionblock: 'セクションタイトル2',
    ja: '***さんからはじめよう',
    en: 'Let’s start with Mr.***.',
    who: 'イカ二郎',
  },
  {
    pageblock: '',
    sectionblock: '',
    ja: '時間（じかん）がなくなってきました',
    en: 'We’re running out of time.',
    who: 'タコのすけ',
  },
  {
    pageblock: '会議を進行させる',
    sectionblock: '会議（かいぎ）をはじめる',
    ja: 'ごきげんいかが？',
    en: 'Hi everyone. How’s it going?',
    who: 'イカ二郎',
  },
  {
    pageblock: '',
    sectionblock: 'ページタイトル2のセクション',
    ja: '週末（しゅうまつ）はどうでしたか？',
    en: 'How was your weekend?',
    who: 'タコのすけ',
  },
  {
    pageblock: 'ページタイトル3ページタイトルページタイトル',
    sectionblock: '会議（かいぎ）をはじめる',
    ja: 'ごきげんいかが？',
    en: 'Hi everyone. How’s it going?',
    who: 'イカ二郎',
  },
  {
    pageblock: '',
    sectionblock: 'ページタイトル2のセクション',
    ja: '週末（しゅうまつ）はどうでしたか？',
    en: 'How was your weekend?',
    who: 'タコのすけ',
  },
  {
    pageblock: 'ページタイトル4ページタイトルページタイトル',
    sectionblock: '会議（かいぎ）をはじめる',
    ja: 'ごきげんいかが？',
    en: 'Hi everyone. How’s it going?',
    who: 'イカ二郎',
  },
  {
    pageblock: '',
    sectionblock: 'ページタイトル2のセクション',
    ja: '週末（しゅうまつ）はどうでしたか？',
    en: 'How was your weekend?',
    who: 'タコのすけ',
  },
  {
    pageblock: 'ページタイトル5',
    sectionblock: '会議（かいぎ）をはじめる',
    ja: 'ごきげんいかが？',
    en: 'Hi everyone. How’s it going?',
    who: 'イカ二郎',
  },
  {
    pageblock: '',
    sectionblock: 'ページタイトル2のセクション',
    ja: '週末（しゅうまつ）はどうでしたか？',
    en: 'How was your weekend?',
    who: 'タコのすけ',
  },
];
