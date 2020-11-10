<template>
  <div class="slide">
    <SlideTitle text="会議（かいぎ）を進行（しんこう）させる" />
    <section>
      <SectionTitle text="会議（かいぎ）をはじめる" />

      <Sentence text="ごきげんいかが？">
        Hi everyone. How’s it going?
      </Sentence>
      <Sentence text="週末（しゅうまつ）はどうでしたか？">
        How was your weekend?
      </Sentence>
      <Sentence text="今日（きょう）は寒（さむ）いよね">
        It’s cold today, isn’t it?
      </Sentence>
      <Sentence text="それでははじめよう">
        Shall we get started? <br />
      </Sentence>
      <Sentence text="***さんからはじめよう">
        Let’s start with Mr.***.
      </Sentence>
    </section>
    <section>
      <SectionTitle
        text="時間（じかん）を気（き）にする・進行（しんこう）させる"
      />

      <Sentence text="時間（じかん）がなくなってきました">
        We’re running out of time.
      </Sentence>
      <Sentence text="これ以上（いじょう）時間（じかん）を使えません">
        We don’t have any more time to spend on this.
      </Sentence>
      <Sentence text="何（なに）かコメントありますか？">
        Do you have any comments?
      </Sentence>
      <Sentence
        text="よし、次（つぎ）の議題（ぎだい） *** に移（うつ）りましょう"
      >
        All right, now can we move on to *** ?
      </Sentence>
      <Sentence
        text="それでは次（つぎ）の議題（ぎだい） *** に移（うつ）りましょう"
      >
        Now, let’s go on to ***.<br />
      </Sentence>
      <Sentence text="それでは次（つぎ）の議題（ぎだい）に移（うつ）りましょう">
        Let’s move on to the next topic.
      </Sentence>
    </section>
    <section>
      <SectionTitle text="確認（かくにん）する" />

      <Sentence text="他（ほか）に何（なに）かありますか？">
        Is there any business?
      </Sentence>
      <Sentence text="他（ほか）に議論（ぎろん）することはありますか？">
        Is there anything else to discuss?
      </Sentence>
      <Sentence text="明確（めいかく）になりましたか？">
        Is that clear to everyone?
      </Sentence>
      <Sentence text="何（なに）か忘（わす）れていたら教（おし）えてください">
        If I have something forgetting, please let me know.
      </Sentence>
      <Sentence
        text="どのチケットを誰（だれ）にアサインするか明確（めいかく）にしよう"
      >
        We should clarify which ticket to be assigned to whom
      </Sentence>
    </section>
    <section>
      <SectionTitle text="次回（じかい）について" />

      <Sentence
        text="次回（じかい）のミーティングの日時（にちじ）を決（き）めましょうか？"
      >
        Can we set a time for our next meeting?
      </Sentence>
      <Sentence
        text="次（つぎ）の日付（日付）については来週（らいしゅう）までに確認（かくにん）します"
      >
        I’d like to confirm the next time by next week.
      </Sentence>
    </section>

    <section>
      <SectionTitle text="会議（かいぎ）を終（お）わる" />

      <Sentence text="全部（ぜんぶ）議論（ぎろん）できたと思います">
        I think we’ve discussed everything.
      </Sentence>
      <Sentence text="意見（いけん）が一致（いっち）したようですね">
        It seems that we have a consensus.
      </Sentence>
      <Sentence text="*** ということが決（き）まりました">
        All right, we have decided to ***.
      </Sentence>
      <Sentence text="終（お）わる前（まえ）に、要約（ようやく）します">
        Before we close, I would like to summarize the main points.
      </Sentence>
      <Sentence text="最後（さいご）の質問（しつもん）はありますか？">
        Do you have any final questions?
      </Sentence>
      <Sentence text="以上（いじょう）です"> that's it </Sentence>
      <Sentence
        text="本日（ほんじつ）の会議（かいぎ）は以上（いじょう）です。ありがとうございました。"
      >
        That’s all for today. Thank you.<br />
        That’s it for today. Thank you for attending
      </Sentence>
      <Sentence
        text="今日（きょう）は皆（みな）さんに会（あ）えて嬉（うれ）しかったです。"
      >
        It was a pleasure to see you all today.
      </Sentence>
      <Sentence
        text="今日（きょう）は参加（さんか）してくれありがとう[プレゼンなどの時（とき）]"
      >
        Thank you for joining us today.
      </Sentence>
    </section>
    <!-- WordList -->
    <WordList>
      <Word text="minute">議事録</Word>
      <Word text="summarize">要約する</Word>
      <Word text="consensus">意見の一致</Word>
      <Word text="discuss">話し合う</Word>
      <Word text="decide">決定する</Word>
      <Word text="spend">費やす</Word>
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
}
</style>
