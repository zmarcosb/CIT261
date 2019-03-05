const toDoTime = document.getElementById("toDoTime");
const toDoAct = document.getElementById("toDoAct");
const insert = document.getElementById("insert");
const output = document.getElementById("output");

insert.onclick = function(){
    const key = toDoTime.value;
    const value = toDoAct.value;
        
    
    if(key && value){
        localStorage.setItem(key, value);
        location.reload();
        
    }
};

for (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    
    output.innerHTML += `${key}: ${value}<br />`;
}