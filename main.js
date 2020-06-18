// 创建一个空对象
console.log("------创建一个空对象------");
var user=new Object();
//添加属性
console.log("------添加属性------");
user.name="John";
user.surname="Mike";
console.log(user);
//修改属性
console.log("------修改属性------");
user.name="Peter";
console.log(user);
console.log("------删除属性------");
//删除属性
delete user.name;
console.log(user);
console.log("------计算水果数量------");
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
    };
    // write your code here...
let num=0;
for (const key in fruit) {
     num+=fruit[key];
}
console.log(num)



