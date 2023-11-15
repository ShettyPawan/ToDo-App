
let taskList =[];
displayTask();

function addButton(){
  let inputTask = document.querySelector('#inputField').value ;
  let inputDate = document.querySelector('#inputDate').value ;
  //console.log(inputTask); // checking if input working fine
  taskList.push({taskName:inputTask, dueDate: inputDate});
  document.querySelector('#inputField').value = '' ;
  document.querySelector('#inputDate').value = '' ; 
  displayTask() ;
}



function displayTask(){
  let taskContainer = document.querySelector('.contTask');
  let addHTML = '';
  
  for( i = 0; i < taskList.length ; i++ ){
    let {taskName,dueDate} = taskList[i];
    addHTML +=`
      <span>${taskName}</span><span>${dueDate}</span>
      <button id = "deleteButton" onclick="deleteTask(${i});">Delete Task</button>
    `;
  }
  taskContainer.innerHTML = addHTML;
  //console.log(addHTML); //to see in console the current html
}

function deleteTask(index){
  taskList.splice(index,1);
  displayTask();
}