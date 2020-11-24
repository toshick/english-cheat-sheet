export type SlideSource = {
  pageTitle: string;
  sectionTitle: string;
  ja: string;
  en: string;
  who: string;
};

export type SlideDirLang = {
  ja: string;
  en: string;
  who: string;
};

export type SlideDir = {
  title: string;
  children: SlideDir[];
  sentences: SlideDirLang[];
};

export type Lang = 'ja' | 'en';
