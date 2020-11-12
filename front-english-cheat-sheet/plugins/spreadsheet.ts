import Vue from 'vue';

export default function ({ $config }: { $config: any }) {
  console.log('$configです', $config);
  const sheetJsonStr = decodeURIComponent(JSON.stringify($config));
  const sheetJson = JSON.parse(sheetJsonStr);
  Vue.prototype.$sheetJson = sheetJson;
}
