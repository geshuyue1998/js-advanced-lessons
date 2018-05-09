new Date(year,mouth,date?,hours?,minutes?,seconds?,milloseconds?)
new Date(dateTimeStr)
new Date(timeValue)
new Date()
var date=new Date(2017,9,18,12,34,1);
console.log(date);

var date1=new Date(2017,9,18,12,34,1);
console.log(date1);

console.log(Date.now());
console.log((new Date()).getTime());

console.log(Date.parse("1970-01-01"));
console.log(Date.parse("1970-01-02"));

console.log(Date.UTC(2017,9,1));

var today=new Date();
today.setMonth(6);
console.log(today);
console.log(today.getDay());

var d=new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
console.log(d.getTImezoneOffset());

//Z区分时区和不区分时区
var today =new Date();
today.getTime();
today+3600*24;
var newDate=new Date(today+1000*3600*24);
newDate;


var d1 = new Date();
var d2 = Date();
console.log(d1,typeof d1);
console.log(d2,typeof d2);

var today=new Date();
var newDate=new Date(today.getTime()+1000*3600*24);
console.log(newDate);

console.log(new Date("1970-01-01").getTime());
console.log(new Date("1970-01-02").getTime());
console.log(new Date("1960-01-02").getTime());
console.log(new Date("1970-01-02") > new Date("1970-01-01"));
console.log(new Date("1970-01-02") - new Date("1970-01-01"));
console.log(new Date((new Date("1970-01-01").getTime())+86400000));


var d = new Date("1978-11-25");
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
console.log(d.getTimezoneOffset());
d.setDate(11);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
d.setFullYear(1999,5,3);
console.log(d.getFullYear(),d.getMonth(),d.getDay(),d.getDate(),d.getHours());
