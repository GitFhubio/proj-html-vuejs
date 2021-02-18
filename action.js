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
      products:[
        {
          icon:'fas fa-users',
          offer:'Team training',
          subtitle:'Find a partner',
          description:'Vestibulum, curabitur eu sem nibh ultricess sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique',
          link:'Find a partner'
        },
        {
          icon: 'fas fa-dumbbell',
          offer:'Crossfit workout',
          subtitle:'Push your limits',
          description:'Vestibulum, curabitur eu sem nibh ultricess sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique',
          link:'Learn about Crossfit'
        },
        {
          icon:'fas fa-running',
          offer:'Weight loss plan',
          subtitle:'Shen those pounds',
          description:'Vestibulum, curabitur eu sem nibh ultricess sit nulla adipiscing. Nisl sit fames amet senectus eget sed duis vehicula. Tristique',
          link:'Schedule a workout'
        }
      ],
      articles:[
        {
          photo: 'img/blog4-2x.jpg',
          title: 'The best protein shake',
          author: 'Admin',
          date: 'November 26th, 2019',
          category:'Gym',
        },
        {
          photo: 'img/blog1-2x.jpg',
          title: 'Ultimate cardio workout',
          author: 'Admin',
          date: 'November 26th, 2019',
          category:'Gym',
        },
        {
          photo: 'img/blog3-2x.jpg',
          title: 'New juices available now',
          author: 'Admin',
          date: 'November 26th, 2019',
          category:'Gym',
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
