<template>
  <div>
    <niuka-anchor></niuka-anchor>
    <div class="sub-title" id="test1">测试标题1</div>
    <div class="content"></div>
    <div class="sub-title" id="test2">测试标题2</div>
    <div class="content"></div>
    <div class="sub-title" id="test3">测试标题3</div>
    <div class="content"></div>
    <div class="sub-title" id="test4">测试标题4</div>
    <div class="content"></div>
    <div class="sub-title" id="test5">测试标题5</div>
    <div class="content"></div>
    <div class="sub-title" id="test6">测试标题6</div>
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import NiukaAnchor from 'component/Anchor/modules/NiukaAnchor.vue';

@Component({ name: 'NiukaAnchorView', components: { NiukaAnchor } })
export default class NiukaAnchorView extends Vue {}
</script>

<style lang="scss" scoped>
.sub-title {
  display: flex;
  margin: 30px 0 15px;
  font-size: 16px;
  line-height: 16px;
  align-items: center;
}

.sub-title::before {
  content: '';
  margin-right: 10px;
  width: 4px;
  height: 16px;
  background: #2293e6;
}

.content {
  height: 300px;
}
</style>
