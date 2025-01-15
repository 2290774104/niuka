<template>
  <div>
    <div class="list">
      <el-collapse v-model="activeName" accordion>
        <niuka-load-list
          :list="list"
          v-model="page"
          :loading="loading"
          :finish="false"
          @page-change="loadMore"
        >
          <template #item="item">
            <el-collapse-item :title="item.title" :name="item.title">
              <div>
                与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
              </div>
              <div>
                在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
              </div>
            </el-collapse-item>
          </template>
        </niuka-load-list>
      </el-collapse>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NiukaLoadList from 'component/LoadList';

@Component({ name: 'NiukaLoadListView', components: { NiukaLoadList } })
export default class NiukaLoadListView extends Vue {
  public list = [];

  public page = 1;

  created() {
    this.loadMore();
  }

  public loading = false;

  public activeName = '';

  loadMore() {
    this.loading = true;
    setTimeout(() => {
      for (let i = 0; i < 10; i++) {
        this.list.push({ title: i + (this.page - 1) * 10 + 1 });
      }
      this.loading = false;
    }, 1000);
  }
}
</script>

<style lang="scss" scoped>
.list {
  height: 300px;
  border: 1px solid;
}

.el-collapse {
  height: 100%;
}

.item {
  line-height: 36px;
  border-bottom: 1px solid;
}
</style>
