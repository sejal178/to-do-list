const task=document.querySelector("#input-box");
const list=document.querySelector("#list-container");

const addTask=()=>{
    if(task.value===''){
        alert("Write something in the input box");
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=task.value;
        list.appendChild(li);
        let cross=document.createElement('span');
        cross.innerHTML="\u00d7";
        li.appendChild(cross);
    }
    task.value='';
    saveData();
}

list.addEventListener("click",(e)=>{
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
},false);

const saveData=()=>{
    localStorage.setItem("data",list.innerHTML);
}

const showData=()=>{
    list.innerHTML=localStorage.getItem("data");

}
showData();
