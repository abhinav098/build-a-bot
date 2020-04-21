<template>
  <div>
    <div v-if="cart.length">
      <h1>Cart</h1>
      <table>
        <thead>
          <tr>
            <th class="robot-title">
              Robot
            </th>
            <th class="cost">
              Cost
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(robot, index) in cart" :key="index">
            <td class="robot-title">
              {{robot.head.title}}
            </td>
            <td class="cost">
              ₹{{robot.cost}}
            </td>
          </tr>
          <br />
          <tr class="total">
            <td>Total</td>
            <td class="cost">₹{{cartTotal}}</td>
          </tr>
        </tbody>
      </table>
      <div v-if="cartSaleItems.length" class="saved-money-robots-list">
        <h2 class="saved-money">You saved money on these robots:</h2>
        <table>
          <thead>
            <tr>
              <th class="robot-title">
                Robot
              </th>
              <th class="cost">
                Cost
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(robot, index) in cartSaleItems" :key="index">
              <td class="robot-title">
                {{robot.head.title}}
              </td>
              <td class="cost">
                ₹{{robot.cost}}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-if="cartAbsent">
      <h2>Nothing added to the cart yet!</h2>
    </div>
 </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    cartAbsent() {
      return !this.cart.length;
    },
    cart() {
      return this.$store.state.robots.cart;
    },
    cartTotal() {
      const cost = this.cart.map((cartItem) => cartItem.cost);
      return cost.reduce((a, b) => a + b, 0);
    },
    cartSaleItems() {
      return this.$store.getters.cartSaleItems;
    },
  },
};
</script>

<style scoped>
  td, th {
    padding: 5px;
  }
  .robot-title {
    text-align: left;
    padding-right: 200px;
  }
  .cost {
    text-align: right;
  }
  .total{
    font-weight: bold;
  }
  .saved-money {
    color: red;
    font-size: 15px;
  }
</style>
