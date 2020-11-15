/* eslint import/no-mutable-exports: 0 */

import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import AppClass from '~/store/app';

let appStore: AppClass;

/**
 * initialiseStores
 */
function initialiseStores(store: Store<any>): void {
  appStore = getModule(AppClass, store);
}

export { initialiseStores, appStore };
