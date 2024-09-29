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
      title: 'Navigation',
      collapsable: true,
      children: [{ title: 'Steps 步骤条', path: '/pages/components/steps' }],
    },
  ],
};

export default sidebar;
