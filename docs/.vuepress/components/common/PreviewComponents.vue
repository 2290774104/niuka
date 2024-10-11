<template>
  <div class="example">
    <div class="example-showcase">
      <slot name="component"></slot>
    </div>
    <el-divider></el-divider>
    <div class="op-btns">
      <el-tooltip
        class="box-item"
        content="复制代码"
        effect="dark"
        placement="bottom"
      >
        <i
          class="el-icon el-icon-document-copy"
          style="font-size: 16px"
          @click="handleCopy"
        ></i>
      </el-tooltip>
      <el-tooltip
        class="box-item"
        :content="expandedTooltip"
        effect="dark"
        placement="bottom"
      >
        <i
          class="el-icon el-icon-full-screen"
          style="font-size: 16px"
          @click="handleExpanded"
        ></i>
      </el-tooltip>
    </div>
    <el-collapse-transition>
      <div class="example-source-wrapper" v-show="isExpanded" ref="code">
        <slot />
      </div>
    </el-collapse-transition>
    <transition name="el-fade-in">
      <div
        class="example-float-control"
        v-show="isExpanded"
        @click="handleHidden"
      >
        <i class="el-icon-caret-top"> </i>
        <span>隐藏源代码</span>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { copyText } from '../../utils';
import { Component } from 'vue-property-decorator';
// @ts-ignore
@Component({ name: 'PreviewComponents' })
export default class PreviewComponents extends Vue {
  public isExpanded = false;

  public get expandedTooltip(): string {
    return this.isExpanded ? '隐藏源代码' : '查看源代码';
  }

  public handleCopy() {
    const text = (this.$refs.code as HTMLElement).innerText;
    copyText(text);
  }

  public handleExpanded() {
    this.isExpanded = !this.isExpanded;
  }

  public handleHidden() {
    this.isExpanded = false;
  }
}
</script>

<style lang="scss" scoped>
.example {
  border: 1px solid #eaecef;
  border-radius: 4px;

  .el-divider {
    margin: 0;
  }

  .op-btns {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 24px;
    padding: 8px;

    .el-icon {
      margin: 0 8px;
      cursor: pointer;
      color: #909399;

      &:hover {
        color: #409eff;
      }
    }
  }
}

.example-showcase {
  padding: 24px;
  background: #fff;
}

.example-source-wrapper {
  margin: -15px 0;
  min-height: 30px;
}

.example-float-control {
  position: sticky;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #eaecef;
  height: 44px;
  background-color: #fff;
  font-size: 14px;
  color: #909399;
  cursor: pointer;

  &:hover {
    color: #409eff;
  }

  span {
    margin-left: 10px;
  }
}
</style>
