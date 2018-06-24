let s=Symbol();
typeof s;
console.log(s instanceof Object);
var s1=Symbol('foo');
var s2=Symbol('bar');
s1==s2
//基本数据类型，不能使用new关键字
console.log(s1);
console.log(s2);
var a={}
"toString" in a;

var mySymbol=Symbol();
var a ={};
a[mySymbol]='Hello';
var a={
	[mySymbol]:'Hello';
};
var a={};
Object.defineproperty(a,mySymbol,{value:'Hello'});
a[mySymbol];

var mySymbol=Symbol();
var a={};
a.mySymbol='Hello';
console.log(a[mySymbol]);
console.log(a['mySymbol']);

var myS1=Symbol("xx");
var myS2="xx";
var obj={
	[myS1]:123;
	[myS2]:456;
};
console.log(obj[myS1],obj[Symbol("xx")]);
console.log(obj[myS2],obj["xx"]);

var obj={};
var s1=Symbol();
var s2=Symbol();
obj[s1]=123;
obj[s2]=456;
obj["s1"]=789;
obj.s2=910;
for(var k in obj){
	console.log(k,typeof k);
}

Object.getOwnPropertySymbols(obj).forEach(function(v){
	console.log(obj[v]);
});
Object.getOwnPropertySymbols(obj).forEach((v)=>{console.log(obj[v])});

let s1=new Set([1,2,3,4,5,6,7]);
console.log(s1);
 var s2=new Set();
 [2,3,5,4,3,21,2].map(x=>s2.add(x));
 for(let i of s2){
 	console.log(i);
 }

 let set=new Set([1,2,3,4,4,6,2,1,5,6,7]);
 console.log([...set]);//去除重复的数字，把set对象变成散列
set.siz;//元素个数

var obj={};
var a=Symbol('a');
var b=Symbol('b');
obj[a]='Hello';
obj[b]='World';
var objectSymbols=Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);

var obj = {};
var foo = Symbol("foo");
Object.defineProperty(obj, foo, {
    value: "foo bar",
});
for (var i in obj) {
    console.log(i); 
}
Object.getOwnPropertyNames(obj);
Object.getOwnPropertySymbols(obj);