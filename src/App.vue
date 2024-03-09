<template>
  <div id="app" v-cloak>
    <Header :siteName="site.name" :cartCounter = "computedCartSize" @cart-on-click = "toggleCart"></Header>
    <div class="container-fluid p-3">
      <component 
        :is = "currentView" 
        :lessons = "lessons" 
        :cartItems = "cart" 
        :tax = 20
        :discount = 0
        :imagesSource = "endpoints.host + endpoints.images"
        @add-item-to-cart = "addLessonToCart"
        @remove-item-from-cart = "removeLessonFromCart"
        ></component>
    </div>
    <CopyrightBar :year = "site.copyright_year" :siteName = "site.name"></CopyrightBar>
  </div>
</template>

<script>
import LessonView from './views/LessonView.vue';
import CheckoutView from './views/CheckoutView.vue';
import Header from './components/Header.vue';
import CopyrightBar from './components/CopyrightBar.vue';

export default {
  name: "App",
  data() {
    return {
      site: {
        name: "After School Hub",
        copyright_year: 2023
      },
      status:{
        isOffline: false
      },
      cart: [],
      lessons: [],
      endpoints: {
        host: "https://after-school-hub-env2.eba-iijwxnmm.eu-west-2.elasticbeanstalk.com",
        lessons: "/lessons",
        orders: "/orders",
        images: "/images"
      },
      currentView: LessonView,
    }
  },
  components: { LessonView, CheckoutView, Header, CopyrightBar },
  methods:{
    addLessonToCart(lesson){
      lesson.spaces -= 1;
      this.cart.push(lesson);
    },
    removeLessonFromCart(lesson){
      const cartLength = this.cart.length;
      for (let i = 0; i < cartLength; i++) {
        let currentLesson = this.cart[i];
     
        if (JSON.stringify(currentLesson) === JSON.stringify(lesson)) {
              lesson.spaces += 1;
              this.cart.splice(i, 1); 
              break;
        }
      }

    },
    async getLessons() {
      try {
        const endpoint = `${this.endpoints.host}${this.endpoints.lessons}`;

        const response = await fetch(endpoint);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const lesson = await response.json();

        return lesson;

      } catch (error) {
        console.error('There was a problem in fetching lesson spaces:', error);
        throw error;
      }
    },
    fetchLessons() {
      this.getLessons().then((lessons) => {
        this.lessons = lessons;
      })
    },
    toggleCart(){
      if((this.currentView === LessonView) && (this.cart.length > 0)){
        this.currentView = CheckoutView
      }else{
        this.currentView = LessonView
      }
    },
    handleOffline() {
      this.isOffline = true;
    },
    handleOnline() {
      this.isOffline = false;
    }
  },
  computed:{
    computedCartSize(){
      return this.cart.length;
    }
  },
  beforeMount() {
    this.fetchLessons();
    console.log(this.lessons);
  },
  mounted(){
    window.addEventListener('offline', this.handleOffline);
    window.addEventListener('online', this.handleOnline);
  }
}
</script>
