<template>
  <div class="wrapper">
    <button class="btn btn__show" @click="showForm">ADD NEW COST</button>
    <div v-if="clicked" class="form">
      <input placeholder="Payment amount" v-model.number="value" />
      <div class="select">
        <select v-model="category">
          <option v-for="(option, idx) in options" :key="idx">
            {{ option }}
          </option>
        </select>
      </div>
      <input placeholder="Payment date" v-model="date" />
      <button class="btn btn__save" @click="onSaveClick">ADD</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      value: 0,
      category: "",
      date: "",
      clicked: false,
    };
  },
  computed: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    options() {
      return this.$store.getters.getCategoryList;
    },
  },
  methods: {
    showForm() {
      this.clicked = !this.clicked;
    },
    onSaveClick() {
      const data = {
        id: Date.now(),
        value: this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      };
      this.$emit("addPayment", data);
      this.$store.commit("addDataToPaymentsList", data);
    },
  },
  async created() {
    if (!this.options.length) {
      await this.$store.dispatch("loadCategories");
    }
    
  },
  mounted() {
    

    if (this.$route.params.category) {
      this.category = this.$route.params.category;
    } else this.category = this.options[0];

    if (this.$route.query.value) {
      this.value = this.$route.query.value;
    }

    if (this.value && this.category) {
      this.date = Date.now();
      this.onSaveClick();
    }
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  width: 50%;
}
.btn {
  background-color: #25a79a;
  color: #fff;
  border: 1px solid #25a79a;
  padding: 5px;
  margin-bottom: 20px;
  cursor: pointer;
  &:hover {
    background-color: darken($color: #25a79a, $amount: 10);
  }
  &__show {
    width: 50%;
  }
  &__save {
    width: 25%;
    align-self: flex-end;
  }
  &::after {
    content: "+";
    padding-left: 20px;
  }
}
.form {
  display: flex;
  flex-direction: column;
}
input {
  margin: 5px 0;
  padding: 5px;
}
.select {
  text-align: left;
  & select {
    width: 100%;
    padding: 5px;
  }
}
</style>