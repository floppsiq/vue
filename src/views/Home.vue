<template>
  <div class="home">
    <header class="header">
      <div class="title">My personal costs</div>
    </header>
    <main>
      TOTAL: {{ getFullPaymentValue }}
      <add-payment-form @addPayment="add" />
      <payments-display :items="currentElement" />
      <pagination
        :length="paymentsList.length"
        :cur="curPage"
        :n="n"
        @paginate="onChangePage"
      />
    </main>
  </div>
</template>

<script>
import AddPaymentForm from "../components/AddPaymentForm.vue";
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import Pagination from "../components/Pagination.vue";
// @ is an alias to /src
import { mapMutations, mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    Pagination,
  },
  data() {
    return {
      show: false,
      curPage: 1,
      n: 10,
    };
  },
  computed: {
    ...mapGetters(["getFullPaymentValue"]),
    paymentsList() {
      return this.$store.getters.getPaymentList;
    },
    currentElement() {
      return this.paymentsList.slice(this.n * (this.curPage - 1), this.n * (this.curPage - 1) + this.n);
    },
  },

  methods: {
    ...mapMutations({
      myMuttation: "setPaymentsListData",
    }),
    ...mapActions(["fetchData"]),
    onChangePage(page) {
      this.curPage = page;
    },
    add(data) {
      this.$store.commit("addDataToPaymentsList", data);
    },
  },
  created() {
    const { page } = this.$route.params;
    if (page) {
      this.curPage = Number(page);
    }
    this.fetchData()
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
