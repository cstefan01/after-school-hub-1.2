<template>
     <div class="header container-fluid row">
        <div class="site-name col-10 bg-black ps-3">
            <h1 v-text="siteName"></h1>
        </div>
        
        <div class="cart col-2  pe-3">
            <div class="cart-icon" @click="toggle">
                <i class="fa-solid fa-cart-shopping"></i>
                <div v-if="cartCounter > 0" class="counter" v-text="cartCounter"></div>
            </div>
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
    justify-content: flex-end;
}
.cart .cart-icon i {
    cursor: pointer;
    position: relative;
    z-index: 0;
}
.cart .cart-icon .counter {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    z-index: 1;
    top: 9px;
    right: 7px;
    background: #ec5c2c;
    border-radius: 20px;
    width: 20px;
    color: #fff;
    cursor: pointer;
}
</style>