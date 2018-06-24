var name="kack";
var Person={
	name,
	showInfo(){
		console.log(this.name);
	}
}
Person.showInfo();
var obj={
	name:"kack";
	age:12;
	foo(){
		console.log(this.name);
	}
}
obj.
var obj1={a:1,b:2};
var obj2={c:3,d:4};
Object.setPrototypeOf(obj2,obj1);
console.log(obj2.a,obj2.b,obj2.c,obj2.d);

var obj1={a:1,b:2};
var obj2=Object.create(obj1);
obj2.c=2;
obj2.d=3;
console.log(obj2.a,obj2.b,obj2.c,obj2.d);
Object.keys(obj2);

"a" in obj2//true
var max=function (a,b){
	return a>b?a:b;
};
max(2,3);
var max=(a,b)=>a>b?a:b;
max(2,3);
//涉及大括号需要加return
var f=v=>{return v+1}
 cnost full=({first,last})=>last+' '+first;
 full({first:"Ming",last:"Li"});
  function full({first,last}){
  	return last+' '+first;
  }

  full({first:"Ming",last:"Li"});

  function full(person){
  	return person.last+' '+person.first;
  }
let 和const不允许重名

function foo(x,...y){
	console.log(y);
}
foo(1,2,3);

function a(x,y){
	console.log(x,y);
}
a.call({},1,2);
a.apply({},[1,2]);
function test(){
	console.log(Array.from(arguements));
	console.log(...arguements);
}



var f =function(v){
	return v+1;
};
f(2);

var f=v=>v+1;
var f=(v)=>{return v+1};


var f=()=>f;
var f=function(){
	return 5;
}

var foo=(num1,num2)=>{
	if(num1>num2){
		return num1*2;
	}else{
			return num2*2;
	}
}

var point ={
	x:0,
	y:0,
	moveTo:function(x,y){
		function moveToX(){
			this.x=x;
		}
		function moveToY(){
			this.y=y;
		}
		moveToY();
		moveToX();
	}
};
point.moveTo(2,2);
console.log(point);
console.log(window.x,window.y);

var point ={
	x:0,
	y:0,
	moveTo:function(x,y){
		function moveToX(){
			that.x=x;
		}
		function moveToY(){
			that.y=y;
		}
		moveToY();
		moveToX();
	}
};
point.moveTo(2,2);
console.log(point);
console.log(window.x,window.y);

var sum = function(a,b,c){
    b = b||4;
    c = c||5;
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum(1));
console.log(sum(1,0,0));

function foo(x=5){
    let x = 1;
    const x = 2;
    var x = 3;
}
foo();

function add(...values){
	let sum=0;
	for(var val of values){
		sum+=val;
	}
	return sum;
}
add(2,5,3);