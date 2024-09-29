---
lang: zh-CN
title: 快速开始
date: 2024-09-29 17:04:11
description: 牛咔组件使用指南
---

# 快速开始

本节将介绍如何在项目中使用牛咔组件

## 完整引入

如果对项目的加载速度和性能要求不高时，那么使用完整导入会更方便。

```js
import 'niuka-components/style.css';
import NiukaComponents from 'niuka-components';

Vue.use(NiukaComponents);
```

如果使用浏览器直接安装，打包文件中提供的完整导入的 `install.js`，直接引入就可以了

```html
<script src="/资源路径/niuka-components/install.js"></script>
```

## 按需导入

只引入需要的组件，以达到减小项目体积的目的。

```js
import { NiukaSteps } from 'niuka-components';

export default {
  // ...
  components: { NiukaSteps },
};
```

如果使用浏览器直接安装，则会在 `window` 上挂着一个对象 `NiukaComponents`，所有的组件会存放在这个对象中，手动去注册组件

```js
Vue.component('NiukaSteps', NiukaComponents.NiukaSteps);
// 或者
new Vue({
  // ...
  components: {
    NiukaSteps: NiukaComponents.NiukaSteps,
  },
});
```
