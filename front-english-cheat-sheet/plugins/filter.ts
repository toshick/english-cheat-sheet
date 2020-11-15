import Vue from 'vue';

Vue.filter('br', function (value: string) {
  return value.replace(/[\n]/g, '<br />');
});
