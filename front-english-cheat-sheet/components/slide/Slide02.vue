<template>
  <div class="slide">
    <SlideTitle text="状況（じょうきょう）を聞（き）く・伝（つた）える" />
    <section>
      <SectionTitle text="状況（じょうきょう）を聞（き）く" />

      <Sentence
        text="今日（きょう）のあなたのチームの調子（ちょうし）はどうですか？"
      >
        How are things going at your team today?
      </Sentence>
      <Sentence text="***の進捗（しんちょく）はどうですか？">
        How is *** coming along?
      </Sentence>
      <Sentence text="プロジェクトの進捗（しんちょく）はどうですか？">
        How is the project going?
      </Sentence>
      <Sentence text="今のステータスについて聞（き）きたいです">
        Could you tell us about the current status?
      </Sentence>
      <Sentence text="スケジュールどおりですか？">
        Are we on schedule?
      </Sentence>
      <Sentence text="***についてなにか進捗（しんちょく）はありますか？">
        Do you have any update on *** ?
      </Sentence>
    </section>
    <section>
      <SectionTitle text="状況（じょうきょう）を伝（つた）える" />

      <Sentence text="とても忙（いそが）しいです">
        We are pretty busy at the moment.
      </Sentence>
      <Sentence text="うまくいっています"> Things are going well. </Sentence>

      <Sentence text="困（こま）っています">
        I am having trouble. <br />
        I am having some trouble now.
      </Sentence>
      <Sentence text="そのやり方（かた）がわかりません">
        I don’t know how to do that.
      </Sentence>
      <Sentence text="詳（くわ）しく知りたいです">
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
