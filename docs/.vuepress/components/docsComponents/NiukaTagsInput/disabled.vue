<template>
  <div>
    <niuka-tags-input ref="tags" v-model="value" disabled></niuka-tags-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '标签1 标签2',
    };
  },
};
</script>
