var j1='[{"name":"jack","obj":{"x":1,"y":2},"arr":[1,2,"3"]},2]';
var j2='{"x":1,"y":"2"}';
var a1=[1,"x",true,{y:2,z:3}];
var jsonStrArr1=JSON.stringify(a1);
console.log(jsonStrArr1);
console.log(a1);
function  replacer(key,value){
	if(typeof value==="string"){
		return undefined;
	}
	return value;
}
var foo={
	model:"box",
	week:45,
	transport:"car",
	month:7
};
var jsonString1=JSON.stringify(foo,replacer);
console.log(jsonString1);

function  replacer(key,value){
	if(typeof value==="string"){
		return unll;
	}
	return value;
}
var foo={
	model:"box",
	week:45,
	transport:"car",
	month:7
};
var jsonString1=JSON.stringify(foo,replacer);
console.log(jsonString1);

var o6=JSON.parse('{"p":5}',function(k,v){
	console.log("回调函数");
	if(k==='')return v;

});
console.log(o6);
