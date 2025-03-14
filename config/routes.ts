export default [
  {
    path: '/',
    redirect: '/shop_management',
  },
  {
    name: '店铺管理',
    path: '/shop_management',
    icon: 'BookOutlined',
    component: './ShopsManagement',
  },
  
  {
    name: 'User',
    path: '/user',
    layout: false,
    component: '@/layouts/UserLayout',
    routes: [
      {
        path: '/user',
        redirect: '/user/login',
      },
      {
        path: '/user/login',
        component: './User/Login',
      },
      // {
      //   path: '/user/change-pass',
      //   component: './User/ChangePass',
      // },
      // {
      //   path: '/user/register',
      //   component: './User/ChangePass',
      // }
    ],
  },

  {
    path: '*',
    layout: false,
    component: './NoFound',
  },
];
