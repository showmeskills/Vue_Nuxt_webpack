<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt_hook
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware(){
    console.log(`the fourth execution the pages middleware, it has  context parameters without window object`)
  },
  validate(){
    console.log(`validate hook the fiveth execution in the pages,return boolean,it has  context parameters without window object`)
    return true;
  },
  asyncData(context){
    console.log(`asyncData the async request data from database and send to current component,it has  context parameters without window object`,context)
    return {
      b:2
    }
  },
  fetch({store}){
    console.log('fetch is also an async request function and send to vuex,it has  context parameters without window object')
  },
  beforeCreate(){
    console.log('beforeCreate it only has  a this direction which directs to new Vue, it works between ssr and csr')
  },
  created(){
    console.log('created it has only a this direction which directs to new Vue, it works between ssr and csr')
  },


  //csr
  beforeMount(){
    console.log(`csr life hooks have window and this`)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
