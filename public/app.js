var input = document.getElementById("myInput")
var ul = document.getElementById("myUl")


function addItem() {
    var todoLi = document.createElement("li")
    todoLi.setAttribute("id", "list")
    todoLi.innerHTML = input.value

    var editBtn = document.createElement('button')
    editBtn.innerHTML = "Edit"
    editBtn.setAttribute("id", "todoeditBtn")
    editBtn.setAttribute("onclick", "editItem(this)")
    todoLi.appendChild(editBtn)

    var deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = "Delete"
    deleteBtn.setAttribute("id", "tododeleteBtn")
    deleteBtn.setAttribute("onclick", "deleteItem(this)")
    todoLi.appendChild(deleteBtn)

    console.log(editBtn, todoLi)
    ul.appendChild(todoLi)
    console.log(ul)

}


function editItem(e) {
    var todoLi = document.getElementById("list")
    e.parentNode.firstChild.nodeValue = prompt("Enter new value")
}
function deleteItem(e) {
    e.parentNode.remove()

}