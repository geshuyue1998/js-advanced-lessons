var arr1=[1,2,3,"4"];
var arr2=new Array(5);
console.log(arr2);
for(var i=0;i<arr.length;i++){
	arr2[i]=i;
}
var arr3=new Array(1,2,3,4);
console.log(arr1,arr2,arr3);

var a1 = [1,2,3];
var a2 = a1;
a2.length = 0;
console.log(a1,a2);
a2 instanceof Object;

var a3=[1,2,3];
var a4=a3;
a4=[];
console.log(a3,a4);

var a=["hello"];
a[1]=3.14;
a[2]="world";
console.log("删除a[2]前的数组a",a);
delete a[2];
console.log("删除a[2]后的数组a",a);
a[0]="xx";
console.log(a[0]);

var i=2,b=[];
b[i]=3;
b[i+1]="yy";
b[b[i]]=b[0];
console.log(b);
//数组一定是对象，对象不一定是数组

var a=[];
a[-1.23]=true;
a["100"]=0;
a[1.00]="Hi";
console.log(a.length);
console.log(a);

var a=[,,];
console.log(a.length);//2
//稀疏矩阵遍历不到

var table=new Array(5);
for(var i=0;i<table.length;i++){
	table[i]=new Array(5);
}
for(var row=0;row<table.length;row++){
	for(var col=0;col<table[row].length;col++){
		table[row][col]=row*col;
	}
}
var product=table[2][4];

function foo(){
	console.log(Array.isArray(arguments));
	console.log(Array.prototype.pop.call(arguments));
}
foo(3,2,4);
//
var arr1=[2,5,8]
arr1.forEach(function(a){
	console.log(a.this);
});
console.log(arr1);

var arr1=[2,5,8];
var arr2=[1,6,7];
arr1.forEach(function(a,i){
	console.log(a,i,this);
},arr2);
console.log(arr1);

var arr1=[2,5,8];
var arr2=[1,6,7];
var arr3=[]
arr1.forEach(function(a,i){
	console.log(a,i,this);
	arr3[i]=a>arr2[i]?a:arr2[i]
},arr2);
console.log(arr3);
//some只要含有偶数直接返回true，不继续执行
// every只要含有奇数，直接返回false，不继续执行