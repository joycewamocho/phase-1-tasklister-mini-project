document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form")
  
  form.addEventListener("submit",(e) =>{
    e.preventDefault()
    createList(e.target.submit.value)
  })

  function createList(){
    const text = document.getElementById("new-task-description")
    const ul = document.getElementById("tasks")
    let li = document.createElement("li")
    let btn = document.createElement("button")

    btn.addEventListener("click",handleDelete)
    btn.textContent = "X"
    li.textContent = text.value
    li.appendChild(btn)
    ul.appendChild(li)
    text.value = ""
  }

  function handleDelete(e){
    e.target.parentNode.remove()
  }


});

