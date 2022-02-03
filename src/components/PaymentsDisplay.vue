<template>
  <div class="payment__table">
    <div class="payment__header">
      <div class="payment__header-item">#</div>
      <div class="payment__header-item">Data</div>
      <div class="payment__header-item">Category</div>
      <div class="payment__header-item">Value</div>
    </div>
    <div class="payment__row" v-for="item in items" :key="item.id">
      <div class="payment__row-item">{{ item.id }}</div>
      <div class="payment__row-item">{{ item.value }}</div>
      <div class="payment__row-item">{{ item.category }}</div>
      <div class="payment__row-item">{{ item.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => []
    },
  },
};
</script>

<style lang="scss" scoped>
.payment__header {
  display: flex;
  justify-content: space-between;  
  border-bottom: 2px solid black;
  padding: 10px 0;
  &-item {
    font-weight: bold;
    width: 25%;
  }
}
.payment__row {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
  &-item {
    width: 25%;
  }
}
</style>