<template>
  <div>
    <niuka-tags-input v-model="value" check-number></niuka-tags-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
    };
  },
};
</script>
