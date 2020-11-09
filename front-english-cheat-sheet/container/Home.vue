<template>
  <ViewHome />
</template>
<!------------------------------->

<!------------------------------->
<script lang="ts">
import Vue from 'vue';
import ViewHome from '@/components/view/ViewHome.vue';
export default Vue.extend({
  name: 'Home',
  components: { ViewHome },
  props: {},
});
</script>
