<template>
  <b-sidebar
    type="is-light"
    :fullheight="true"
    :fullwidth="false"
    :overlay="false"
    :open="open"
    @close="$emit('close')"
  >
    <div class="sidemenu">
      <b-menu>
        <b-menu-list label="Menu">
          <b-menu-item
            v-for="(p, myindex) in slidedata"
            :key="`${myindex}-${p.title}`"
            :label="p.title"
            :active="myindex === index"
            @click="$emit('select', myindex)"
          ></b-menu-item>
        </b-menu-list>
      </b-menu>
    </div>
  </b-sidebar>
</template>
<!------------------------------->

<!------------------------------->
<script lang="ts">
import Vue from 'vue';
import { SlideDir } from '@/types/app';
import { appStore } from '@/store';

export default Vue.extend({
  name: 'SideMenu',
  props: {
    open: {
      default: false,
      type: Boolean,
    },
    index: {
      default: 0,
      type: Number,
    },
    lang: {
      default: '',
      type: String,
    },
  },
  computed: {
    slidedata(): SlideDir[] {
      console.log('appStore.slidedata', appStore.slidedata.length);
      return [];
      // return appStore.slidedata.map((d) => {
      //   const data = { ...d };
      //   if (data.title && this.lang === 'ja') {
      //     data.title = data.title.replace(/(（.+?）)/g, '');
      //   }
      //   return data;
      // });
    },
  },
});
</script>
<!------------------------------->

<!------------------------------->
<style scoped lang="scss">
@import '~/assets/css/_for-component';

.sidemenu {
  padding: 20px;
}
</style>
