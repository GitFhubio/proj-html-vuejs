new Vue({
  el: '#root',
  data: {
    indexActive:'',
    indexSocial:'',
    indexNav:'',
    loading:false,
      srclogo:'img/logo.png',
      menulist:[
        { voce: 'Home'},
        { voce: 'Services',
          content:['All Services','Service Single Page'] },
        { voce: 'About',
          content:['About me','Our Sponsor','Contact']  },
        { voce: 'Videos',
        content:['All Playlists','Playlist Page','Video Single Page']   },
        { voce: 'Blog' },
        { voce: 'Store',
        content:['Single Product','Variable Product'] }
      ],
      popups:[
        { name: 'Demos' ,
        icon:'fas fa-folder',
          fade:''},
        { name: 'Buy Now',
        icon:'fas fa-shopping-cart',
      fade:''},
      ],
      services:[
          {
            photo: 'img/box1.jpg',
            title: 'Crossfit workout',
            description:'Push your limits',
          },
          {
            photo: 'img/box2.jpg',
            title: 'New gym apparel',
            description:'Look good, feel good',
          },
          {
            photo: 'img/box3.jpg',
            title: 'Team training',
            description:'Find a partner',
          }
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
      offers:[
        {
          logo:'img/sponsor-1-2x-200x103.png',
          description:'Tristique aliquam in nullam habitasse nunc, amet vel consectetur. Nulla in suspendisse dolor, aliquet.',
          link:'Visit Yoga Studio'
        },
        {
          logo:'img/sponsor-2-2x-200x103.png',
          description:'Feugiat etiam dui mauris pharetra mauris sed pharetra. Convallis sapien ornare cras faucibus nulla porta dui a.',
          link:'Join Fitness Center '
        },
        {
          logo:'img/sponsor-3-2x-200x103.png',
          description:'Nisl at quam adipiscing montes, nec, adipiscing commodo aliquam tincidunt. Ligula in habitant et sagittis imperdiet.',
          link:'Learn about FC'
        },
        {
          logo:'img/sponsor-4-2x-200x103.png',
          description:'Proin in viverra maecenas et mattis ut nibh enim. Gravida ultricies mi porta lacus. Et posuere velit sed nec eleifend.',
          link:'Visit Power Gym'
        }
      ],
        socialIcons:[
            { icon: 'fab fa-facebook-f',name:'facebook' },
            { icon: 'fab fa-twitter',name:'twitter' },
            { icon: 'fab fa-youtube',name:'youtube' },
            { icon: 'fab fa-instagram',name:'instagram' },
            { icon: 'fab fa-linkedin-in',name:'linkedin' }
          ],
          posts:['The best protein shake','Ultimate cardio workout','New juices available now','Tips to find training partners','20 best healthy recipes'
        ],
        contacts:{address: '4746 Tipple Road Michigan 48449',
        mobile:"1.800.000.000",
        email:"info@your-company.com"},
        rights:[
          '© Copyright 2012 - 2021',
          'Avada theme by <span>ThemeFusion</span>',
          'All rights reserved',
          'Powered by <span>WordPress</span>'
        ]

  },
  methods:{
    nowActive(ind){
      this.indexActive=ind;
    },
      animationIn(ind){
      this.popups[ind].fade="fadeIn";
      console.log('entro')
    },
      animationOut(ind){
        this.popups[ind].fade="fadeOut";
      console.log('esco');
    },
    refreshPage(){
      location.reload();
    },
    showNameSocial(index){
      this.indexSocial=index;
    },
    hideNameSocial(){
      this.indexSocial='';
    }
    ,    showDrop(index){
      if (index!= 0 && index!= 4){
          this.indexNav=index;
        } else {
          this.indexNav='';
        }}
        ,
        hideDrop(){
          this.indexNav='';
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





const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
  });
};
const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options

const elements_inViewport = document.querySelectorAll('[data-inviewport]');
elements_inViewport.forEach(element => {
  Obs.observe(element, obsOptions);
});
