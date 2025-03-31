//your JS code here. If required.
let age=document.getElementById('age')
let name=document.getElementById('name')
function myFunction(){
	
	if(age.value=='' || name.value==''){
		alert("Please enter valid details")
		return
	}
	//alert('in the function')
	let promise=new Promise(function(res,rej){
		if(age.value>18){ 
			setTimeout(()=>res("Welcome, . You can vote."),4000)
		}	
		else { 
			setTimeout(()=>rej("Oh sorry . You aren't old enough."),4000)
			 }
	})
	promise.then(e=>alert(e))
	.catch(e=>alert(e))
}
/*
function pro(){
	//alert('in the function')
	return new Promise((res,rej)=>{
		if(age.value>18){ 
			setTimeout(()=>res("Welcome, . You can vote."),4000)
		}	
		else { 
			setTimeout(()=>rej("Oh sorry . You aren't old enough."),4000)
			 }
	})
}
*/