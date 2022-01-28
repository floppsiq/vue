<template>
  <div class="home">
    <header class="header">
      <div class="title">My personal costs</div>
    </header>
    <main>
      <add-payment-form @addPayment="add"/>
      <payments-display :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import AddPaymentForm from '../components/AddPaymentForm.vue';
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
  },
  data() {
    return {
      show: false,
      paymentsList: [],
    };
  },
  methods: {
    add(data){
      this.paymentsList = [...this.paymentsList, data]
    },
    fetchData() {
      return [
        {
          id: "1",
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          id: "2",
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          id: "4",
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        {
          id: "5",
          date: "24.03.2020",
          category: "Housing",
          value: 1235,
        },
        {
          id: "6",
          date: "06.07.2020",
          category: "Clothing",
          value: 2000,
        },
        {
          id: "7",
          date: "27.05.2020",
          category: "Healthcare",
          value: 5000,
        },
      ];
    },
    toggleButton() {

    }
  },
  created() {
    this.paymentsList = this.fetchData();
  },
};
</script>

<style lang="scss" scoped>
.home {
  width: 50%;
  text-align: left;
}
.header {
  padding: 20px 0;
}
.title {
  font-size: 2rem;
}
</style>
