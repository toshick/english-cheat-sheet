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
  if (Array.isArray(sheetJson) && sheetJson[0].pageTitle) {
    sheetJson = getNestedJson({
      rows: sheetJson,
      rowKey: 'Title',
      onStore: (_key: string, str: string) => {
        return str.trim().replace(/\(/g, '（').replace(/\)/g, '）');
      },
    });
  }

  if (sheetJson) {
    appStore.SET_PAGEJSON(sheetJson);
  }
}

const pagedata: SpreadSheetSource[] = [
  {
    pageTitle: '会話してみる',
    sectionTitle: '会議（かいぎ）をはじめる',
    ja:
      'チーム内(ない)のコミュニケーション不足(ぶそく)が、問題(もんだい)になっています。',
    en: 'The lack of communication among team members is becoming a problem.',
    who: 'にゃんごろう',
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
    pageTitle: '会議を進行させる',
    sectionTitle: '会議（かいぎ）をはじめる',
    ja: 'ごきげんいかが？',
    en: 'Hi everyone. How’s it going?',
    who: '',
  },
  {
    pageTitle: '',
    sectionTitle: 'ページタイトル2のセクション',
    ja: '週末（しゅうまつ）はどうでしたか？',
    en: 'How was your weekend?',
    who: 'タコのすけ',
  },
  {
    pageTitle: 'ページタイトル3ページタイトルページタイトル',
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
  {
    pageTitle: 'ページタイトル4ページタイトルページタイトル',
    sectionTitle: '会議（かいぎ）をはじめる',
    ja: 'ごきげんいかが？',
    en: 'Hi everyone. How’s it going?',
    who: '',
  },
  {
    pageTitle: '',
    sectionTitle: 'ページタイトル2のセクション',
    ja: '週末（しゅうまつ）はどうでしたか？',
    en: 'How was your weekend?',
    who: 'タコのすけ',
  },
  {
    pageTitle: 'ページタイトル5',
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
