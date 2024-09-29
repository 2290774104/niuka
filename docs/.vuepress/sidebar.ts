import { SidebarConfig4Multiple } from 'vuepress/config';

const sidebar: SidebarConfig4Multiple = {
  '/pages/components/': [
    {
      title: '安装',
      collapsable: false,
      path: '/pages/components/installation',
    },
    { title: 'Steps 步骤条', path: '/pages/components/steps' },
  ],
};

export default sidebar;
