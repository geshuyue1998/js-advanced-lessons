//分割
var str='abcauweu_cbaweub';
var a=str.splite("_");
console.log(a);
var str='abcauweu_cbaweub';
var a=str.splite(/[_a]/,"gi");
console.log(a);
"abcdef".replace("a","x");
"abcdef".replace(/a/,"x");
d数字D非数字w字符W非字符
"a2d5".replace(/\d/gi,"X");
"a2d5".replace(/\w/gi,"X");
"a2d5".replace(/\D/gi,"X");
"a2d5".replace(/\W/gi,"X");
"a2d5".replace(/\s/gi,"X");
"a2d5".replace(/\S/gi,"X");
"a2d5".replace(/\b/gi,"X");
"a2d5".replace(/a\ds/g,"X");
//$以。。作为结尾
//^以。。作为开头
console.log(/^moo/.test("moon"));
console.log(/moo$/.test("moon"));
//一个 - 代表范围，如[a-z] 、[a-z0-9A-Z]
//一个 . 代表一个除了回车和换行符之外的所有字符 等效于[^\r\n]，
console.log(/oo/.test("moon"));
console.log(/oo\b/.test("moon"));
console.log(/oon\b/.test("moon"));
console.log(/\boo/.test("moon"));
console.log(/oo\B/.test("moon"));
console.log(/oon\B/.test("moon"));
console.log(/\Boo\B/.test("moon"));
console.log("moon".search(/oo/));
console.log("moon".search(/oo\b/));
console.log("moon".search(/oon\b/));
console.log("moon".search(/\boon\b/));

var str = 'dgfhfgh254bhku289fgdhdy675gfh';
console.log(str.match(/\d+/g));

var s1 = "get-element-by-id";
 function camelCased(str) { 
 	let regExp = /-(\w)/g; 
 	str.replace(regExp, function(match, p) 
 		{ return p.toUpperCase(); }) 
 } 
 camelCased(s1); 
//2.给定这样一个连字符串，var s2 = "get-element-by-id";
//写一个function转换为驼峰命名法形式的字符串输出：getElementById
//3.写出正则表达式，从一个字符串中提取链接地址。
//如var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
//写一个function从s3中提取出网址，输出数组：["www.baidu.com","www.edu2act.cn"]

var f = function(s) {
    return s.replace(/-\w/g, function(x) {
        return x.slice(1).toUpperCase();
    })
}
var s1 = "get-element-by-id";

var str = 'IT面试题博客中包含很多 <a href="http://hi.baidu.com/mianshiti/blog/category/微软面试题">微软面试题</a>';
var regExp = /<a(?: [^>]*)+href="(.*)"(?: [^>]*)*>/; 
console.log(regExp.exec(str)[1]); 
function combo(msg){  
    var arr=msg.split("-");  
    for(var i=1;i<arr.length;i++){  
        arr[i]=arr[i].charAt(0).toUpperCase()+arr[i].substr(1,arr[i].length-1);  
    }  
    msg=arr.join(""); 
    rerurn msg;         
}  
var s2="get-element-by-id";
console.log(combo(s2));
//1.
var s1 = 'dgfhfgh254bhku289fgdhdy675gfh';
function f(str){
	console.log(str.match(/\d+/g));
}
f(s1)
//2.
var s2 = "get-element-by-id";
function f(str) {
	var regExp = /-(\w)/g;
	s=str.replace(regExp, function(match, m) { return m.toUpperCase(); })
	console.log(s); 
}
f(s2);
//3. 
var s3 = '<a href="http://www.baidu.com">笔试</a> <a href="http://www.edu2act.cn">笔试</a>正则';
function f(str){
	arr=str.split("<");
	var reg1 = /\"(.+)"\>/;
	var reg2 = /\"(.+)\"/g;
	var retVal1 = reg1.exec(arr[1]);
	var retVal2 = reg2.exec(arr[3]);
	console.log(retVal1[1],retVal2[1]);
}
f(s3);



try{
	var a=new Array(-5);
	console.log("xx");
}
catch(e){
	console.log(e);
}
finally{
	console.log("finally");
}


try{
	var x=y;
}
catch(e){
	console.log(e.name,e.message);
}
finally{
	console.log("finally");
}
