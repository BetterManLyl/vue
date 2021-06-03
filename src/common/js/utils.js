//创建类和构造函数
class Person {
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
}

export default {
  getPerson() {
    let person = new Person('lyl', '30', '男');
    console.log('person:' + JSON.stringify(person));
    return person;
  },
  query_03() {

  }
}
