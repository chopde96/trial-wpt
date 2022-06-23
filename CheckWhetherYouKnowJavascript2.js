window.addEventListener('DOMContentLoaded', ()=>{              // window of html is activated

  console.log("All tags are interpreted")                      // all tags of html is now ready for work
 
 let nn = document.querySelector("#nn")
 let pn = document.querySelector("#pn")
 
 
 nn.addEventListener('click', 
 ()=>{ 
 
 //nn.disabled=true;

 let nos = document.querySelector("#nos").value
 let result = parseInt(nos) + parseInt(1)
 
 document.querySelector("#msg").innerText = "The New no. is "+""+result            //<> innertext <>
 console.log("The New no. is "+""+result)
 
 
 })
 
 pn.addEventListener('click', 
 ()=>{ 
 
 let nos = document.querySelector("#nos").value
 let result = nos - 1
 
 document.querySelector("#msg").innerText = "The Previous no. is "+""+result
 console.log("The Previous no. is "+""+result)
 
 
 
  
})
 
 

})