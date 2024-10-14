import { SidebarConfig4Multiple } from 'vuepress/config';

const sidebar: SidebarConfig4Multiple = {
  '/pages/guide/': [
    {
      title: '安装',
      collapsable: false,
      path: '/pages/guide/installation',
    },
    {
      title: '快速开始',
      collapsable: false,
      path: '/pages/guide/quickstart',
    },
  ],
  '/pages/components/': [
    {
      title: 'Overview 组件总览',
      collapsable: false,
      children: [
        { title: 'Overview 组件总览', path: '/pages/components/overview' },
      ],
    },
    {
      title: 'Navigation 导航',
      collapsable: true,
      children: [{ title: 'Steps 步骤条', path: '/pages/components/steps' }],
    },
    {
      title: 'Data 数据展示',
      collapsable: true,
      children: [{ title: 'Table 表格', path: '/pages/components/table' }],
    },
  ],
};

export default sidebar;
