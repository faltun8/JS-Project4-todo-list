// TO-DO !



window.addEventListener('DOMContentLoaded', pageStart());

function pageStart(){
    const todoListElement = document.querySelector("#myUL");
    const myInp = document.querySelector("#myInput");

    if (localStorage.getItem('myTodoList') === null){
        var todoList = [];
        
    }else{
        var todoList = JSON.parse(localStorage.getItem("myTodoList"))
        displayTodos();
    }

    

    document.querySelector("#todo_button").addEventListener("click", addTodo);

   

function addTodo() {
    const listElementItemInner = {
        itemId : todoList.length,
        itemDesc : myInp.value,
        isDone : false
    };

    todoList.push(listElementItemInner);

    localStorage.setItem('myTodoList', JSON.stringify(todoList));

    displayTodos();
    console.log(todoList);
}

function doneTodo(todoId) {
    console.log("calisti2");
    todoList[todoId].isDone = true
    console.log(todoList[todoId].isDone);
    console.log("deneem")
    console.log(todoList);;
    localStorage.setItem('myTodoList', JSON.stringify(todoList));
    displayTodos();
}

function displayTodos() {
    todoListElement.innerHTML = "";
    myInp.value = "";

    localTodoList = JSON.parse(localStorage.getItem("myTodoList"))
    console.log(localTodoList);
    localTodoList.forEach(element => {

        const listElementItem = document.createElement('li');

        listElementItem.innerText = element.itemDesc;

        listElementItem.setAttribute('data-id',element.itemId);

        if(element.isDone) listElementItem.classList.add('checked')

        listElementItem.addEventListener("click", function (e) {
            console.log('calisti');
            const selectedId = e.target.getAttribute("data-id");
            doneTodo(selectedId);
          });


        todoListElement.appendChild(listElementItem);

    });
    
}



}


