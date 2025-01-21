import { SidebarConfig4Multiple } from 'vuepress/config';

const sidebar: SidebarConfig4Multiple = {
  '/pages/guide/': [
    {
      title: '安装',
      collapsable: false,
      path: 'installation',
    },
    {
      title: '快速开始',
      collapsable: false,
      path: 'quickstart',
    },
  ],
  '/pages/components/': [
    {
      title: '更新日志',
      path: 'changelog'
    },
    {
      title: 'Overview 组件总览',
      collapsable: false,
      children: [
        { title: 'Overview 组件总览', path: 'overview' },
      ],
    },
    {
      title: 'Form 表单组件',
      collapsable: true,
      children: [
        { title: 'Switch 开关', path: 'switch' },
        { title: 'Select 下拉选择', path: 'select' },
        { title: 'TagsInput 标签输入器', path: 'tags-input' },
        { title: 'SelectTree 下拉选择树', path: 'select-tree' },
        { title: 'SelectColumn 下拉选择栏目', path: 'select-column' },
      ],
    },
    {
      title: 'Data 数据展示',
      collapsable: true,
      children: [{ title: 'Table 表格', path: 'table' }],
    },
    {
      title: 'Navigation 导航',
      collapsable: true,
      children: [
        { title: 'Steps 步骤条', path: 'steps' },
        { title: 'Anchor 锚点', path: 'anchor' },
      ],
    },
  ],
};

export default sidebar;
