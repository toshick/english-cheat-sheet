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
            :key="`${p.title}`"
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
import { SlideData } from '@/types/app';
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
  },
  computed: {
    slidedata(): SlideData {
      return appStore.slidedata;
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
