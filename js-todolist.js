
const trash = document.querySelector(".trash")
const submit = document.querySelector("#submit")
const todo = document.querySelector(".todo")
const during = document.querySelector(".during")
const done = document.querySelector(".done")
const bottom = document.querySelector(".bottom")
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

const todocontent = JSON.parse(localStorage.getItem("todolist"))
const duringcontent = JSON.parse(localStorage.getItem("duringlist"))
const donecontent = JSON.parse(localStorage.getItem("donelist"))

for(let i = 0; i<todocontent.length ; i++) {

const removeelement = () => {
    todolist.splice(i,1)
    localStorage.setItem('todolist', JSON.stringify(todolist));
    JSON.parse(localStorage.getItem('todolist'))
}

    const content = todocontent[i]
    window.addEventListener("load", () => {


        todo.appendChild(bottom)


        const taskContainer = document.createElement("div")
        taskContainer.classList.add("taskContainer")

        setTimeout(addanimation, 150)

        function addanimation() {
            taskContainer.classList.toggle("animation")
        }

        bottom.appendChild(taskContainer)


        const todofirst = document.createElement('div')
        todofirst.setAttribute('id', "todofirst")

        taskContainer.appendChild(todofirst)

            todofirst.textContent = content

        const button = document.createElement("button")
        button.classList.add("trash")

        todofirst.appendChild(button)

        const i = document.createElement('i')
        i.classList.add("gg-trash")
        button.appendChild(i)

        const options = document.createElement('div')
        options.classList.add("options")

        taskContainer.appendChild(options)

        const deletebtn = document.createElement('button')
        deletebtn.setAttribute('id', "delete")
        deletebtn.textContent = "Delete"
        options.appendChild(deletebtn)

        deletebtn.addEventListener("click", () => {
            taskContainer.classList.toggle("animation")
            options.remove("animation")

            removeelement()

            setTimeout(deletetodo, 150)
            setTimeout(deleteduring, 150)
            setTimeout(deletedone, 150)


        })
        function deletetodo() {
            bottom.removeChild(taskContainer)
        }

        function deleteduring() {
            during.removeChild(taskContainer)
        }

        function deletedone() {
            done.removeChild(taskContainer)
        }

        // ---------------------------------------------TODO------------------------------------------
        const todobtn = document.createElement('button')
        todobtn.setAttribute('id', "todo")
        todobtn.textContent = "To do"
        options.appendChild(todobtn)
        options.removeChild(todobtn)


        todobtn.addEventListener("click", () => {
            taskContainer.classList.remove("animation")
            setTimeout(addanimation, 150)
            bottom.appendChild(taskContainer)
            options.classList.remove("animation")
            todolist.push(content)
            localStorage.setItem('todolist', JSON.stringify(todolist));
            JSON.parse(localStorage.getItem('todolist'))
            removeelement()
            options.removeChild(todobtn)
            options.appendChild(duringbtn)
            options.appendChild(donebtn)
            location.reload(true) // ========================================TEMPORARY SOLUTION==========
        })

        // ---------------------------------------------DURING----------------------------------------------
        const duringbtn = document.createElement('button')
        duringbtn.setAttribute('id', "during")
        duringbtn.textContent = "During"
        options.appendChild(duringbtn)

        duringbtn.addEventListener("click", () => {
            taskContainer.classList.remove("animation")
            setTimeout(addanimation, 150)
            during.appendChild(taskContainer)
            options.classList.remove("animation")
            duringlist.push(content)
            localStorage.setItem('duringlist', JSON.stringify(duringlist));
            JSON.parse(localStorage.getItem('duringlist'))
            removeelement()
            options.removeChild(duringbtn)
            options.appendChild(todobtn)
            options.appendChild(donebtn)
            location.reload(true)

        })

        const donebtn = document.createElement('button')
        donebtn.setAttribute('id', "done")
        donebtn.textContent = "Done"
        options.appendChild(donebtn)

        donebtn.addEventListener("click", () => {
            taskContainer.classList.remove("animation")
            setTimeout(addanimation, 150)
            done.appendChild(taskContainer)
            options.classList.remove("animation")
            donelist.push(content)
            localStorage.setItem('donelist', JSON.stringify(donelist));
            JSON.parse(localStorage.getItem('donelist'))
            removeelement()
            options.removeChild(donebtn)
            options.appendChild(duringbtn)
            options.appendChild(todobtn)
            location.reload(true)
        })

        button.addEventListener("click", () => {
            options.classList.toggle("animation")
        });
    })
}

//=====================================================================DURING================================================
for(let i = 0; i<duringcontent.length ; i++) {
    const removeelement = () => {
        duringlist.splice(i, 1)
        localStorage.setItem('duringlist', JSON.stringify(duringlist));
        JSON.parse(localStorage.getItem('duringlist'))
    }

    const content = duringcontent[i]
    window.addEventListener("load", () => {


        const taskContainer = document.createElement("div")
        taskContainer.classList.add("taskContainer")

        setTimeout(addanimation, 150)

        function addanimation() {
            taskContainer.classList.toggle("animation")
        }

        during.appendChild(taskContainer)

        const todofirst = document.createElement('div')
        todofirst.setAttribute('id', "todofirst")

        taskContainer.appendChild(todofirst)

        todofirst.textContent = content

        const button = document.createElement("button")
        button.classList.add("trash")

        todofirst.appendChild(button)

        const i = document.createElement('i')
        i.classList.add("gg-trash")
        button.appendChild(i)

        const options = document.createElement('div')
        options.classList.add("options")

        taskContainer.appendChild(options)

        const deletebtn = document.createElement('button')
        deletebtn.setAttribute('id', "delete")
        deletebtn.textContent = "Delete"
        options.appendChild(deletebtn)

        deletebtn.addEventListener("click", () => {
            taskContainer.classList.toggle("animation")
            options.remove("animation")

            removeelement()

            setTimeout(deletetodo, 150)
            setTimeout(deleteduring, 150)
            setTimeout(deletedone, 150)


        })

        function deletetodo() {
            bottom.removeChild(taskContainer)
        }

        function deleteduring() {
            during.removeChild(taskContainer)
        }

        function deletedone() {
            done.removeChild(taskContainer)
        }

        // ---------------------------------------------TODO------------------------------------------
        const todobtn = document.createElement('button')
        todobtn.setAttribute('id', "todo")
        todobtn.textContent = "To do"
        options.appendChild(todobtn)



        todobtn.addEventListener("click", () => {
            taskContainer.classList.remove("animation")
            setTimeout(addanimation, 150)
            bottom.appendChild(taskContainer)
            options.classList.remove("animation")
            todolist.push(content)
            localStorage.setItem('todolist', JSON.stringify(todolist));
            JSON.parse(localStorage.getItem('todolist'))
            removeelement()
            options.removeChild(todobtn)
            options.appendChild(duringbtn)
            options.appendChild(donebtn)
            location.reload(true)
        })

        const duringbtn = document.createElement('button')
        duringbtn.setAttribute('id', "during")
        duringbtn.textContent = "During"


        duringbtn.addEventListener("click", () => {
            taskContainer.classList.remove("animation")
            setTimeout(addanimation, 150)
            during.appendChild(taskContainer)
            options.classList.remove("animation")
            duringlist.push(content)
            localStorage.setItem('duringlist', JSON.stringify(duringlist));
            JSON.parse(localStorage.getItem('duringlist'))
            removeelement()
            options.removeChild(duringbtn)
            options.appendChild(todobtn)
            options.appendChild(donebtn)
            location.reload(true)

        })


        const donebtn = document.createElement('button')
        donebtn.setAttribute('id', "done")
        donebtn.textContent = "Done"
        options.appendChild(donebtn)

        donebtn.addEventListener("click", () => {
            taskContainer.classList.remove("animation")
            setTimeout(addanimation, 150)
            done.appendChild(taskContainer)
            options.classList.remove("animation")
            donelist.push(content)
            localStorage.setItem('donelist', JSON.stringify(donelist));
            JSON.parse(localStorage.getItem('donelist'))
            removeelement()
            options.removeChild(donebtn)
            options.appendChild(duringbtn)
            options.appendChild(todobtn)
            location.reload(true)
        })

        button.addEventListener("click", () => {
            options.classList.toggle("animation")
        });
    })
}


//==============================================================DONE========================================================
for(let i = 0; i<donecontent.length ; i++) {
    const removeelement = () => {
        donelist.splice(i, 1)
        localStorage.setItem('donelist', JSON.stringify(donelist));
        JSON.parse(localStorage.getItem('donelist'))
    }

    const content = donecontent[i]
    window.addEventListener("load", () => {


        const taskContainer = document.createElement("div")
        taskContainer.classList.add("taskContainer")

        setTimeout(addanimation, 150)

        function addanimation() {
            taskContainer.classList.toggle("animation")
        }

        done.appendChild(taskContainer)

        const todofirst = document.createElement('div')
        todofirst.setAttribute('id', "todofirst")

        taskContainer.appendChild(todofirst)

        todofirst.textContent = content

        const button = document.createElement("button")
        button.classList.add("trash")

        todofirst.appendChild(button)

        const i = document.createElement('i')
        i.classList.add("gg-trash")
        button.appendChild(i)

        const options = document.createElement('div')
        options.classList.add("options")

        taskContainer.appendChild(options)

        const deletebtn = document.createElement('button')
        deletebtn.setAttribute('id', "delete")
        deletebtn.textContent = "Delete"
        options.appendChild(deletebtn)

        deletebtn.addEventListener("click", () => {
            taskContainer.classList.toggle("animation")
            options.remove("animation")
            removeelement()
            setTimeout(deletetodo, 150)
            setTimeout(deleteduring, 150)
            setTimeout(deletedone, 150)

        })
        function deletetodo() {
            bottom.removeChild(taskContainer)
        }
        function deleteduring() {
            during.removeChild(taskContainer)
        }
        function deletedone() {
            done.removeChild(taskContainer)
        }
        // ---------------------------------------------TODO------------------------------------------
        const todobtn = document.createElement('button')
        todobtn.setAttribute('id', "todo")
        todobtn.textContent = "To do"
        options.appendChild(todobtn)



        todobtn.addEventListener("click", () => {
            taskContainer.classList.remove("animation")
            setTimeout(addanimation, 150)
            bottom.appendChild(taskContainer)
            options.classList.remove("animation")
            todolist.push(content)
            localStorage.setItem('todolist', JSON.stringify(todolist));
            JSON.parse(localStorage.getItem('todolist'))
            removeelement()
            options.removeChild(todobtn)
            options.appendChild(duringbtn)
            options.appendChild(donebtn)
            location.reload(true)
        })

        const duringbtn = document.createElement('button')
        duringbtn.setAttribute('id', "during")
        duringbtn.textContent = "During"
        options.appendChild(duringbtn)

        duringbtn.addEventListener("click", () => {
            taskContainer.classList.remove("animation")
            setTimeout(addanimation, 150)
            during.appendChild(taskContainer)
            options.classList.remove("animation")
            duringlist.push(content)
            localStorage.setItem('duringlist', JSON.stringify(duringlist));
            JSON.parse(localStorage.getItem('duringlist'))
            removeelement()
            options.removeChild(duringbtn)
            options.appendChild(todobtn)
            options.appendChild(donebtn)
            location.reload(true)

        })

        const donebtn = document.createElement('button')
        donebtn.setAttribute('id', "done")
        donebtn.textContent = "Done"

        donebtn.addEventListener("click", () => {
            taskContainer.classList.remove("animation")
            setTimeout(addanimation, 150)
            done.appendChild(taskContainer)
            options.classList.remove("animation")
            donelist.push(content)
            localStorage.setItem('donelist', JSON.stringify(donelist));
            JSON.parse(localStorage.getItem('donelist'))
            removeelement()
            options.removeChild(donebtn)
            options.appendChild(duringbtn)
            options.appendChild(todobtn)
            location.reload(true)
        })



        button.addEventListener("click", () => {
            options.classList.toggle("animation")
        });
    })
}







//------------------------------------------------submit----------------------------



    submit.addEventListener("click", () => {

        todolist.push(input.value)
        console.log(todolist)
        localStorage.setItem('todolist', JSON.stringify(todolist));
        JSON.parse(localStorage.getItem('todolist'))


        const task = input.value
        if (task === '') {
            alert("Please fill the task")
            return
        }
        input.value = ''
        todo.appendChild(bottom)
        const taskContainer = document.createElement("div")
        taskContainer.classList.add("taskContainer")

        setTimeout(addanimation, 150)

        function addanimation() {
            taskContainer.classList.toggle("animation")
        }


        bottom.appendChild(taskContainer)


        const todofirst = document.createElement('div')
        todofirst.setAttribute('id', "todofirst")

        todofirst.textContent = "•" + task


        taskContainer.appendChild(todofirst)


        const button = document.createElement("button")
        button.classList.add("trash")

        todofirst.appendChild(button)

        const i = document.createElement('i')
        i.classList.add("gg-trash")
        button.appendChild(i)

        const options = document.createElement('div')
        options.classList.add("options")

        taskContainer.appendChild(options)
        // ----------------------------------------------DELETE--------------------------------------------

        const deletebtn = document.createElement('button')
        deletebtn.setAttribute('id', "delete")
        deletebtn.textContent = "Delete"
        options.appendChild(deletebtn)


        deletebtn.addEventListener("click", () => {
            taskContainer.classList.toggle("animation")
            options.remove("animation")

            setTimeout(deletetodo, 150)
            setTimeout(deleteduring, 150)
            setTimeout(deletedone, 150)

        })

        function deletetodo() {
            bottom.removeChild(taskContainer)
        }

        function deleteduring() {
            during.removeChild(taskContainer)
        }

        function deletedone() {
            done.removeChild(taskContainer)
        }

        // ---------------------------------------------TODO------------------------------------------
        const todobtn = document.createElement('button')
        todobtn.setAttribute('id', "todo")
        todobtn.textContent = "To do"
        options.appendChild(todobtn)
        options.removeChild(todobtn)


        todobtn.addEventListener("click", () => {
            taskContainer.classList.remove("animation")
            setTimeout(addanimation, 150)
            bottom.appendChild(taskContainer)
            options.classList.remove("animation")

            options.removeChild(todobtn)
            options.appendChild(duringbtn)
            options.appendChild(donebtn)
        })

        // ---------------------------------------------DURING----------------------------------------------
        const duringbtn = document.createElement('button')
        duringbtn.setAttribute('id', "during")
        duringbtn.textContent = "During"
        options.appendChild(duringbtn)

        duringbtn.addEventListener("click", () => {
            taskContainer.classList.remove("animation")
            setTimeout(addanimation, 150)
            during.appendChild(taskContainer)
            options.classList.remove("animation")
            options.removeChild(duringbtn)
            options.appendChild(todobtn)
            options.appendChild(donebtn)


        })

        const donebtn = document.createElement('button')
        donebtn.setAttribute('id', "done")
        donebtn.textContent = "Done"
        options.appendChild(donebtn)

        donebtn.addEventListener("click", () => {
            taskContainer.classList.remove("animation")
            setTimeout(addanimation, 150)
            done.appendChild(taskContainer)
            options.classList.remove("animation")

            options.removeChild(donebtn)
            options.appendChild(duringbtn)
            options.appendChild(todobtn)

        })

        button.addEventListener("click", () => {
            options.classList.toggle("animation")
        });
    })



