var taskList = new DanhSachTask();
var validation = new Validation();

//lấy danh sách từ localStorage
getLocalStorage();


//thêm task
getEle("addItem").addEventListener("click",function(){
  var _task = getEle("newTask").value;

  var isValid = true;
  isValid &= validation.kiemTraRong(_task,"notiInput")
   && validation.trungTask(_task,"notiInput",taskList.arr);
  if(!isValid)
  return;

  var id = Math.random();
  var task = new Task(id,_task,"todo");
  taskList.addTask(task);
  taoBang(taskList.arr);
  setlocalStorage();
});

//Xóa task
function deleteTask(id){
  taskList._deleteTask(id);
  taoBang(taskList.arr);
  setlocalStorage();
}

//Update task
function changeTask(id){
var task = taskList.getTaskById(id);
task.status = task.status === "todo" ? "complete" : "todo";
taskList.updateTask(task);
taoBang(taskList.arr);
setlocalStorage();

}

function taoBang(arr){
  var todo = "";
  var todoCompleted = "";
  for(var i=0; i< arr.length; i++){
    if(arr[i].status === "todo"){
    todo += `
    <li>
      <p>${arr[i].taskName}<p>
      <button onclick="deleteTask(${arr[i].id})">
      <i class="fa fa-trash-alt"></i></button>
      <button class="complete" onclick="changeTask(${arr[i].id})">
      <i class="fas fa-check-circle"></i></button>
    </li>
    `;
    }else if(arr[i].status === "complete"){
      todoCompleted += 
      `
      <li>
        <p>${arr[i].taskName}<p>
        <button onclick="deleteTask(${arr[i].id})">
        <i class="fa fa-trash-alt"></i></button>
        <button class="complete" onclick="changeTask(${arr[i].id})">
        <i class="far fa-check-circle"></i></button>
      </li>
      `;
    }
  }
 getEle("todo").innerHTML = todo;
 getEle("completed").innerHTML = todoCompleted;
}

function setlocalStorage(){
  var arrString = JSON.stringify(taskList.arr);
  localStorage.setItem("TaskList",arrString);
}

function getLocalStorage(){
  if(localStorage.getItem("TaskList")){
    taskList.arr = JSON.parse(localStorage.getItem("TaskList"));
    taoBang(taskList.arr);
  }
}


function resetForm() {
   getEle("newTask").reset();

}



function getEle(id){
  return document.getElementById(id);
}