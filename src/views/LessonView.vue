<template>
  <div class="lessons-container col-12">
    <LessonCard 
    icon = "fa-solid fa-calculator"
    subject = "Maths"
    location = "London"
    :price = "100"
    date = "25/10/2023"
    starts_at = "14:00PM"
    ends_at = "17:00PM"
    image_path = "https://wpvip.edutopia.org/wp-content/uploads/2022/10/F6W9XT.jpg-crop.jpg?w=2880&quality=85"
    image_alt = "an image"
    :spaces = "5"
  ></LessonCard>
  <LessonCard 
    icon = "fa-solid fa-calculator"
    subject = "Maths"
    location = "London"
    :price = "100"
    date = "25/10/2023"
    starts_at = "14:00PM"
    ends_at = "17:00PM"
    image_path = "https://wpvip.edutopia.org/wp-content/uploads/2022/10/F6W9XT.jpg-crop.jpg?w=2880&quality=85"
    image_alt = "an image"
    :spaces = "5"
  ></LessonCard>

  </div>
  
</template>

<script>
import LessonCard from '../components/LessonCard.vue';
export default {
  name: "LessonView",
  props: {
    lessons: Array
  },
  components:{
    LessonCard
  },
}
</script>

<style scoped>
.lessons-container {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    background: #fddfdc;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    min-height: 820px;
}

</style>