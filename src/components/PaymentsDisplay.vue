<template>
  <div class="wrapper">
    <div class="header">
      <div class="header__item">#</div>
      <div class="header__item">Data</div>
      <div class="header__item">Category</div>
      <div class="header__item">Value</div>
    </div>
    <div class="row" v-for="item in items" :key="item.id">
      <div class="row__item">{{ item.id }}</div>
      <div class="row__item">{{ item.value }}</div>
      <div class="row__item">{{ item.category }}</div>
      <div class="row__item">{{ item.date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;  
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
  &__item {
    font-weight: bold;
    width: 25%;
  }
}
.row {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding: 10px 0;
  &__item {
    width: 25%;
  }
}
</style>