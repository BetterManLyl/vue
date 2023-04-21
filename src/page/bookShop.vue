<template>
  <div>
    购物车
    <table>
      <thead>
        <tr>
          <th></th>
          <th>书籍名称</th>
          <th>出版日期</th>
          <th>价格</th>
          <th>购买数量</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in books" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.date }}</td>
          <!--过滤器的使用-->
          <td>{{ item.price }}</td>
          <td>
            <button @click="add(item)">+</button>
            {{ item.count }}
            <button :disabled="item.count <= 1" @click="subtract(item)">-</button>
          </td>
          <td><button @click="remove(item)">移除</button></td>
        </tr>
      </tbody>
    </table>

    <h1>总价{{ countPrice | showPrice }}</h1>
    <button @click="clearList()">清空集合</button>
    <button @click="testPromise">测试Promise</button>


    <p></p>
<input type="text" v-model="testModel">{{ testModel }}

  </div>
</template>

<script>
export default {
  data() {
    return {
      testModel:"",
      books: [
        {
          id: 1,
          name: "<算法导论>",
          price: 85.0,
          count: 1,
          date: "2006-9",
        },
        {
          id: 2,
          name: "<UNIX编程一书>",
          price: 59.0,
          count: 1,
          date: "2006-9",
        },
        {
          id: 3,
          name: "<编程珠玑>",
          price: 39.0,
          count: 1,
          date: "2006-9",
        },
        {
          id: 4,
          name: "<代码大全>",
          price: 128.0,
          count: 1,
          date: "2006-9",
        },
      ],

      test: "",
    };
  },
  computed: {
    //总价
    countPrice() {
      let countPrice = 0;
      //   for (let i = 0; i < this.books.length; i++) {
      //     countPrice += this.books[i].price * this.books[i].count;
      //     console.log('count:'+countPrice);
      //   }
      // for (let i in this.books) {
      //   countPrice += this.books[i].price * this.books[i].count;
      // }

      //1、filter高级函数
      let num = [100, 2, 30, 50, 40, 200, 400];
      //数组遍历 根据遍历条件 返回新的数组
      let newnum = num.filter(function (i) {
        return i < 100;
      });
      console.log("newnum:" + newnum);

      //2、map函数的使用
      let new2nums = newnum.map(function (n) {
        return n * 2;
      });
      console.log("new2nums:" + new2nums);

      let new3num = new2nums.reduce(function (previousValue, n) {
        return previousValue + n;
      }, 0);
      console.log("new3num:" + new3num);
      for (let item of this.books) {
        countPrice += item.price * item.count;
      }
      return countPrice;
    },
  },
  methods: {
    test() {},
    //保留两位小数
    saveTwoPoint(value) {
      return "￥" + value.toFixed(2);
    },
    click() {
      return false;
    },
    //加
    add(item) {
      this.init();
      item.count++;
    },
    testPromise() {
      new Promise((resolve, reject) => {
        console.log("初始化");
        resolve();
      })
        .then(() => {
          throw new Error("有哪里不对了");
          console.log("执行「这个」”");
        })
        .catch(() => {
          console.log("执行「那个」");
        })
        .then(() => {
          console.log("执行「这个」，无论前面发生了什么");
        });
    },
    //减
    subtract(item) {
      if (item.count <= 1) {
        return;
      }
      item.count--;
    },
    //移除
    remove(item) {
      this.books.splice(item, 1);
    },

    clearList() {
      let testList = [];
      if (testList || testList == []) {
        console.log("数组空");
      }
    },
  },
  created() {},
  //过滤
  filters: {
    showPrice(value) {
      //保留两位小数
      return "￥" + value.toFixed(2);
    },
  },
};
</script>
<style>
table {
  border: 1px solid #e9e9e9;
  border-collapse: collapse;
  border-spacing: 0;
}
th,
td {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}
th {
  background-color: #f7f7f7;
  color: #5c6b77;
  font-weight: 700;
}
</style>
