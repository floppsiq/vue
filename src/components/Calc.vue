<template>
  <div class="calc">
    <h1>{{ message }}</h1>
    <!--
      1-Change data
      2-Update data
    -->
    <!-- <input type="text" :value="message" @input="changeInput($event)"/>
    <button @click="someMethodClick" v-bind:disabled="disabled">Click</button> -->
    <input type="text" v-model.number="operand1" />
    <input type="text" v-model.number="operand2" />

    = {{ result }}

    <div v-if="error">Ошибка! {{ error }}</div>

    <hr />
    <div>
      <button v-for="operand in operands" v-bind:key="operand" @click="calculate(operand)">
        {{ operand }}
      </button>
    </div>
    <label><input type="checkbox" v-model="showkey" />Отобразить экранную
      клавиатуру</label>
    <div v-if="showkey">
      <p>Экранная клавиатура</p>
      <button v-for="btn in 10" :key="btn" @click="inputNmb(btn -1)">{{ btn - 1 }}</button>
      <button @click="deleteNmb">&#8592;</button>
      <br>
      <label><input type="radio" v-model="operch" value="1" name="operand">Операнд 1</label>
      <label><input type="radio" v-model="operch" value="2" name="operand">Операнд 2</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calc",
  props: {
    msg: String,
  },
  data() {
    return {
      message: "",
      operand1: 0,
      operand2: 0,
      result: 0,
      error: "",
      operands: ["+", "-", "*", "/"],
      showkey: false,
      operch: "1"
    };
  },
  methods: {
    add() {
      this.result = this.operand1 + this.operand2;
    },
    substract() {
      this.result = this.operand1 - this.operand2;
    },
    divide() {
      const { operand1, operand2 } = this;
      if (operand2 === 0) {
        this.error = "Делить на 0 нельзя";
      } else {
        this.result = operand1 / operand2;
      }
    },
    multiply() {
      this.result = this.operand1 * this.operand2;
    },
    calculate(operation = "+") {
      this.error = "";
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.substract();
          break;
        case "*":
          this.multiply();
          break;
        case "/":
          this.divide();
          break;
      }
    },
    inputNmb(i){
      const {operch} = this;
      const input = operch === '1' ? "operand1": "operand2";
      this[input] = +(this[input] += String(i));
    },
    deleteNmb(){
      const {operch} = this;
      const input = operch === '1' ? "operand1": "operand2";
      this[input] = +String(this[input]).slice(0, -1);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
