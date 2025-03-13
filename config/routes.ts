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
  // {
  //   name: 'Notifications',
  //   path: '/notifications',
  //   icon: 'BookOutlined',
  //   routes: [
  //     {
  //       name: 'Push-notifications',
  //       path: '/notifications/pushNotifications',
  //       component: './Notifications/PushNotifications',
  //     },
  //     {
  //       name: 'Push-notifications',
  //       path: '/notifications/pushNotifications/:id',
  //       component: './Notifications/PushNotifications/edit',
  //       hideInMenu: true,
  //     },
  //     {
  //       name: 'Task View',
  //       path: '/notifications/pushNotifications/task-detail/:id',
  //       component: './Notifications/PushNotifications/TaskDetail',
  //       hideInMenu: true,
  //     },
  //     {
  //       name: 'Record View',
  //       path: '/notifications/pushNotifications/record-detail/:id',
  //       component: './Notifications/PushNotifications/RecordDetail',
  //       hideInMenu: true,
  //     },
  //     {
  //       name: 'Email logs',
  //       path: '/notifications/emailLogs',
  //       component: './Notifications/EmailLogs',
  //     },
  //     // {
  //     //   name: 'SMS logs',
  //     //   path: '/notifications/sMSLogs',
  //     //   component: './Notifications/SMSLogs',
  //     // },
  //     {
  //       name: 'Operation logs',
  //       path: '/notifications/operationLogs',
  //       component: './Notifications/OperationLogs',
  //     },
  //   ],
  // },
  // {
  //   name: 'Game',
  //   path: '/game',
  //   icon: 'BookOutlined',
  //   // component: './Game',
  //   routes: [
  //     {
  //       path: '/game',
  //       redirect: '/game/list',
  //     },
  //     {
  //       // name:'Game list',
  //       path: '/game/list',
  //       component: './Game',
  //     },
  //     {
  //       path: '/game/edit/:id',
  //       component: './Game/Edit',
  //     },
  //     {
  //       // name:'Game result list',
  //       path: '/game/result/:id',
  //       component: './Game/Result',
  //     },
  //   ],
  // },
  // {
  //   name: 'Sphere',
  //   path: '/sphere',
  //   icon: 'BookOutlined',
  //   routes: [
  //     {
  //       path: '/sphere',
  //       redirect: '/sphere/list',
  //     },
  //     {
  //       path: '/sphere/list',
  //       component: './Sphere',
  //     },
  //     {
  //       path: '/sphere/edit/:id',
  //       component: './Sphere/Edit',
  //     },
  //     {
  //       path: '/sphere/bot-manage/:id/:type',
  //       component: './Sphere/BotManagement',
  //       hideInMenu: true,
  //     },
  //   ],
  // },
  // {
  //   name: 'User',
  //   path: '/user',
  //   layout: false,
  //   component: '@/layouts/UserLayout',
  //   routes: [
  //     {
  //       path: '/user',
  //       redirect: '/user/login',
  //     },
  //     {
  //       path: '/user/login',
  //       component: './User/Login',
  //     },
  //     {
  //       path: '/user/change-pass',
  //       component: './User/ChangePass',
  //     },
  //   ],
  // },
  // {
  //   path: '/register',
  //   name: 'Register',
  //   layout: false,
  //   component: '@/layouts/RegisterLayout',
  //   routes: [
  //     {
  //       path: '/register/verify', // 注册--成功
  //       component: './Register/Verification',
  //     },
  //     {
  //       path: '/register/set-new-pass', // 重设密码
  //       component: './Register/SetNewPassInput',
  //     },
  //     {
  //       path: '/register/set-new-pass-success', // 重设密码--成功
  //       component: './Register/SetNewPassSuccess',
  //     },
  //     {
  //       path: '/register/set-new-email', // 修改邮箱
  //       component: './Register/SetNewEmail',
  //     },
  //     {
  //       path: '/register/set-new-email-success', // 重设邮箱--成功
  //       component: './Register/SetNewEmailSuccess',
  //     },
  //     {
  //       path: '/register/delete-google-email', // 删除google邮箱--成功
  //       component: './Register/DeleteGooglleEmail',
  //     },
  //   ],
  // },
  {
    path: '*',
    layout: false,
    component: './NoFound',
  },
];
