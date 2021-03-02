export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt_study',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  //middleware
  router:{
    middleware:'auth',
    //扩展路由
    extendRoutes(routes,resolve){
      //console.log(routes);
      routes.push({
        name:'home',
        path: '/index',
        component:resolve(__dirname,'pages/index.vue')
      })
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/css/transition.css',
    'element-ui/lib/theme-chalk/index.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/router.js',
    {
      src:"~/plugins/axios",
      srr:true,//开启服务端渲染
    },
    {
      src:'~/plugins/element-ui',
      ssr:true,//不持支ssr的插件只会在客户端运行不要给true
      //mode:'server'//client
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'cookie-universal-nuxt'
  ],
  axios: {
    proxy:true,//开启axios跨域
    //prefix:'/api',//这里可以配置基本url地址
  },
  //代理 写法一
  // proxy:{
  //   '/api':{
  //     target:'http://localhost:5001',//代理转发的地址
  //     changeOrigin:true,
  //     //pathRewrite:{//重写地址}
  //   }
  // },
  //写法二
  proxy:{
    '/api':{
      target:'http://localhost:5001',//代理转发的地址
      pathRewrite:{
        '^/api':'/',//把/api替换成 /
        changeOrigin:true,//表示是否跨域
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile:[/^element-ui/],
  },
  //定义系统默认loading效果,或者指定一个loading组件
  //loading:{color:'#399',height:'3px'}
  loading:'~/components/loading.vue'
}
