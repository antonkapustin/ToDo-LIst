const newForm = document.querySelector("[data-dom=search-form]");

newForm.addEventListener("submit", (e) => {
    event.preventDefault();
    const note = document.querySelector("[data-dom=note]");
    const radioBtn = document.querySelector("[data-dom=radio]:checked"); 
    let icon = radioBtn.value;   
    const newTask = {
        name: note.value,
        time:new Date ()
    };
    createNewNote(newTask, icon);
})

function createNewNote(newTask, icon){
    let newTaskLabel = document.createElement("label");

    let task = `   
        <span class="icon icon_note">
            <i class="fas fa-${icon}"></i>
        </span>    
        <div class="note__content">
            <p class="note__name">${newTask.name}</p>
            <p class="note__discription">Here mut to be tabs discription</p>
        </div>
        
            <input type="checkbox" class="note__checkbox">
            <span class="icon icon_note"><i class="fas fa-check-circle"></i></span> `;

newTaskLabel.classList.add("note");
newTaskLabel.innerHTML = task;
let taskSlider = document.querySelector("[data-dom=task-place]");
taskSlider.append(newTaskLabel);
}

