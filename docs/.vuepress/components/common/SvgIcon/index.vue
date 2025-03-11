<template>
  <div class="svg-icon">
    <component :is="svg"></component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import IconSwitch from './modules/Switch.vue';
import IconSelect from './modules/Select.vue';
import IconTagsInput from './modules/TagsInput.vue';
import IconSelectTree from './modules/SelectTree.vue';
import IconSelectColumn from './modules/SelectColumn.vue';
import IconTable from './modules/Table.vue';
import IconImageList from './modules/ImageList.vue';
import IconLoadList from './modules/LoadList.vue';
import IconSteps from './modules/Steps.vue';
import IconAnchor from './modules/Anchor.vue';
import IconContextmenu from './modules/Contextmenu.vue';

// @ts-ignore
@Component({
  name: 'SvgIcon',
  components: {
    IconSwitch,
    IconSelect,
    IconTagsInput,
    IconSelectTree,
    IconSelectColumn,
    IconTable,
    IconImageList,
    IconLoadList,
    IconSteps,
    IconAnchor,
    IconContextmenu,
  },
})
export default class SvgIcon extends Vue {
  // @ts-ignore
  @Prop({ type: String, required: true }) private readonly icon!: string;

  public get svg() {
    return `icon-${this.icon}`;
  }
}
</script>

<style>
.svg-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  aspect-ratio: 280 / 180;

  svg {
    width: 100%;
    height: auto;
  }
}
</style>
