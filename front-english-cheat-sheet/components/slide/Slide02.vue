<template>
  <div class="slide">
    <h1 class="title">状況を聞く・伝える</h1>
    <section>
      <h1>状況を聞く</h1>
      <Sentence text="ごきげんいかが？">
        Hi everyone. How’s it going?
      </Sentence>
      <Sentence text="今日のあなたのチームの調子はどうだい？">
        How are things going at your team today?
      </Sentence>
      <Sentence text="週末はどうでしたか？"> How was your weekend? </Sentence>
      <Sentence text="今日は寒くないかね？">
        It’s cold today, isn’t it?
      </Sentence>
    </section>
    <section>
      <h1>状況を伝える</h1>
      <Sentence text="とても忙しいです">
        We are pretty busy at the moment.
      </Sentence>
      <Sentence text="うまくいっています"> Things are going well. </Sentence>

      <Sentence text="困っています">
        I am having trouble. <br />
        I am having some trouble now.
      </Sentence>
      <Sentence text="そのやり方がわかりません">
        I don’t know how to do that.
      </Sentence>
      <Sentence text="詳しく知りたいです">
        I'd like to know the details.
      </Sentence>
    </section>
    <!-- Footer -->
    <Footer />
  </div>
</template>
<!------------------------------->

<!------------------------------->
<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'Slide',
  props: {},
});
</script>
<!------------------------------->

<!------------------------------->
<style scoped lang="scss">
@import '~/assets/css/_for-component';

section {
  padding: 20px 20px 0;
  h1 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 1em;
  }
}
.title {
  font-size: 18px;
  font-weight: bold;
  padding: 20px 20px 0;
  margin: 0;
}
</style>
