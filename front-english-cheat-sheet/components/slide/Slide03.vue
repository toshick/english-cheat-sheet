<template>
  <div class="slide">
    <SlideTitle text="意見（いけん）を伝（つた）える" />
    <section>
      <SectionTitle text="割（わ）り込（こ）む" />

      <Sentence text="ちょっといいですか？">
        May I interrupt you for a moment?
      </Sentence>
      <Sentence text="割（わ）り込（こ）みすみませんが、">
        Sorry to interrupt, but…
      </Sentence>
      <Sentence text="ちょっとよろしいかな">
        If I could just interrupt you there.
      </Sentence>
    </section>
    <section>
      <SectionTitle text="賛成（さんせい）" />

      <Sentence
        text="全（まった）くもってあなたの言（い）う通（とお）りだと思（おも）います"
      >
        I totally/completely agree with you.<br />
      </Sentence>
      <Sentence text="あなたの言（い）う通（とお）りだと思（おも）います">
        I think you are right.<br />
      </Sentence>
      <Sentence text="賛成（さんせい）です"> I agree with you.<br /> </Sentence>
    </section>
    <section>
      <SectionTitle text="反対（はんたい）" />

      <Sentence text="その提案（ていあん）には反対（はんたい）です">
        I’m opposed to the proposal.<br />
      </Sentence>
      <Sentence text="その提案（ていあん）には賛成（さんせい）しかねます">
        I’m afraid I can’t support the proposal.<br />
      </Sentence>
      <Sentence text="それは多分（たぶん）違（ちが）うと思（おも）います">
        I think it is probably wrong.<br />
        Probably not.
      </Sentence>
      <Sentence text="あなたは勘違（かんちが）いしている気がします">
        I'm afraid you're mistaken.
      </Sentence>
      <Sentence text="それが起（お）きる可能性（かのうせい）はあまりないです">
        That's unlikely going to happen.
      </Sentence>
    </section>

    <section>
      <SectionTitle text="最後（さいご）まで言（い）わせてください" />

      <Sentence text="最後（さいご）まで言（い）わせてください">
        If I could just finish.
      </Sentence>
      <Sentence text="まだ終（お）わってません">
        I haven’t finished yet.
      </Sentence>
      <Sentence text="彼（かれ）が終（お）わってからお願（ねが）いします">
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
