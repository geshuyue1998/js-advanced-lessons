// window.onload=function (e){
// 	console.log(e.target);
// 	console.log(this.)
// 	//console.log("window.onload");
// 	var div1=document.getElementsById('div1');
// 	div1.onclick=function (e){
// 		//console.log("window.onload");
// 		console.log(e.clientX,e.clientY,e.crtlKey);
// 		console.log(e.target,this);
// 		console.log(e.target,e.this)
// 	};
// 	div1.ondrag=function (){
// 		//console.log("div1.ondrag");
		
// 	}

// 	var eventHander=function(e){
// 		console.log(e.type);
// 		console.log(e.target);
// 		console.log(e.clientX,e.clientY)
// 		console.log(this,"-----",e.target.id);
// 		console.log(e);
// 		console.log(e._proto_);
// 		console.log(e._proto_._proto_);
// 		console.log(e._proto_._proto_._proto_);
// 		console.log(e._proto_._proto_._proto_._proto_);
// 		for(var k in e){
// 			console.log(k,e[k]);
// 		}
// 		for(var k in e._proto_){
// 			console.log(k);
// 		}
// 		for(var k in e._proto_._proto_){
// 			console.log(k);
// 		}
// 			for(var k in e._proto_._proto_._proto_){
// 			console.log(k);
// 		}
// 	}
// 	div1.onclick=eventHander;
// 	div2.onclick=eventHander;
// 	document.addEventListener("xx",function(){console.log("11")}
// 	document.dispatchEvent(new Event("xx"));
// }
// function div2click(e){
// 	console.log(e.target);
// }

// window.onload=function(e){
// 	var div1=document.getElementById("div1");
// 	var div2=document.getElementById("div2");
// 	var eventHander=function(e){
// 		console.log(e.clientX,e.clientY);
// 	}
// 	div1.onclick=eventHander;
// 	div1.onclick=function(){
// 		console.log("xx");
// 	}
// 	div2.onclick=eventHander;
// 	div2.onclick=null;
// }

window.onload=function(e){
	var div1=document.getElementById("div1");
	var div2=document.getElementById("div2");
	var eventHander=function(e){
		console.log(e.clientX,e.clientY);
	}
	div1.addEventListener("click",eventHander);
	//div1.addEventListener("click",eventHander,false);
	div1.addEventListener("click",function(){
		console.log("xx");
	});
	div2.addEventListener("click",eventHander);
	//div2.addEventListener("click",eventHander,false);
	div2.removeEventListener("click",eventHander);
	console.log(div2._proto_);
	console.log(div2._proto_._proto_);
	console.log(div2._proto_._proto_._proto_);
 	console.log(div2._proto_._proto_._proto_._proto_);
}