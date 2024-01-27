let TodoList=[];
    displayTodo();
    function addTodo(){
        let todoitem=document.querySelector('#todo-input').value;
        let duedate=document.querySelector('#todo-date').value;
        TodoList.push({todoitem:todoitem,duedate:duedate});
        document.querySelector('#todo-input').value='';
        document.querySelector('#todo-date').value='';
        displayTodo();
    }
    function displayTodo(){
        let todos=document.querySelector('.Todo-container');
        todos.innerHTML=``;
        for(let i=0;i<TodoList.length;i++){
            let {todoitem,duedate}=TodoList[i];
            todos.innerHTML+=`
            <span>${todoitem}</span>
            <span>${duedate}</span>
            <button class="delete-button" onclick="TodoList.splice(${i},1);
            displayTodo();" >Delete</button>
        `;
        }
    }