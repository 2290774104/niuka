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
};

export default sidebar;
