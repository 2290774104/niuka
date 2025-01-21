<template>
  <div>
    <niuka-tags-input v-model="value" remove-dialog></niuka-tags-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '测试',
    };
  },
};
</script>
