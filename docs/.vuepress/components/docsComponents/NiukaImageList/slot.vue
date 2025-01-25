<template>
    <div>
      <div class="wrap">
        <niuka-image-list :data="data" :pagination="pagination" :total="8">
          <template #operate="data">
            <div @click="handleOperate(data)">插槽</div>
          </template>
        </niuka-image-list>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: [
          {
            title: 'photo_1735109566557.jpeg',
            url: 'https://oss.devnbs.cn/M00/01/61/rBSSXmdrq7-AKWryABb29m6sxVk63.jpeg',
          },
          {
            title: 'photo_1735096238381.jpeg',
            url: 'https://oss.devnbs.cn/M00/01/61/rBSSXmdrd66AIVvZAAgGyYEOM2w40.jpeg',
          },
          {
            title: 'photo_1735093059789.jpeg',
            url: 'https://oss.devnbs.cn/M00/01/61/rBSSXmdra0SAXl62AAVScKZsouk50.jpeg',
          },
          {
            title: 'photo_1735092870695.jpeg',
            url: 'https://oss.devnbs.cn/M00/01/61/rBSSXmdraoeAP5pyAAn3KL7j98U32.jpeg',
          },
          {
            title: 'photo_1735092869561.jpeg',
            url: 'https://oss.devnbs.cn/M00/01/61/rBSSXmdraoaAD0V8AAmxNTT493E65.jpeg',
          },
          {
            title: 'photo_1735092848304.jpeg',
            url: 'https://oss.devnbs.cn/M00/01/61/rBSSXmdranGAaa8-AAfFiQqgiv435.jpeg',
          },
          {
            title: 'photo_1735092847329.jpeg',
            url: 'https://oss.devnbs.cn/M00/01/61/rBSSXmdranCAUuy0AAmbNSYMrE065.jpeg',
          },
          {
            title: 'photo_1735092733706.jpeg',
            url: 'https://oss.devnbs.cn/M00/01/61/rBSSXmdraf6Ac_YyAAeOsVVHpJM97.jpeg',
          },
        ],
        pagination: {
          currentPage: 1,
          pageSize: 10,
        },
      };
    },
    methods: {
      handleOperate(data) {
        this.$message.info(data.url);
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .wrap {
    height: 640px;
  }
  </style>
  