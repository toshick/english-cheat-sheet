<template>
  <article :class="myClass">
    <div class="sentence-body">
      <p class="sentence-who">{{ talker }}</p>
      <div class="sentence-text">
        <h1 v-html="mytext" />
        <div class="sentence-des">
          <!-- slot -->
          <p v-html="entext" />
        </div>
      </div>
    </div>
  </article>
</template>
<!------------------------------->

<!------------------------------->
<script lang="ts">
import Vue, { PropType } from 'vue';
import { SlideDirLang } from '@/types/app';

export default Vue.extend({
  name: 'Sentence',
  props: {
    textdata: {
      default: () => {},
      type: Object as PropType<SlideDirLang>,
    },
    right: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    myClass(): any {
      const ret: any = { sentence: true };
      if (this.right) {
        ret['-right'] = true;
      }
      return ret;
    },
    mytext(): string {
      if (!this.textdata) return '';
      return this.textdata.ja.replace(
        /(（.+?）)/g,
        '<span class="furigana">$1</span>',
      );
    },
    entext(): string {
      if (!this.textdata) return '';
      return this.textdata.en.replace(/[\n]/g, '<br />');
    },
    talker(): string {
      if (!this.textdata) return '';
      return this.textdata.who || 'Anonymous';
    },
    initial(): string {
      if (!this.textdata) return '';
      return this.textdata.who.slice(0, 1);
    },
  },
});
</script>
<!------------------------------->

<!------------------------------->
<style scoped lang="scss">
@import '~/assets/css/_for-component';
@import '~/assets/css/_mixins.scss';
.sentence {
  display: flex;
  align-items: flex-end;
  font-size: 14px;
  padding-bottom: 10px;
  &.-right {
    justify-content: flex-end;
    .sentence-text {
      &::after {
        @include fukidashiRight(#eee);
      }
    }
    .sentence-who {
      text-align: right;
    }
  }
}

.sentence-body {
  max-width: 90%;
}
.sentence-icon {
  position: relative;
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
  p {
    @include center;
  }
}

.sentence-text {
  position: relative;
  background-color: #eee;
  border-radius: 8px;
  padding: 10px 20px;
  &::after {
    @include fukidashiLeft(#eee);
  }
}
.sentence-who {
  font-size: 10px;
  margin-bottom: 5px;
}
h1 {
  display: inline-block;
  // background-color: #ece3c1;
  border-radius: 3px;
  padding: 4px 0px;
  margin-bottom: 0.5em;
  font-size: 10px;
  color: #666;
}
</style>
