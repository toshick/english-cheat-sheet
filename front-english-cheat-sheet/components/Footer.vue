<template>
  <footer>
    <section>
      <div>
        <p class="wf">Custom makes all things easy</p>
      </div>
    </section>
  </footer>
</template>
<!------------------------------->

<!------------------------------->
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Footer',
  props: {},
});
</script>
<!------------------------------->

<!------------------------------->
<style scoped lang="scss">
@import '~/assets/css/_for-component';

footer {
  overflow: hidden;
  width: 100vw;

  section {
    position: relative;
    background-color: $app-color-dark;
    height: 100px;

    $h: 20px;
    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: -$h * 2;
      z-index: 1;
      border-top: $h solid transparent; /* 透明 */
      border-left: 100vw solid transparent; /* 透明 */
      border-right: 100vw solid $app-color-dark; /* 色 */
      border-bottom: $h solid $app-color-dark; /* 色 */
    }
    & > div {
      margin: 30px 20px 0;
    }
  }
  p {
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    text-align: center;
    color: #555;
  }
}
</style>