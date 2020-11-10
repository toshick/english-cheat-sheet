<template>
  <div class="slide">
    <h1 class="title">回答する</h1>
    <section>
      <h1>反応する</h1>
      <Sentence text="いい質問ですね、難しい質問ですね、面白い質問ですね">
        That’s a very good question.<br />
        That’s a very difficult question.<br />
        That’s a very interesting question.
      </Sentence>
      <Sentence text="重要なポイントをご指摘いただきました">
        You have raised an important point there.
      </Sentence>
    </section>
    <section>
      <h1>回答できないとき</h1>
      <Sentence text="今回答することは難しいです">
        it’s rather difficult to say at present.
      </Sentence>
      <Sentence text="回答するための十分な情報がありません">
        I’m afraid I don’t have enough information to answer your question at
        the moment.
      </Sentence>
      <Sentence text="すみませんが、言っていることの意味がよく理解できません。">
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
