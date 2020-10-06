if (localStorage.getItem('myTodoList') === null){
    var todoList = [];
    
}else{
    var todoList = JSON.parse(localStorage.getItem("myTodoList"))
}

class TodoList {
  constructor(listElementParam) {
    this.todoListElement = listElementParam;
  }

  add(todoText) {

    const todoObject = {
      id: todoList.length,
      todoText: todoText,
      isDone: false,
      isRemove: false,
    };

    todoList.push(todoObject);
    localStorage.setItem('myTodoList', JSON.stringify(todoList));
    this.display();
  }

  remove(removeId){
    const selectedTodoIndex2 = todoList.findIndex((item) => item.id == removeId);
    todoList[selectedTodoIndex2].isRemove = true;

    this.display();
  }

  done(todoId) {
    const selectedTodoIndex = todoList.findIndex((item) => item.id == todoId);
    todoList[selectedTodoIndex].isDone = todoList[selectedTodoIndex].isDone == false ? true : false;

   
    localStorage.setItem('myTodoList', JSON.stringify(todoList));
    this.display();
  }

  display() {
    this.todoListElement.innerHTML = "";

    todoList.forEach((item) => {
      const listElement = document.createElement("li");
      const closingElement = document.createElement("button");  
  
      listElement.innerText = item.todoText;
      listElement.setAttribute("data-id", item.id);                       
      closingElement.setAttribute("data-id", item.id); 
      console.log(listElement);
      closingElement.classList.add("fa")
      closingElement.classList.add("fa-close");
      closingElement.style.float = "right"

      if (item.isDone) {
        listElement.classList.add("checked");
      }

      if (item.isRemove) {
        listElement.style.display = "none";
      }

      listElement.addEventListener("click", function (e) {
        const selectedId = e.target.getAttribute("data-id");
        myTodoList.done(selectedId);
      });

      closingElement.addEventListener("click", function (e) {   
        const selectedId = e.target.getAttribute("data-id");
        myTodoList.remove(selectedId);
      });

      listElement.appendChild(closingElement)
      this.todoListElement.appendChild(listElement);
    });
    document.querySelector("#myInput").value = "";
  }
}


const listSection = document.querySelector("#myUL");
var myTodoList = new TodoList(listSection);

window.addEventListener('DOMContentLoaded', pageStart());

function pageStart(){
    document.querySelector("#todo_button").addEventListener("click", function () {
        const todoText = document.querySelector("#myInput").value;
        myTodoList.add(todoText);  
    });

    myTodoList.display();
    console.log('caisiti');
}


document.querySelector("#myInput").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      const todoText = document.querySelector("#myInput").value;
      myTodoList.add(todoText);          // Enter key function..
    }
});
  
  


