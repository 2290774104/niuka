<template>
  <div>
    <niuka-tags-input v-model="value"></niuka-tags-input>
    <niuka-tags-input v-model="value" no-input></niuka-tags-input>
    <niuka-tags-input v-model="value" check-number></niuka-tags-input>
    <niuka-tags-input v-model="value2" check-number></niuka-tags-input>
    <niuka-tags-input ref="tags1" v-model="value3"></niuka-tags-input>
    <niuka-tags-input ref="tags2" v-model="value4" disabled></niuka-tags-input>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import NiukaTagsInput from 'component/TagsInput';

@Component({ name: 'NiukaTagsInputView', components: { NiukaTagsInput } })
export default class NiukaTagsInputView extends Vue {
  public value = '';

  public value2 = '1 2 3';

  public value3 = '';

  public value4 = '';

  created() {
    this.$nextTick(() => {
      (this.$refs.tags1 as NiukaTagsInput).addTags(['ab', 'c']);
      (this.$refs.tags2 as NiukaTagsInput).addTags('1 2 hhh');
    });
  }
}
</script>

<style lang="scss" scoped></style>
