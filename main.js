// Add Data
var input  = document.getElementById("input")
var button = document.getElementById("btn")
var displaydata = document.getElementById("containerofalldata")



var todolist=[]
button.addEventListener("click",function(){
    if(input.value.length == 0){
        alert("Please Enter a Task")
    }
    else{
    var todoinput = {
        tId:todolist.length==0? 0 : todolist.length,
        todo:input.value,
    }
    todolist.push(todoinput)
    localStorage.setItem("To Do List", JSON.stringify(todolist))
    input.value = "";
    display(todolist)
    }
})
if(JSON.parse(localStorage.getItem("To Do List")) != null){
    todolist = JSON.parse(localStorage.getItem("To Do List"));
    display(todolist)
}

// For Display Data
function display (view){
  var todocontainer = "";
  for (var i = 0; i < view.length; i++) {
    todocontainer += `
    <table class="outputtable">
      <tr>
        <td>
          <input
            type="checkbox"
            id="todocheck"
            class="checkmark"
            onClick="donetodo(${view[i].tId})"
          />
        </td>
        <td><p id="mypar" class="mypar">${view[i].todo}</p></td>
        <td>
          <button class="delete" onClick="deletetodo(${view[i].tId})">
            Delete
          </button>
        </td>
      </tr>
    </table>
        `;
  }
  displaydata.innerHTML = todocontainer;
}

// Done
var isChecked = false
function donetodo(id) {
var paraghraphs = document.getElementsByClassName("mypar");
var pindex = todolist.findIndex(gettodoindex);
    function gettodoindex(item) {
      return item.tId == id;
    }
    if (!isChecked) {
    paraghraphs[pindex].style.textDecoration = "line-through"
    isChecked = true;
  }
else{
    paraghraphs[pindex].style.textDecoration = "none";
     isChecked = false;
  }
}


// Delete Data
function deletetodo(id) {
    var pindex = todolist.findIndex(gettodoindex)
    function gettodoindex(item){
        return item.tId == id;
    }
    todolist.splice(pindex,1);
    localStorage.setItem("To Do List", JSON.stringify(todolist))
    display(todolist)
}

