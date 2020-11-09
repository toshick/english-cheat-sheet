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
            label="会議を進行させる"
            @click="$emit('select', 'control')"
            :active="isActive1"
          ></b-menu-item>
          <b-menu-item
            label="状況を聞く・伝える"
            @click="$emit('select', 'hearing')"
            :active="isActive2"
          ></b-menu-item>
          <b-menu-item
            label="意見を伝える"
            @click="$emit('select', 'opinion')"
            :active="isActive3"
          ></b-menu-item>
          <b-menu-item
            label="質問する"
            @click="$emit('select', 'ask')"
            :active="isActive4"
          ></b-menu-item>
          <b-menu-item
            label="回答する"
            @click="$emit('select', 'answer')"
            :active="isActive5"
          ></b-menu-item>
          <!-- <b-menu-item label="感謝する"></b-menu-item> -->
          <!-- <b-menu-item label="謝る"></b-menu-item> -->
        </b-menu-list>
      </b-menu>
    </div>
  </b-sidebar>
</template>
<!------------------------------->

<!------------------------------->
<script lang="ts">
import Vue from 'vue';
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
    isActive1(): boolean {
      return this.index === 0;
    },
    isActive2(): boolean {
      return this.index === 1;
    },
    isActive3(): boolean {
      return this.index === 2;
    },
    isActive4(): boolean {
      return this.index === 3;
    },
    isActive5(): boolean {
      return this.index === 4;
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
