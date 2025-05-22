<script setup lang="ts">
import { Analytics } from '@vercel/analytics/vue'
import { onMounted, ref } from 'vue'
// import { getChangGuanAuthCode } from './api/changguanAuth'
import { getUserInfo, getWXAuthCode } from './api/wxAuth'

const userInfo = ref({})

onMounted(async () => {
  const params = new URLSearchParams(window.location.search)
  if (params.get('code')) {
    const data = await getUserInfo(params.get('code'))
    userInfo.value = data
  } else {
    const { url } = await getWXAuthCode()
    window.location.href = url
  }
})

// onMounted(() => {
//   function isCGAppWeb() {
//     const ua = window.navigator.userAgent.toLowerCase()
//     return ua.indexOf('changguan') !== -1
//   }

//   // CGApp环境检查, 检查是否在常观APP内使用
//   function CGAppWebReady() {
//     return new Promise((resolve, reject) => {
//       if (isCGAppWeb()) {
//         if (window.cgapp) {
//           resolve()
//         } else {
//           const timeout = setTimeout(() => {
//             reject(new Error('常观App环境检测超时，未找到cgapp对象'))
//           }, 3000)

//           document.addEventListener(
//             'cgappjsbridgeready',
//             () => {
//               clearTimeout(timeout)
//               resolve()
//             },
//             false,
//           )
//         }
//       } else {
//         reject(new Error('请在常观App内打开页面'))
//       }
//     })
//   }

//   CGAppWebReady().then(() => {
//     // 配置应用使用client_id, 常观APP会对应用进行权限校验. 不调用无法使用jsapis
//     cgapp.config({
//       client_id: '2025041415211646',
//     })
//     // 配置应用成功后会从ready中进行回调.
//     // 如果不是需要同步调用的方法, 可以不写在ready()中. ready()回调方法保证了已经通过配置验证
//     cgapp.ready(() => {
//       cgapp.login({
//         scopes: 'base mobile',
//         state: 'jackfan',
//         redirect_uri: 'https://revith.cn',
//         success: async (res) => {
//           const code = res.code
//           const state = res.state
//           // 使用code请求应用自己的登录接口, 换取应用自己的登录状态. 可参考微信公众号授权
//           // .....
//           // .....
//           const data = await getChangGuanAuthCode(res.code)
//           userInfo.value = { code, state, data }
//         },
//       })
//     })
//   })
// })
</script>

<template>
  <Analytics />
  <p>123123</p>
  <p>{{ userInfo }}</p>
</template>
