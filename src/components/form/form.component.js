export const addNoteComponent = {
    newForm: undefined,
    inited: false,

    inited: function () {
        if (this.init) {
            return false;
        } else {
            this.newForm = document.querySelector("[data-dom=search-form]");
            this.applyEventHandlers();
            this.init = true;
        }
    },

    createNewNote: function(newTask) {
    let newTaskLabel = document.createElement("label");
    let taskSlider = document.querySelector("[data-dom=task-place]");

    let task =`
        <span class="icon icon_note">
            <i class="fas fa-${newTask.icon}"></i>
        </span>
        <div class="note__content">
            <p class="note__name">${newTask.name}</p>
            <p class="note__discription">Here mut to be tabs discription</p>
        </div>

            <input type="checkbox" class="note__checkbox">
            <span class="icon icon_note"><i class="fas fa-check-circle"></i></span>`;

    newTaskLabel.classList.add("note");
    newTaskLabel.innerHTML = task;
    taskSlider.append(newTaskLabel);
    },

    applyEventHandlers: function() {
        this.newForm.addEventListener("submit", this.onNewFormSubmit.bind(this))
    },

    onNewFormSubmit: function(e) {
        e.preventDefault();
        const noteInput = document.querySelector("[data-dom=note-input]");
        const radioBtn = document.querySelector("[data-dom=radio]:checked");
    
        const newTask = {
            name: noteInput.value,
            time:new Date (),
            icon: radioBtn.value
        };
        this.createNewNote(newTask);
        this.newForm.reset();
    }
}