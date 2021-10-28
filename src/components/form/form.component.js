import {renderToDom} from "../../../utils/render-to-dom.js";

export const addNoteComponent = {
    newForm: undefined,
    sliderItems:[{name:"Bath",icon:"bath"},
    {name:"Cocktail",icon:"cocktail"},
    {name:"Bed",icon:"bed"},
    {name:"Train",icon:"dumbbell"},
    {name:"Work",icon:"shopping-bag"}],
    inited: false,

    inited: function () {
        if (this.init) {
            return false;
        } else {
            this.newForm = document.querySelector("[data-dom=search-form]");
            this.noteInput = document.querySelector("[data-dom=note-input]");
            this.slider = document.querySelector("[data-dom=slider]");
            this.addSliderItems(this.sliderItems);
            this.applyEventHandlers();
            this.init = true;
        }
    },

    onNewFormSubmit: function(e) {
        e.preventDefault();
        const radioBtn = document.querySelector("[data-dom=radio]:checked");
    
        const newTask = {
            name: this.noteInput.value,
            time:new Date (),
            icon: radioBtn.value
        };
        this.createNewNote(newTask);
        this.newForm.reset();
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
            <p class="note__discription">${newTask.about || " "}</p>
        </div>

            <input type="checkbox" class="note__checkbox">
            <span class="icon icon_note"><i class="fas fa-check-circle"></i></span>`;

    newTaskLabel.classList.add("note");
    newTaskLabel.innerHTML = task;
    taskSlider.append(newTaskLabel);
    },

    populateNotesFromArray: function (data) {
        const taskSlider = document.querySelector("[data-dom=task-place]");

        let array = data.map(element => {renderToDom(element , 
            `<label class="note">
                <span class="icon icon_note">
                    <i class="fas fa-{{icon}}"></i>
                </span>
                <div class="note__content">
                    <p class="note__name">{{name}}</p>
                    <p class="note__discription">{{about}}</p>
                </div>

                <input type="checkbox" class="note__checkbox">
                <span class="icon icon_note"><i class="fas fa-check-circle"></i></span>
            </label>`)});
            console.log(array);
      },

    applyEventHandlers: function() {
        this.newForm.addEventListener("submit", this.onNewFormSubmit.bind(this))
    },

    addSliderItems: function(data){

        // this.slider.appendChild(data.forEach(element => {
        //     renderToDom(element, 
        //         `<div class="slider__item">
        //             <label class="label">
        //                 <input type="radio" class="radio" name="radio"  value="{{icon}}" data-dom="radio">
        //                 <span class="icon icon_slider"><i class="fas fa-{{icon}}"></i></span>
        //                 <p class="slider__text">{{name}}</p>
        //             </label>
        //         </div>`);
        // }));
    }
}