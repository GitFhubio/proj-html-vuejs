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
      ],
      videosData:[
        {
          photo: 'img/video2-2x.jpg',
          title: 'Thighs & glute workout',
          description:'Increase your mobility',
        },
        {
          photo: 'img/video7-2x.jpg',
          title: 'Lift, firm & perk up',
          description:'feel young again',
        },
        {
          photo: 'img/video9-2x.jpg',
          title: 'Slim & trim your waist',
          description:'Shed those extra pounds',
        }
      ],
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
