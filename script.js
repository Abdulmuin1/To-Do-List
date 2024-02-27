inputBot=document.getElementById("input-box");
listContainer=document.getElementById("list-container");
 
function addTask(){
    if(inputBot.value==""){
        alert("you must write somethind")
    }
    else {
        let li=document.createElement('li')
        li.innerHTML=inputBot.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBot.value="";
    saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked")
        saveData();
    }
    else if (e.target.tagName==="SPAN"){
e.target.parentElement.remove();
saveData();
    }
},false);
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML=localStorage.getItem('data')
}
showTask();