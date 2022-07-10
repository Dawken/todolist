
const trash = document.querySelector(".trash")
const submit = document.querySelector("#submit")
const todo = document.querySelector(".todo")
const during = document.querySelector(".during")
const done = document.querySelector(".done")
const input = document.getElementById("task-input")

const todolist =  JSON.parse(localStorage.todolist || '[]')
const duringlist =  JSON.parse(localStorage.duringlist || '[]')
const donelist =  JSON.parse(localStorage.donelist || '[]')

const todolistStringify = JSON.stringify(todolist)
const duringlistStringify = JSON.stringify(duringlist)
const donelistStringify = JSON.stringify(donelist)

localStorage.setItem("todolist", todolistStringify)
localStorage.setItem("duringlist", duringlistStringify)
localStorage.setItem("donelist", donelistStringify)

const todoContent = JSON.parse(localStorage.getItem("todolist"))
const duringcontent = JSON.parse(localStorage.getItem("duringlist"))
const donecontent = JSON.parse(localStorage.getItem("donelist"))

const generateId = () => {
    return String(Math.random())
}

const removeTask = (taskKey, taskId) => {
    const tasksList = JSON.parse(localStorage.getItem(taskKey))
    const newTaskList = tasksList.filter(task => task.id !== taskId)
    localStorage.setItem(taskKey, JSON.stringify(newTaskList))
}

const createContainer = (taskListContainer, content) => {

    const taskContainer = document.createElement("div")
    taskContainer.classList.add("taskContainer")

    setTimeout(addanimation, 150)

    function addanimation() {
        taskContainer.classList.toggle("animation")
    }

    taskListContainer.appendChild(taskContainer)

    const todofirst = document.createElement('div')
    todofirst.setAttribute('id', "todofirst")

    taskContainer.appendChild(todofirst)

    todofirst.textContent = content.value

    const button = document.createElement("button")
    button.classList.add("trash")

    todofirst.appendChild(button)

    const icon = document.createElement('icon')
    icon.classList.add("gg-trash")
    button.appendChild(icon)

    const options = document.createElement('div')
    options.classList.add("options")

    taskContainer.appendChild(options)

    const deletebtn = document.createElement('button')
    deletebtn.setAttribute('id', "delete")
    deletebtn.textContent = "Delete"
    options.appendChild(deletebtn)

    button.addEventListener("click", () => {
        options.classList.toggle("animation")
    });
    return taskContainer
}

const createOptionsTodoBtn = () => {
    const todobtn = document.createElement('button')
    todobtn.setAttribute('id', "todo")
    todobtn.textContent = "To do"
    return todobtn
}
const createOptionsDuringBtn = () => {
    const duringbtn = document.createElement('button')
    duringbtn.setAttribute('id', "during")
    duringbtn.textContent = "During"
    return duringbtn
}
const createOptionsDoneBtn = () => {
    const donebtn = document.createElement('button')
    donebtn.setAttribute('id', "done")
    donebtn.textContent = "Done"
    return donebtn
}

const createTask = (task, taskListContainer, taskStatus) => {
    const taskContainer = createContainer(taskListContainer, task)
    const options = taskContainer.querySelector(".options")
    const duringbtn = createOptionsDuringBtn()
    const donebtn = createOptionsDoneBtn()
    const todobtn = createOptionsTodoBtn()
    options.appendChild(duringbtn)
    options.appendChild(donebtn)
    options.appendChild(todobtn)
    if(taskStatus === "todo") {
        todobtn.style.display="none"
    }
    else if(taskStatus === "during") {
        duringbtn.style.display="none"
    }
    else {
        donebtn.style.display="none"
    }


    const deletebtn = options.querySelector("#delete")
    deletebtn.addEventListener("click", () => {
        taskContainer.classList.toggle("animation")
        options.classList.remove("animation")
        setTimeout(deleteTask, 150, todo, taskContainer)
        setTimeout(deleteTask, 150, during, taskContainer)
        setTimeout(deleteTask, 150, done, taskContainer)
        removeTask("todolist", task.id)
        removeTask("donelist", task.id)
        removeTask("duringlist", task.id)
    })
    todobtn.addEventListener("click", () => {
        taskContainer.classList.toggle("animation")
        options.classList.remove("animation")
        setTimeout(addanimation, 150, taskContainer)
        todo.appendChild(taskContainer)
        const savedToDoList = JSON.parse(localStorage.getItem("todolist"))
        savedToDoList.push(task)
        localStorage.setItem('todolist', JSON.stringify(savedToDoList))
        removeTask("duringlist", task.id)
        removeTask("donelist", task.id)
    })
    duringbtn.addEventListener("click", () => {
        taskContainer.classList.toggle("animation")
        options.classList.remove("animation")
        setTimeout(addanimation, 150, taskContainer)
        during.appendChild(taskContainer)
        const savedDuringList = JSON.parse(localStorage.getItem("duringlist"))
        savedDuringList.push(task)
        localStorage.setItem('duringlist', JSON.stringify(savedDuringList))
        removeTask("todolist", task.id)
        removeTask("donelist", task.id)
    })
    donebtn.addEventListener("click", () => {
        taskContainer.classList.toggle("animation")
        options.classList.remove("animation")
        setTimeout(addanimation, 150, taskContainer)
        done.appendChild(taskContainer)
        const savedDoneList = JSON.parse(localStorage.getItem("donelist"))
        savedDoneList.push(task)
        localStorage.setItem('donelist', JSON.stringify(savedDoneList))
        removeTask("todolist", task.id)
        removeTask("duringlist", task.id)
    })
}


submit.addEventListener("click",  () => {


    const task = {
        value: input.value,
        id: generateId()
    }
    const todoListToUpdate = JSON.parse(localStorage.getItem('todolist'))
    todoListToUpdate.push(task)
    localStorage.setItem('todolist', JSON.stringify(todoListToUpdate))

    if (task.value === '') {
        alert("Please fill the task")
        return
    }
    input.value = ''
    createTask(task, todo, "todo")

});
const deleteTask = (taskList, taskContainer) => {
    taskList.removeChild(taskContainer)
}
const addanimation = (taskContainer) => {
    taskContainer.classList.toggle("animation")
}
window.addEventListener("load", () => {


    for(let i = 0; i<todolist.length ; i++) {

        const content = todolist[i]
        createTask(content, todo, "todo")
    }
    for(let i = 0; i<duringlist.length ; i++) {
        const content = duringlist[i]
        createTask(content, during, "during")
    }
    for(let i = 0; i<donelist.length ; i++) {
        const content = donelist[i]
        createTask(content, done, "done")
    }
})


//
// for(let i = 0; i<donecontent.length ; i++) {
//     const removeelement = () => {
//         donelist.splice(i, 1)
//         localStorage.setItem('donelist', JSON.stringify(donelist));
//         JSON.parse(localStorage.getItem('donelist'))
//     }
//
//     const content = donecontent[i]
//     window.addEventListener("load", () => {
//
//
//         const taskContainer = document.createElement("div")
//         taskContainer.classList.add("taskContainer")
//
//         setTimeout(addanimation, 150)
//
//         function addanimation() {
//             taskContainer.classList.toggle("animation")
//         }
//
//         done.appendChild(taskContainer)
//
//         const todofirst = document.createElement('div')
//         todofirst.setAttribute('id', "todofirst")
//
//         taskContainer.appendChild(todofirst)
//
//         todofirst.textContent = content
//
//         const button = document.createElement("button")
//         button.classList.add("trash")
//
//         todofirst.appendChild(button)
//
//         const i = document.createElement('i')
//         i.classList.add("gg-trash")
//         button.appendChild(i)
//
//         const options = document.createElement('div')
//         options.classList.add("options")
//
//         taskContainer.appendChild(options)
//
//         const deletebtn = document.createElement('button')
//         deletebtn.setAttribute('id', "delete")
//         deletebtn.textContent = "Delete"
//         options.appendChild(deletebtn)
//
//         deletebtn.addEventListener("click", () => {
//             taskContainer.classList.toggle("animation")
//             options.remove("animation")
//             removeelement()
//             setTimeout(deletetodo, 150)
//             setTimeout(deleteduring, 150)
//             setTimeout(deletedone, 150)
//
//         })
//         function deletetodo() {
//             bottom.removeChild(taskContainer)
//         }
//         function deleteduring() {
//             during.removeChild(taskContainer)
//         }
//         function deletedone() {
//             done.removeChild(taskContainer)
//         }
//         // ---------------------------------------------TODO------------------------------------------
//         const todobtn = document.createElement('button')
//         todobtn.setAttribute('id', "todo")
//         todobtn.textContent = "To do"
//         options.appendChild(todobtn)
//
//
//
//         todobtn.addEventListener("click", () => {
//             taskContainer.classList.remove("animation")
//             setTimeout(addanimation, 150)
//             bottom.appendChild(taskContainer)
//             options.classList.remove("animation")
//             todolist.push(content)
//             localStorage.setItem('todolist', JSON.stringify(todolist));
//             JSON.parse(localStorage.getItem('todolist'))
//             removeelement()
//             options.removeChild(todobtn)
//             options.appendChild(duringbtn)
//             options.appendChild(donebtn)
//
//         })
//
//         const duringbtn = document.createElement('button')
//         duringbtn.setAttribute('id', "during")
//         duringbtn.textContent = "During"
//         options.appendChild(duringbtn)
//
//         duringbtn.addEventListener("click", () => {
//             taskContainer.classList.remove("animation")
//             setTimeout(addanimation, 150)
//             during.appendChild(taskContainer)
//             options.classList.remove("animation")
//             duringlist.push(content)
//             localStorage.setItem('duringlist', JSON.stringify(duringlist));
//             JSON.parse(localStorage.getItem('duringlist'))
//             removeelement()
//             options.removeChild(duringbtn)
//             options.appendChild(todobtn)
//             options.appendChild(donebtn)
//
//
//         })
//
//         const donebtn = document.createElement('button')
//         donebtn.setAttribute('id', "done")
//         donebtn.textContent = "Done"
//
//         donebtn.addEventListener("click", () => {
//             taskContainer.classList.remove("animation")
//             setTimeout(addanimation, 150)
//             done.appendChild(taskContainer)
//             options.classList.remove("animation")
//             donelist.push(content)
//             localStorage.setItem('donelist', JSON.stringify(donelist));
//             JSON.parse(localStorage.getItem('donelist'))
//             removeelement()
//             options.removeChild(donebtn)
//             options.appendChild(duringbtn)
//             options.appendChild(todobtn)
//
//         })
//
//
//         button.addEventListener("click", () => {
//             options.classList.toggle("animation")
//         });
//     })
// }






