<template>
  <div class="lessons-container col-12">

    <div class="lesson-card col-11 col-lg-3 col-md-5" v-for="lesson in lessons" :key="lesson.id">
        <div class="lesson-icon col-12" >
            <img :src="imagesSource + '/' + lesson.image.path" :alt="lesson.image_alt">
            <div class="details">
                <i :class="lesson.icon"></i>
                <p v-text="lesson.subject"></p>
                <div class="spaces-tag">
                    {{ lesson.spaces }} spaces left
                </div>
            </div>
        </div>

        <div class="lesson-info col-12 p-2">
            <h3>Lesson Info</h3>

            <table >
                <tr>
                <th>Location</th>
                <th>Date</th>
                </tr>
                <tr>
                <td v-text="lesson.location"></td>
                <td v-text="lesson.date"></td>
                </tr>
                <br>
                <tr>
                <th>Starts at</th>
                <th>Ends at</th>
                </tr>
                <tr>
                <td v-text="lesson.starts_at"></td>
                <td v-text="lesson.ends_at"></td>
                </tr>
            </table>
        </div>

        <div class="price-tag">
            £{{ lesson.price.toFixed(2) }}
        </div>

        <button v-if="lesson.spaces > 0" class="card-button col-12" @click="addToCart(lesson)">Add to Cart</button>
        <button v-else class="card-button col-12">Out of Lessons</button>
    </div>
 </div>
</template>

<script>
export default {
  name: "LessonView",
  props: {
    lessons: {type: Array, required: true, default: []},
    imagesSource: {type: String, required: true, default: ""}
  },
  methods:{
    addToCart(lesson){
      this.$emit("add-item-to-cart", lesson);
    }
  }
}
</script>

<style scoped>
.lessons-container {
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    align-items: start;
    justify-content: center;
    background: #ffffff;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    min-height: 820px;
}

/* ------------ Start of Lesson Card ------------ */
.lesson-card {
    margin: 15px;
    border-radius: 12px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    padding: 10px;
    
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    background: #fff;
    
}
.lesson-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #BF4C41;
    border-radius: 12px 12px 0px 0px;
    height: 200px;
}
.spaces-tag {
    background: #BF4C41;
    font-size: 2em;
    padding: 10px;
    color: #fff;
    font-size: 1.5em;
    border-radius: 40px;
    font-weight: bold;
    border: solid white 2px;
}
.details {
    position: absolute;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.price-tag {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #BF4C41;
    padding: 10px;
    color: #fff;
    font-size: 1.5em;
    font-weight: bold;
    border: solid white 2px;
    float: right;
    position: relative;
    border: none;
    left: 95px;
    bottom: 13px;
    border-radius: 30px 0px 30px 0px;
    width: 150px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
}
.lesson-icon i {
    font-size: 4em;
    margin: 0;
    color: #fff;
}
.lesson-icon p {
    color: #fff;
    font-size: 2em;
    font-family: 'Josefin Sans', sans-serif;
}
.lesson-icon img {
    position: relative;
    z-index: 0;
    width: 100%;
    height: 100%;
    opacity: 0.5;
    z-index: 1;
    border-radius: 12px 12px 0px 0px;
}
.lesson-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 180px;
}

.lesson-info h3{
    font-size: 1.3em;
    margin-bottom: 10px;
}
.card-button {
    border: none;
    height: 70px;
    background-color: #BF4C41;
    border-radius: 10px;
    color: #fff;
    font-size: 1.5em;
    font-family: 'Anton', sans-serif;
    letter-spacing: 0.1em;
}
.card-button:hover{
    background-color: #bb5c53;
}
label{ 
 font-weight: bold;
 font-size: 1em;
}
/* ------------ End of Lesson Card ------------ */

</style>