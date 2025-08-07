let inp=document.querySelector("input");
let btns=document.querySelectorAll(".btn");

let string="";

btns.forEach((btn)=>{
btn.addEventListener("click",(e)=>{
    if(e.target.innerHTML== "AC"){
        string="";
        inp.value=string;
    }
    else if(e.target.innerHTML== "DEL"){
        string=string.substring(0,string.length-1);
        inp.value=string;
    }
    else if(e.target.innerHTML== "="){
         string =eval(string);
        inp.value=string;
    }
    else{
        let item=e.target.innerHTML;
        string +=item;
        inp.value=string;
     }

})
})