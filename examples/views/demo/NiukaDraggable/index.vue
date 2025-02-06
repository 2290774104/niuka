<template>
  <div>
    <el-row>
      <el-col :span="12">
        <niuka-draggable v-model="list">
          <div
            class="item"
            v-for="(item, index) in list"
            :key="index"
            @click="test"
          >
            {{ item.title }}
          </div>
        </niuka-draggable>
      </el-col>
      <el-col :span="12">
        <pre>{{ list }}</pre>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <niuka-draggable v-model="list2">
          <div
            class="item"
            v-for="(item, index) in list2"
            :key="index"
            @click="test"
          >
            {{ item.title }}
          </div>
        </niuka-draggable>
      </el-col>
      <el-col :span="12">
        <pre>{{ list2 }}</pre>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator';
import NiukaDraggable from 'component/Draggable';

@Component({ name: 'NiukaDraggableView', components: { NiukaDraggable } })
export default class NiukaDraggableView extends Vue {
  public list = [
    { title: '1-1' },
    { title: '1-2' },
    { title: '1-3' },
    { title: '1-4' },
    { title: '1-5' },
  ];

  public list2 = [
    { title: '2-1' },
    { title: '2-2' },
    { title: '2-3' },
    { title: '2-4' },
    { title: '2-5' },
  ];

  public test() {}
}
</script>

<style lang="scss" scoped>
.niuka-draggable {
  padding: 10px;
  background-color: #f7f8f9;
}

.item {
  margin-bottom: 5px;
  padding: 0 10px;
  background-color: #eff1f3;
  line-height: 48px;
}
</style>
