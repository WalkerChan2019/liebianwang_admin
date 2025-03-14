export default [
  {
    path: '/',
    redirect: '/shop_management',
  },
  {
    name: '店铺管理',
    path: '/shop_management',
    icon: 'BookOutlined',
    routes: [
      {
        path: '/shop_management',
        redirect: '/shop_management/list',
      },
      {
        path: '/shop_management/list',
        component: './ShopsManagement',
      },
      {
        name: '商品管理',
        path: '/shop_management/:id/goods',
        hideInMenu: true,
        component: './ShopsManagement/GoodsManagement',
      },
    ],
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
