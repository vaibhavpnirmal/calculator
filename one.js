let buttons=document.querySelectorAll('#btn1')
let string=""

Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target);
       
        if(e.target.innerHTML=='='){
           string= eval(string);
           document.querySelector('input').value=string
           
        }else  if(e.target.innerHTML=='AC'){

            string=" "
            document.querySelector('input').value=string

        }else{
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string
    }})
})

let operator=document.querySelectorAll('#opt')
Array.from(operator).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target);
        if(e.target.innerHTML=='='){
            string= eval(string);
            document.querySelector('input').value=string
            
         }else{
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string
 } })
})

