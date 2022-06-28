
const trash = document.querySelector(".trash")
const submit = document.querySelector("#submit")
const todo = document.querySelector(".todo")
const during = document.querySelector(".during")
const done = document.querySelector(".done")
const bottom = document.querySelector(".bottom")
const input = document.getElementById("task-input")





submit.addEventListener("click", () => {
    
    const task = input.value
    if(task === '') {
        alert("Please fill the task")
        return
    }
    input.value = ''
    todo.appendChild(bottom)
    const xd = document.createElement("div")
    xd.classList.add("xd")

setTimeout(addanimation, 150)
function addanimation() {
    xd.classList.toggle("animation")
}
    bottom.appendChild(xd)

    const todofirst = document.createElement('div')
    todofirst.setAttribute('id', "todofirst")

    todofirst.textContent = "•" + task

    xd.appendChild(todofirst)

    const button = document.createElement("button")
    button.classList.add("trash")

    todofirst.appendChild(button)

    const i = document.createElement('i')
    i.classList.add("gg-trash")
    button.appendChild(i)

    const options = document.createElement('div')
    options.classList.add("options")

    xd.appendChild(options)
    // ----------------------------------------------DELETE--------------------------------------------
    const deletebtn = document.createElement('button')
    deletebtn.setAttribute('id', "delete")
    deletebtn.textContent = "Delete"
    options.appendChild(deletebtn)

    deletebtn.addEventListener("click", () => {
        xd.classList.toggle("animation")
        options.remove("animation")
        setTimeout(deletetodo, 150)
        setTimeout(deleteduring, 150)
        setTimeout(deletedone, 150)
        
    })
    function deletetodo() {
        bottom.removeChild(xd)
    }
    function deleteduring() {
        during.removeChild(xd)
    }
    function deletedone() {
        done.removeChild(xd)
    }

    // ---------------------------------------------TODO------------------------------------------
       const todobtn = document.createElement('button')
    todobtn.setAttribute('id', "todo")
    todobtn.textContent = "To do"
    options.appendChild(todobtn) 
    options.removeChild(todobtn)
    
   todobtn.addEventListener("click", () => {
        xd.classList.remove("animation")
         setTimeout(addanimation, 150)
         bottom.appendChild(xd)
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
        xd.classList.remove("animation")
         setTimeout(addanimation, 150)
         during.appendChild(xd)
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
        xd.classList.remove("animation")
         setTimeout(addanimation, 150)
         done.appendChild(xd)
         options.classList.remove("animation")

         options.removeChild(donebtn)
         options.appendChild(duringbtn)
         options.appendChild(todobtn)
         
    })

    button.addEventListener("click", () => {
        options.classList.toggle("animation")
    });

})






