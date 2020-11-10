<template>
  <div class="slide">
    <SlideTitle text="質問（しつもん）する" />
    <section>
      <SectionTitle text="聞（き）き取（と）れなかったとき" />

      <Sentence text="どういう意味（いみ）かわかりません">
        I’m afraid I don’t understand what you mean.
      </Sentence>
      <Sentence text="もう一度（いちど）お願（ねが）いします">
        Could you go over that again, please?
      </Sentence>
      <Sentence text="もう一度（いちど）お願（ねが）いします">
        Say that again, please?
      </Sentence>
      <Sentence text="もう少（すこ）しゆっくり話（はな）してみてください">
        Can you speak more slowly, please?
      </Sentence>
    </section>
    <section>
      <SectionTitle text="より詳（くわ）しく" />

      <Sentence
        text="***についてもう少（すこ）し詳（くわ）しく説明（せつめい）してください"
      >
        Could you explain more about *** ?
      </Sentence>
      <Sentence text="***という意味（いみ）でしょうか？">
        Are you saying that *** ?
      </Sentence>
      <Sentence
        text="自分（じぶん）が理解（りかい）しているか確認（かくにん）したいのですが、***という意味（いみ）でしょうか？"
      >
        If I’ve understood you correctly, you’re saying that *** ?
      </Sentence>
      <Sentence
        text="***とは正確（せいかく）にはどういう意味（いみ）でしょうか？"
      >
        What exactly do you mean by *** ?
      </Sentence>
    </section>
    <section>
      <SectionTitle text="お願（ねが）いする" />

      <Sentence text="***について教（おし）えてもらえますか？">
        Could you tell me *** ?
      </Sentence>
      <Sentence text="***について説明（せつめい）いただけますか？">
        Would you mind explaining *** ?
      </Sentence>
      <Sentence text="一点（いってん）だけ確認（かくにん）してもいいですか？">
        Can I check just one thing?
      </Sentence>
      <Sentence
        text="***するやり方（かた）をもう少（すこ）し具体的（ぐたいてき）に説明（せつめい）してもらえますか？"
      >
        Could you be more specific about how to *** ?
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
