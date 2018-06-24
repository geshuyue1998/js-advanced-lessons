var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        var temp = "Hi!";
    }
}
f();
//等效于
var temp = new Date();
function f() {
	var temp;
    console.log(temp);
    if(false){
        temp = "Hi!";
    }
}
f();
var temp = new Date();
function f() {
    console.log(temp);
    if(false){
        let temp = "Hi!";
    }
}
f();//将if区域锁死，不影响console调用外层的var temp
var temp = new Date();
function f() {
    console.log(temp);
    let temp = "Hi!";
}
f();//暂存区锁死，报错只能使用区域内的东西，不会去区域外找内容

let [a,b,[c],d]=[2,3,[true],"sbdf"];
console.log(a,b,c,d);
var [a,b]=[1,2];
console.log(a,b);
//等效于a=1,b=2;
[a,b]=[b,a];
console.log(a,b);
var[foo3]=[];
console.log(foo3);
var [foo3=true]=[];
console.log(foo3);
null==undefined//true
null===undefined//false
function f2(){
    return 2;  
}
let [x7=f2()]=[1];
console.log(x7);//1
function f2(){
    return 2;
}
let [x7=f2()]=[];
console.log(x7);//2
let [m1 = 1, n1 = m1] = []; 
let [m2 = 1, n2 = m2] = [2];
let [m3 = 1, n3 = m3] = [1, 2]; 
//let [m4 = n4, n4 = 1] = []; 
console.log(m1,n1,m2,n2,m3,n3);

var [m4 = n4, n4 = 1] = [];
console.log(m4,n4);

let [x3,y3='b']=['a'];
let [x4,y4='b']=['a',undefined];
console.log(x3,x4,y3,y4);
let [x3,y3='b']=['a'];
let [x4,y4='b']=['a',null];
console.log(x3,x4,y3,y4);

let a = [];
let b=[1,2,3,4,5];
[a[0],,a[1],,a[2]] = b;
console.log(a);

let obj1 = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj1;
console.log(f,l);

let {toString: s1} = 123;
console.log(s1); //将123封装成一个new number对象，有原型属性tuString
(123).toString()//将数字转成字符串
function* fibs(){
    var a8=0;varb8=1;
    whlie(true){
        yield a8;
        [a8,b8]=[b8,a8+b8];
    }
}
var [first, second, third, fourth, fifth, sixth,xxx,yyy,zzz,mm,nn,pp] = fibs();
console.log(first, second, third, fourth,fifth,sixth,xxx,yyy,zzz,mm,nn,pp);//
var {x3, y3 = 5} = {x3: 1};
console.log(x3); 
console.log(y3); 

var {x4:y4 = 3} = {};
console.log(y4); 

const [a, b, c, d, e] = 'hello';
console.log(a); 
console.log(b); 
console.log(c);
console.log(d); 
console.log(e); 

let {length:len}='hello';
console.log(len);

let{toString:s1}=123;
console.log(s2);

var [x,y,z,w]=["a","c","d","b"];
[x,y,z,w]=[x,w,y,z];
console.log(x,y,z,w);

function example(){
    return [1,2,3];
}
var [a,b,c]=example();
console.log(a,b,c);

var josnData={
    id:42,
    status:"OK",
    data:[867,5309]
};
let {id,status,data:number}=josnData;
console.log(id,status,number);

var s='Hello world!';
s.startsWith('Hello')
s.endsWith('!')
var reg1=/^hello/gi;
var reg2=/\bhello/gi;
console.log(reg2);
console.log(reg1);

isNaN("xx");
function foo(){
    var arr=Array.from(arguements);
    // console.log(arguements instanceof Object)
    // console.log(arguements instanceof Array)
    // console.log(arguements.constructor)
    // var arr=Array.prototype.slice.call(arguements);
    console.log(arr);
}
foo(1,2,3,"4","5")

for(let elem of['a','b'].values()){
    console.log(index);
}