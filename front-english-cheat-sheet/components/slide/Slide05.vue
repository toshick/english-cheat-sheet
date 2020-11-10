<template>
  <div class="slide">
    <SlideTitle text="回答（回答）する" />
    <section>
      <SectionTitle text="反応（はんのう）する" />

      <Sentence
        text="いい質問（しつもん）ですね、難（むずか）しい質問（しつもん）ですね、面白（おもしろ）い質問（しつもん）ですね"
      >
        That’s a very good question.<br />
        That’s a very difficult question.<br />
        That’s a very interesting question.
      </Sentence>
      <Sentence
        text="重要（じゅうよう）なポイントをご指摘（してき）いただきました"
      >
        You have raised an important point there.
      </Sentence>
    </section>
    <section>
      <SectionTitle text="回答（かいとう）できないとき" />

      <Sentence text="今（いま）回答（かいとう）することは難（むずか）しいです">
        it’s rather difficult to say at present.
      </Sentence>
      <Sentence
        text="回答（かいとう）するための十分（じゅうぶん）な情報（じょうほう）がありません"
      >
        I’m afraid I don’t have enough information to answer your question at
        the moment.
      </Sentence>
      <Sentence
        text="すみませんが、言（い）っていることの意味（いみ）がよく理解（りかい）できません。"
      >
        I’m afraid I’m not quite sure what you mean by that.
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
