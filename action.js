new Vue({
  el: '#root',
  data: {
    loading:false,
      srclogo:'img/logo.png',
      headerData:[
        { navElement: 'Home' },
        { navElement: 'Services' },
        { navElement: 'About' },
        { navElement: 'Videos' },
        { navElement: 'Blog' }
      ]
  },
  methods:{

      refreshPage(){
      location.reload();
    }
  },
    mounted(){
        },
        created: function(){
          setTimeout(() => {
            this.loading = false;
          }, 1500)
        },


})

Vue.config.devtools = true;
