import Vue from 'vue';
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators';
import { SlideData, Lang } from '@/types/app';

@Module({ name: 'app', stateFactory: true, namespaced: true })
export default class MyClass extends VuexModule {
  slidedata: SlideData = [];
  lang: Lang = 'ja';

  // ----------------------
  // Mutation
  // ----------------------
  @Mutation
  SET_PAGEJSON(data: SlideData) {
    this.slidedata = data;
  }

  @Mutation
  SET_LANG(lang: Lang) {
    this.lang = lang;
  }

  // @Action
  // Register(data: { name: string; mail: string }): Promise<ActionRes> {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       console.log('とうろく', data);
  //       resolve(<ActionRes>{});
  //     }, 1200);
  //   });
  // }

  // ----------------------
  // get
  // ----------------------
  // get logined(): boolean {
  //   return checkAuth();
  // }
}
