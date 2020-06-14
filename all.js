const todoinput=document.querySelector(".todo-input");
const todobutton=document.querySelector(".todo-button");
const todoList=document.querySelector(".todo-list");
const filterOption=document.querySelector(".filter-todo");
//console.log(todobutton)
todobutton.addEventListener('click',addTodo);
todoList.addEventListener("click",deleteCheck);
filterOption.addEventListener('click',filterTodo);

//trashButton.addEventListener("click",check);



//  aadtodo function//


function addTodo(event){
event.preventDefault();

//creating a div  and classname as todo//
const todoDiv=document.createElement("div");
 
todoDiv.classList.add("todo");

//creating a li classname as todo list//
const newtodo =document.createElement('li');
newtodo.innerText=todoinput.value;
newtodo.classList.add('todo-items');
//div=parent, li=child//
todoDiv.appendChild(newtodo);

todoinput.value='';
//CHECK MARK BUTTON//
const completeButton=document.createElement('button');
completeButton.innerHTML='<i class="fas fa-check-circle"></i>'
completeButton.classList.add("complete-btn");
todoDiv.appendChild(completeButton);

//trash button//
const trashButton=document.createElement('button');
trashButton.innerHTML='<i class="fas fa-trash"></i>'
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);
//Append todolist//
todoList.appendChild(todoDiv);





}



function deleteCheck(e){
    const item=e.target;
    console.log(item);
     if (item.classList[0] === "trash-btn"){
           const todo =item.parentElement;
           todo.classList.add("fall");
           todo.addEventListener('transitionend',function(){
            todo.remove();    
           })
           //todo.remove();
    }



    
     if(item.classList[0] === "complete-btn"){
            const todo=item.parentElement;
            todo.classList.toggle("completed");
            //todoinput.value=todo.children[0].innerText;
    }
 }
 function filterTodo(e){
        const todos=todoList.childNodes;
       //console.log(todos);
         //console.log(e.taget.value)
           todos.forEach(function(todo){
               switch(e.target.value){
                      case "all":
                             todo.style.display='flex';
                             break;
                             case "completed":
                                 if(todo.classList.contains("completed")){
                                        todo.style.display='flex';

                                 }   
                                 else{
                                        todo.style.display="none";
                                 }
                                 break;
                                 case "uncompleted":
                                   if(!todo.classList.contains("completed")){
                                          todo.style.display='flex';
  
                                   }   
                                   else{
                                          todo.style.display="none";
                                   }
                                   break;
                                   
               }
        }) 
  }


/* 
  function saveLocalTodos(todo){
         let todos;
         if(localStorage.getItem('todos')=== null){
                todos=[];
         }
         else{
                todos=JSON.parse(localStorage.getItem('todos'))
         }
         todos.push(todo);
         localStorage.setItem("todos",JSON.stringify(todos))
  }
 */