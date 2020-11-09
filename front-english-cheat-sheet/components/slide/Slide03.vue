<template>
  <div class="slide">
    <h1 class="title">意見を伝える</h1>
    <section>
      <h1>賛成・反対</h1>
      <Sentence text="全くもってあなたの言う通りだと思います">
        I totally/completely agree with you.<br />
      </Sentence>
      <Sentence text="あなたの言う通りだと思います">
        I think you are right.<br />
      </Sentence>
      <Sentence text="賛成です"> I agree with you.<br /> </Sentence>
      <Sentence text="その提案には反対です">
        I’m opposed to the proposal.<br />
      </Sentence>
      <Sentence text="その提案には賛成しかねます">
        I’m afraid I can’t support the proposal.<br />
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
    </section>
    <section>
      <h1>割り込む</h1>
      <Sentence text="ちょっといいですか？">
        May I interrupt you for a moment?
      </Sentence>
      <Sentence text="割り込みすみませんが、">
        Sorry to interrupt, but…
      </Sentence>
      <Sentence text="ちょっとよろしいかな">
        If I could just interrupt you there.
      </Sentence>
    </section>
    <section>
      <h1>最後まで言わせてください</h1>
      <Sentence text="最後まで言わせてください">
        If I could just finish.
      </Sentence>
      <Sentence text="まだ終わってません"> I haven’t finished yet. </Sentence>
      <Sentence text="彼が終わってからお願いします">
        Just a moment, I’ll come back to you when he has finished.
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
