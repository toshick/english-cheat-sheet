export type SlideDirLang = {
  ja?: string;
  en?: string;
};

export type SlideDir = {
  title?: string;
  children?: SlideDir[] | SlideDirLang[];
};

export type SlideData = SlideDir[];

export type Lang = 'ja' | 'en';
