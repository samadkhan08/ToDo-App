const inputValue = document.getElementById("inputFeild")
const addBtn = document.getElementById("listContainer")

function addTask(){
    if ( inputValue.value === '') {
        alert("Add Task")
    } else{
        const li = document.createElement("li") 
        li.innerHTML = inputValue.value;
        addBtn.appendChild(li);
        const clear = document.createElement("clear")
        clear.innerHTML = "X"
        li.appendChild(clear)

    }
    inputValue.value = "";
}






