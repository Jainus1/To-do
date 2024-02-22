const inputBox = document.getElementById("input-box");
const listContariner = document.getElementById("list-container")


function addTask(){
    if(inputBox.value === ''){ 
        alert("Deberías escribir algo");
}
else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContariner.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span)

    }
inputBox.value = "";
}

listContariner.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);

 