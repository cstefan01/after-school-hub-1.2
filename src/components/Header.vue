<template>
     <div class="header container-fluid row">
        <div class="site-name col-9 ps-3">
            <h1 v-text="siteName"></h1>
        </div>
        
        <div class="cart col-3 pe-4">
            <div class="cart-icon" @click="toggle">
                <font-awesome-icon icon="fa-solid fa-cart-shopping" class="icon1"/>
                <div v-if="cartCounter > 0" class="counter" v-text="cartCounter"></div>
            </div>
            <font-awesome-icon icon="fa-solid fa-gear" class="icon2" @click="toggleTestConsole"/>
        </div>
     </div>
</template>

<script>
export default {
    name: "Header",
    props:{
        siteName: {type: String, required: true},
        cartCounter: {type: Number, required: false, default: 0}
    },
    methods: {
        toggle(){
            this.$emit("cart-on-click");
        },
        toggleTestConsole(){
            this.$emit("toggle-test-console");
        }
    }
}
</script>

<style scoped>
.header {
    height: 60px;
    background: #BF4C41;
    padding: 0;
    margin: 0;
}
i, h1 {
    font-size: 1.7em;
    color: #fff;
}
.header .site-name {
    display: flex;
    justify-content: start;
    align-items: center;
    font-family: 'Dancing Script', cursive;
}

.cart {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.cart .cart-icon .icon1, .icon2{
    cursor: pointer;
    position: relative;
    z-index: 0;
    color: #fff;
    font-size: 1.5em;
}
.cart .cart-icon .counter {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
    top: 12px;
    right: 57px;
    background: #ec5c2c;
    border-radius: 20px;
    width: 20px;
    color: #fff;
    cursor: pointer;
    font-weight: bold;
}
</style>