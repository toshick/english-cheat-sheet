<template>
  <div class="slide">
    <h1 class="title">会議を進行させる</h1>
    <section>
      <h1>会議をはじめる</h1>
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
      <Sentence text="それでははじめよう">
        Shall we get started? <br />
      </Sentence>
    </section>
    <section>
      <h1>時間を気にする・進行させる</h1>
      <Sentence text="時間がなくなってきました">
        We’re running out of time.
      </Sentence>
      <Sentence text="これ以上時間を使えません">
        We don’t have any more time to spend on this.
      </Sentence>
      <Sentence text="よし、次の議題 *** に移りましょう">
        All right, now can we move on to *** ?
      </Sentence>
      <Sentence text="それでは次の議題 *** に移りましょう">
        Now, let’s go on to ***.
      </Sentence>
    </section>
    <section>
      <h1>確認する</h1>
      <Sentence text="他に何かありますか？"> Is there any business? </Sentence>
      <Sentence text="他に議論することはありますか？">
        Is there anything else to discuss?
      </Sentence>
      <Sentence text="明確になりましたか？">
        Is that clear to everyone?
      </Sentence>
    </section>
    <section>
      <h1>次回について</h1>
      <Sentence text="次回のミーティングの日時を決めましょうか？">
        Can we set a time for our next meeting?
      </Sentence>
      <Sentence text="次の日付については来週までに確認します">
        I’d like to confirm the next time by next week.
      </Sentence>
    </section>

    <section>
      <h1>会議を終わる</h1>
      <Sentence text="全部議論できたと思います">
        I think we’ve discussed everything.
      </Sentence>
      <Sentence text="意見が一致したようですね">
        It seems that we have a consensus.
      </Sentence>
      <Sentence text="*** ということが決まりました">
        All right, we have decided to ***.
      </Sentence>
      <Sentence text="終わる前に、要約します">
        Before we close, I would like to summarize the main points.
      </Sentence>
      <Sentence text="最後の質問はありますか？">
        Do you have any final questions?
      </Sentence>
      <Sentence text="以上です"> that's it </Sentence>
      <Sentence text="本日の会議は以上です。ありがとうございました。">
        That’s all for today. Thank you.
      </Sentence>
      <Sentence text="今日は皆さんに会えて嬉しかったです。">
        It was a pleasure to see you all today.
      </Sentence>
    </section>
    <!-- WordList -->
    <WordList>
      <Word text="minute">議事録</Word>
      <Word text="minute">議事録</Word>
      <Word text="minute">議事録</Word>
      <Word text="minute">議事録</Word>
      <Word text="minute">議事録</Word>
      <Word text="minute">議事録</Word>
    </WordList>
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
