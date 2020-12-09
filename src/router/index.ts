import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import store from '@/store';
import { getStore } from '@/utils/storage';
Vue.use(VueRouter);

const routes: RouteConfig[] = [
  {
    path: '/Login',
    meta: {
      title: '登录'
    },
    component: () => import(/* webpackChunkName: "Login" */ '@/views/Login.vue'),
  },
  {
    path: '/',
    meta: {
      title: '首页'
    },
    component: () => import(/* webpackChunkName: "Index" */ '@/views/Index.vue'),
  },
  {
    path: '/My',
    meta: {
      title: '个人主页'
    },
    component: () => import(/* webpackChunkName: "My" */ '@/views/My.vue'),
  },
  {
    path: '/Register',
    meta: {
      title: '注册'
    },
    component: () => import(/* webpackChunkName: "Register" */ '@/views/Register.vue'),
  },
  {
    path: '/Set',
    meta: {
      title: '设置'
    },
    component: () => import(/* webpackChunkName: "Set" */ '@/views/Set.vue'),
  },
  {
    path: '/MerchantFrom',
    meta: {
      title: '商家开户'
    },
    component: () => import(/* webpackChunkName: "MerchantFrom" */ '@/views/MerchantFrom.vue'),
  },
  {
    path: '/Audit',
    meta: {
      title: '审核进度'
    },
    component: () => import(/* webpackChunkName: "Audit" */ '@/views/Audit.vue'),
  },
  {
    path: '/MyWallet',
    name: '/MyWallet',
    meta: {
      title: '我的钱包'
    },
    component: () => import(/* webpackChunkName: "MyWallet" */ '@/views/MyWallet.vue'),
  },
  {
    path: '/InviteUser',
    meta: {
      title: '邀请用户'
    },
    component: () => import(/* webpackChunkName: "InviteUser" */ '@/views/InviteUser.vue'),
  },
  {
    path: '/PersonalData',
    meta: {
      title: '完善个人资料'
    },
    component: () => import(/* webpackChunkName: "PersonalData" */ '@/views/PersonalData.vue'),
  },
  {
    path: '/MerchantDetails',
    meta: {
      title: '商家详情'
    },
    component: () => import(/* webpackChunkName: "MerchantDetails" */ '@/views/MerchantDetails.vue'),
  },
  {
    path: '/PersonalHomePage',
    meta: {
      title: '个人主页'
    },
    component: () => import(/* webpackChunkName: "PersonalHomePage" */ '@/views/PersonalHomePage.vue'),
  },
  {
    path: '/AccountManagement',
    name: '/AccountManagement',
    meta: {
      title: '提现账号'
    },
    component: () => import(/* webpackChunkName: "AccountManagement" */ '@/views/AccountManagement.vue'),
  },
  {
    path: '/WithdrawDepositlList',
    meta: {
      title: '提现明细'
    },
    component: () => import(/* webpackChunkName: "WithdrawDepositlList" */ '@/views/WithdrawDepositlList.vue'),
  },
  {
    path: '/DetailIncome',
    meta: {
      title: '收入明细'
    },
    component: () => import(/* webpackChunkName: "DetailIncome" */ '@/views/DetailIncome.vue'),
  },
  {
    path: '/AddWdAccount',
    meta: {
      title: '添加提现账号'
    },
    component: () => import(/* webpackChunkName: "AddWdAccount" */ '@/views/AddWdAccount.vue'),
  },
  {
    path: '/ApplyOfWithdrawal',
    name: '/ApplyOfWithdrawal',
    meta: {
      title: '提现申请'
    },
    component: () => import(/* webpackChunkName: "ApplyOfWithdrawal" */ '@/views/ApplyOfWithdrawal.vue'),
  },
  {
    path: '/ChoiceWithdrawal',
    meta: {
      title: '选择提现账号'
    },
    component: () => import(/* webpackChunkName: "ChoiceWithdrawal" */ '@/views/ChoiceWithdrawal.vue'),
  },
  {
    path: '/ChangePhone',
    meta: {
      title: '更换手机号'
    },
    component: () => import(/* webpackChunkName: "ChangePhone" */ '@/views/ChangePhone.vue'),
  },
  {
    path: '/RealNameAuth',
    meta: {
      title: '实名认证'
    },
    component: () => import(/* webpackChunkName: "RealNameAuth" */ '@/views/RealNameAuth.vue'),
  },
  {
    path: '/Feedback',
    meta: {
      title: '反馈'
    },
    component: () => import(/* webpackChunkName: "Feedback" */ '@/views/Feedback.vue'),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.title) {
    document.title = to.meta.title;
  }
  if (to.path === '/Login') {
    store.commit('setTabbarIndex', 2);
    next();
  } else {
    const token = getStore('token');
    if (token === null || token === '') {
         store.commit('setTabbarIndex', 2);
          router.push('/Login');
    } else {
      if (to.path === '/') {
        store.commit('setTabbarIndex', 0);
      } else if (to.path === '/My') {
        store.commit('setTabbarIndex', 1);
      } else {
        store.commit('setTabbarIndex', 2);
      }
      next();
    }
  }
});
export default router;
