<template>
  <div>
    <p>card</p>
    <niuka-image-card
      :info="info"
      :operation="['preview', 'edit', 'delete']"
      @edit="handleEdit"
      @delete="handleDelete"
    ></niuka-image-card>
    <p>panel</p>
    <niuka-image-panel
      :info="info"
      :operation="['preview', 'edit', 'delete']"
      @edit="handleEdit"
      @delete="handleDelete"
    ></niuka-image-panel>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NiukaImageCard from 'component/Image/card';
import NiukaImagePanel from 'component/Image/panel';
import NiukaImage from 'component/Image';
import { Message } from 'element-ui';

@Component({
  name: 'NiukaImageView',
  components: { NiukaImageCard, NiukaImagePanel, NiukaImage },
})
export default class NiukaImageView extends Vue {
  public info = {
    url: 'https://www.baidu.com/img/flexible/logo/pc/index.png',
    title: '百度logo',
  };

  public handleEdit() {
    Message.success('点击了编辑');
  }

  public handleDelete() {
    Message.info('点击了删除');
  }
}
</script>

<style lang="scss" scoped></style>
