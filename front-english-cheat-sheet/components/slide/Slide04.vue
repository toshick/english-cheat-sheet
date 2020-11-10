<template>
  <div class="slide">
    <h1 class="title">質問する</h1>
    <section>
      <h1>聞き取れなかったとき</h1>
      <Sentence text="どういう意味かわかりません">
        I’m afraid I don’t understand what you mean.
      </Sentence>
      <Sentence text="もう一度お願いします">
        Could you go over that again, please?
      </Sentence>
      <Sentence text="もう一度お願いします"> Say that again, please? </Sentence>
      <Sentence text="もう少しゆっくり話してみてください">
        Can you speak more slowly, please?
      </Sentence>
    </section>
    <section>
      <h1>より詳しく</h1>
      <Sentence text="***についてもう少し詳しく説明してください">
        Could you explain more about *** ?
      </Sentence>
      <Sentence text="***という意味でしょうか？">
        Are you saying that *** ?
      </Sentence>
      <Sentence
        text="自分が理解しているか確認したいのですが、***という意味でしょうか？"
      >
        If I’ve understood you correctly, you’re saying that *** ?
      </Sentence>
      <Sentence text="***とは正確にはどういう意味でしょうか？">
        What exactly do you mean by *** ?
      </Sentence>
    </section>
    <section>
      <h1>お願いする</h1>
      <Sentence text="***について教えてもらえますか？">
        Could you tell me *** ?
      </Sentence>
      <Sentence text="***について説明いただけますか？">
        Would you mind explaining *** ?
      </Sentence>
      <Sentence text="一点だけ確認してもいいですか？">
        Can I check just one thing?
      </Sentence>
      <Sentence text="***するやり方をもう少し具体的に説明してもらえますか？">
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
