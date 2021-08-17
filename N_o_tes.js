let i=0;
let y=0;
function save(){
  if(i===0){ 
  document.getElementById("empty").id="notEmpty";
  }
   let note= document.createElement("p");
   let del_= document.createElement("button");
   del_.innerText="Delete";
   del_.id=i;
   note.id=y;
   note.innerHTML=document.getElementById("value").value;
   document.getElementById("value").value="";
   i++;
   y++;
  document.getElementById("stored").appendChild(note);
note.appendChild(del_);
del_.addEventListener("click",function d(){
  document.getElementById(del_.id).remove();
})

}

