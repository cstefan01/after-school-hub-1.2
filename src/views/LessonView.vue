<template>
  <div class="lessons-container col-12">
    <LessonCard v-for="lesson in lessons" :key="lesson.id"
      :icon = lesson.icon
      :subject = lesson.subject
      :location = lesson.location
      :price = lesson.price
      :date = lesson.date
      :starts_at = lesson.starts_at
      :ends_at = lesson.ends_at
      :image_path = lesson.image_path
      :image_alt = lesson.image_alt
      :spaces = lesson.spaces
    ></LessonCard>
 </div>
</template>

<script>
import LessonCard from '../components/LessonCard.vue';
export default {
  name: "LessonView",
  props: {
    lessons: {type: Array, required: true, default: []}
  },
  components:{
    LessonCard
  }
}
</script>

<style scoped>
.lessons-container {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    background: #fddfdc;
    align-items: start;
    justify-content: center;
    background: #ffffff;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    min-height: 820px;
}

</style>