<template>
  <div id="app" v-cloak>
    <Header :siteName="site.name" :cartCounter="1" @cart-on-click="toggleCart"></Header>
    <div class="container-fluid p-3 bg-success">
      <component :is="currentView" :lessons="lessons"></component>
    </div>
    <CopyrightBar :year="site.copyright_year" :siteName="site.name"></CopyrightBar>
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
      if(this.currentView === LessonView){
        this.currentView = CheckoutView
      }else{
        this.currentView = LessonView
      }
    }
  },
  beforeMount() {
    this.fetchLessons();
    console.log(this.lessons);
  },
}
</script>
