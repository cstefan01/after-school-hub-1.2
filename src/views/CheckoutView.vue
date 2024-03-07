<template>
  <div class="cart-container col-12">
    <div class="section-header">
      <font-awesome-icon icon='fa-solid fa-cart-shopping' class="icon" />
      <h2> My Cart</h2>
    </div>
    <div class="cart-items">
      <ul>
        <li v-for="item in cartItems" :key="item.id"> 
          <img :src="item.image.path" :alt="item.image.alt" @error="showNoImage">
          <div class="item-info">
            <h3>{{ item.subject }}</h3>
            <h4>{{ item.location }}</h4>
            <h5>${{ item.price.toFixed(2) }}</h5>
          </div>
          <div class="remove-item" @click="removeFromCart(item)">
            &times;
          </div>
        </li>
      </ul>

    </div>
    <div class="section-header">
      <font-awesome-icon icon='fa-solid fa-cart-shopping' class="icon" />
      <h2>Order Summary</h2>
    </div>
    <div class="bill-info">
      <table>
        <tr class="sub-total">
          <th>Sub-Total</th>
          <td>£{{ bill.subTotal.toFixed(2) }}</td>
        </tr>
        <tr class="tax">
          <th>Tax</th>
          <td>£{{ bill.tax.toFixed(2) }}</td>
        </tr>
        <tr class="discount">
          <th>Discount</th>
          <td>£{{ bill.discount.toFixed(2) }}</td>
        </tr>
        <tr class="total">
          <th>Total</th>
          <td>£{{ bill.total.toFixed(2) }}</td>
        </tr>
      </table>

    </div>

    <div class="btn-checkout">
      <button> Pay Now! </button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "CheckoutView",
  data(){
    return{
      noImagePath: "/images/no_image.jpg"
    }

  },
  props:{
    cartItems: {type: Array, required: true, default: []},
    bill: {type: Object, required: true, default: {}}
  },
  methods:{
    showNoImage(event) {
      event.target.src = this.noImagePath;
    },
    removeFromCart(lesson){
      this.$emit("remove-item-from-cart", lesson);
    }
  }

}
</script>

<style>
.btn-checkout{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.btn-checkout button{
  border: none;
  padding: 20px;
  width: 70%;
  height: 60px;
  border-radius: 40px;
  background: #BF4C41;
  color: #fff;
  font-weight: bold;
  font-size: 1.3em;
}

.total{
  font-weight: bold;
  font-size: 1.5em;
  color:#BF4C41;
}

th{
  text-align: inherit;
  text-align: -webkit-match-parent;
}
.total th{
  text-transform: uppercase;
}

.tax th, .tax td, .discount th, .discount td {
  font-weight: normal;
}

.sub-total td, .sub-total th{
  font-weight: bold;
}
.bill-info{
  width: 100%;
  height: 230px;
  background: #fff;
  padding: 10px;
}

.bill-info table{
  width: 100%;
  height: 100%;
}

.bill-info table th, td{
  width: 50%;
}
.bill-info table td{
  text-align: right;
}
.bill-info table th{
  text-align: left;
}

.remove-item{
  font-size: 2em;
}
.item-info {
  height: 100%;
  padding-top: 10px;
  background: #fff;
}
.item-info h3{
  font-weight: bold;
}

.item-info h4{
  font-weight: lighter;
}
.item-info h5{
  color: #BF4C41;
  font-weight: bold;
  font-size: 1.2em;
}
.cart-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: #fff;
    padding: 15px;
    border-radius: 12px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    min-height: 820px;
}

.section-header{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  background: #fff;
  height: 60px;

}
.section-header h2, .icon{
  font-size: 1.3em;
}

.section-header h2{
  position: relative;
  top: 10px;
}

.cart-items{
  width: 100%;
  height: 230px;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
}

.cart-items::-webkit-scrollbar {
  width: 7px;
}

.cart-items::-webkit-scrollbar-track {
    background: #fff;
}

.cart-items::-webkit-scrollbar-thumb {
    background: #BF4C41;
    border-radius: 5px;
}
.cart-items ul{
  width: 100%;
  height: 100%;
  padding: 5px;
  background: #fff;
}

.cart-items ul li{
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 105px;
  background: #fff;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 10px;
}

.cart-items ul li img{
  height: 100%;
  width: 110px;
  border-radius: 10px;
}
</style>