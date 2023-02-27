export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        path: '/user',
        routes: [
          { path: '/user/login', name: '登录', component: './user/Login' },
          { path: '/user/register', name: '注册', component: './user/Register' },
        ],
      },
      { component: './404' },
    ],
  },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  {
    path: '/Admin',
    name: '管理页',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/Admin/user-manage',
        name: '用户管理页',
        icon: 'smile',
        component: './Admin/UserManage',
      },
      { component: './404' },
    ],
  },
  { icon: 'table', path: '/list', name: '查询表格', component: './TableList' },
  { path: '/', redirect: '/welcome' },
  { component: './404' },
];
