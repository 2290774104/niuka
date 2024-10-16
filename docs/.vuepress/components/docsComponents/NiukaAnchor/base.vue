<template>
  <div>
    <niuka-anchor :anchorLinks="anchorLinks" :fixed="false"></niuka-anchor>
  </div>
</template>

<script>
export default {
  data() {
    return {
      anchorLinks: [
        { label: '特性', link: '特性' },
        { label: '基本用法', link: '基本用法' },
        { label: '自动生成', link: '自动生成' },
        { label: '固定到屏幕', link: '固定到屏幕' },
        { label: 'NiukaAnchor Attributes', link: 'NiukaAnchor Attributes' },
        { label: 'Anchor Attributes', link: 'Anchor Attributes' },
      ],
    };
  },
};
</script>
