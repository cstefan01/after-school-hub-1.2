<template>
  <div class="cart-container col-12">
    <div class="section-header">
      <font-awesome-icon icon='fa-solid fa-cart-shopping' class="icon" />
      <h2> My Cart</h2>
    </div>
    <div class="cart-items">
      <ul>
        <li> 
          <img src="https://media.istockphoto.com/id/950609102/photo/girl-solving-mathematical-addition.jpg?s=612x612&w=0&k=20&c=hIOWKbDapOX0leF6wwRkSYeqJggAuEYTLdY-KHf1je4=" alt="">
          <div class="item-info">
            <h3>Computer Science</h3>
            <h4>London</h4>
            <h5>$20.00</h5>
          </div>
          <div class="remove-item">
            &times;
          </div>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>

    </div>
    <div class="section-header">
      <font-awesome-icon icon='fa-solid fa-cart-shopping' class="icon" />
      <h2>Order Summary</h2>
    </div>
    <div class="bill-info">

    </div>
    

  </div>
</template>

<script>
export default {

}
</script>

<style>
.bill-info{
  width: 100%;
  height: 230px;
  background: #BF4C41;
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
  background: #ed7373;
  height: 60px;

}
.section-header h2, .icon{
  font-size: 1.3em;
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
  background: #cb1818;
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