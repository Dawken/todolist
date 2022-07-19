import {} from "./js-background"
"use strict";

const trash = document.querySelector(".trash");
const submit = document.querySelector("#submit");
const todo = document.querySelector(".todo");
const during = document.querySelector(".during");
const done = document.querySelector(".done");
const input = document.getElementById("task-input");
const index = JSON.parse(localStorage.todolist || '[]');
const duringlist = JSON.parse(localStorage.duringlist || '[]');
const donelist = JSON.parse(localStorage.donelist || '[]');
const todolistStringify = JSON.stringify(index);
const duringlistStringify = JSON.stringify(duringlist);
const donelistStringify = JSON.stringify(donelist);
localStorage.setItem("todolist", todolistStringify);
localStorage.setItem("duringlist", duringlistStringify);
localStorage.setItem("donelist", donelistStringify);
const generateId = () => {
    return String(Math.random());
};
const removeTask = (taskKey, taskId) => {
    const tasksList = JSON.parse(localStorage.getItem(taskKey));
    const newTaskList = tasksList.filter((task) => task.id !== taskId);
    localStorage.setItem(taskKey, JSON.stringify(newTaskList));
};
const createContainer = (taskListContainer, content) => {
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    setTimeout(addanimation, 150);
    function addanimation() {
        taskContainer.classList.toggle("animation");
    }
    taskListContainer === null || taskListContainer === void 0 ? void 0 : taskListContainer.appendChild(taskContainer);
    const todofirst = document.createElement('div');
    todofirst.setAttribute('id', "todofirst");
    taskContainer.appendChild(todofirst);
    todofirst.textContent = content.value;
    const button = document.createElement("button");
    button.classList.add("trash");
    todofirst.appendChild(button);
    const icon = document.createElement('icon');
    icon.classList.add("gg-trash");
    button.appendChild(icon);
    const options = document.createElement('div');
    options.classList.add("options");
    taskContainer.appendChild(options);
    const deletebtn = document.createElement('button');
    deletebtn.setAttribute('id', "delete");
    deletebtn.textContent = "Delete";
    options.appendChild(deletebtn);
    button.addEventListener("click", () => {
        options.classList.toggle("animation");
    });
    return taskContainer;
};
const createOptionsTodoBtn = () => {
    const todobtn = document.createElement('button');
    todobtn.setAttribute('id', "todo");
    todobtn.textContent = "To do";
    return todobtn;
};
const createOptionsDuringBtn = () => {
    const duringbtn = document.createElement('button');
    duringbtn.setAttribute('id', "during");
    duringbtn.textContent = "During";
    return duringbtn;
};
const createOptionsDoneBtn = () => {
    const donebtn = document.createElement('button');
    donebtn.setAttribute('id', "done");
    donebtn.textContent = "Done";
    return donebtn;
};
const createTask = (task, taskListContainer, taskStatus) => {
    const taskContainer = createContainer(taskListContainer, task);
    const options = taskContainer.querySelector(".options");
    const duringbtn = createOptionsDuringBtn();
    const donebtn = createOptionsDoneBtn();
    const todobtn = createOptionsTodoBtn();
    options === null || options === void 0 ? void 0 : options.appendChild(duringbtn);
    options === null || options === void 0 ? void 0 : options.appendChild(donebtn);
    options === null || options === void 0 ? void 0 : options.appendChild(todobtn);
    if (taskStatus === "todo") {
        todobtn.style.display = "none";
    }
    else if (taskStatus === "during") {
        duringbtn.style.display = "none";
    }
    else {
        donebtn.style.display = "none";
    }
    const deletebtn = options === null || options === void 0 ? void 0 : options.querySelector("#delete");
    deletebtn === null || deletebtn === void 0 ? void 0 : deletebtn.addEventListener("click", () => {
        taskContainer.classList.toggle("animation");
        options === null || options === void 0 ? void 0 : options.classList.remove("animation");
        setTimeout(deleteTask, 150, todo, taskContainer);
        setTimeout(deleteTask, 150, during, taskContainer);
        setTimeout(deleteTask, 150, done, taskContainer);
        removeTask("todolist", task.id);
        removeTask("donelist", task.id);
        removeTask("duringlist", task.id);
    });
    let currentTaskStatus = taskStatus;
    todobtn.addEventListener("click", () => {
        taskContainer.classList.toggle("animation");
        options === null || options === void 0 ? void 0 : options.classList.remove("animation");
        setTimeout(addanimation, 150, taskContainer);
        todo === null || todo === void 0 ? void 0 : todo.appendChild(taskContainer);
        const savedToDoList = JSON.parse(localStorage.getItem("todolist"));
        savedToDoList.push(task);
        localStorage.setItem('todolist', JSON.stringify(savedToDoList));
        removeTask("duringlist", task.id);
        removeTask("donelist", task.id);
        todobtn.style.display = "none";
        if (currentTaskStatus === "done") {
            donebtn.style.removeProperty('display');
        }
        else {
            duringbtn.style.removeProperty('display');
        }
        currentTaskStatus = 'todo';
    });
    duringbtn.addEventListener("click", () => {
        taskContainer.classList.toggle("animation");
        options === null || options === void 0 ? void 0 : options.classList.remove("animation");
        setTimeout(addanimation, 150, taskContainer);
        during === null || during === void 0 ? void 0 : during.appendChild(taskContainer);
        const savedDuringList = JSON.parse(localStorage.getItem("duringlist"));
        savedDuringList.push(task);
        localStorage.setItem('duringlist', JSON.stringify(savedDuringList));
        removeTask("todolist", task.id);
        removeTask("donelist", task.id);
        duringbtn.style.display = "none";
        if (currentTaskStatus === "todo") {
            todobtn.style.removeProperty('display');
        }
        else {
            donebtn.style.removeProperty('display');
        }
        currentTaskStatus = 'during';
    });
    donebtn.addEventListener("click", () => {
        taskContainer.classList.toggle("animation");
        options === null || options === void 0 ? void 0 : options.classList.remove("animation");
        setTimeout(addanimation, 150, taskContainer);
        done === null || done === void 0 ? void 0 : done.appendChild(taskContainer);
        const savedDoneList = JSON.parse(localStorage.getItem("donelist"));
        savedDoneList.push(task);
        localStorage.setItem('donelist', JSON.stringify(savedDoneList));
        removeTask("todolist", task.id);
        removeTask("duringlist", task.id);
        donebtn.style.display = "none";
        if (currentTaskStatus === "during") {
            duringbtn.style.removeProperty('display');
        }
        else {
            todobtn.style.removeProperty('display');
        }
        currentTaskStatus = 'done';
    });
};
submit === null || submit === void 0 ? void 0 : submit.addEventListener("click", () => {
    const task = {
        value: input.value,
        id: generateId()
    };
    const todoListToUpdate = JSON.parse(localStorage.getItem('todolist'));
    todoListToUpdate.push(task);
    localStorage.setItem('todolist', JSON.stringify(todoListToUpdate));
    if (task.value === '') {
        alert("Please fill the task");
        return;
    }
    input.value = '';
    createTask(task, todo, "todo");
});
const deleteTask = (taskList, taskContainer) => {
    taskList.removeChild(taskContainer);
};
const addanimation = (taskContainer) => {
    taskContainer.classList.toggle("animation");
};
window.addEventListener("load", () => {
    for (let i = 0; i < index.length; i++) {
        const content = index[i];
        createTask(content, todo, "todo");
    }
    for (let i = 0; i < duringlist.length; i++) {
        const content = duringlist[i];
        createTask(content, during, "during");
    }
    for (let i = 0; i < donelist.length; i++) {
        const content = donelist[i];
        createTask(content, done, "done");
    }
});
