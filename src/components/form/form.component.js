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

        taskSlider.appendChild( renderToDom(data , 
            `<label class="note">
                <span class="icon icon_note">
                    <i class="fas fa-data.icon"></i>
                </span>
                <div class="note__content">
                    <p class="note__name">data.name</p>
                    <p class="note__discription">data.about</p>
                </div>
    
                <input type="checkbox" class="note__checkbox">
                <span class="icon icon_note"><i class="fas fa-check-circle"></i></span>
            </label>`));
      },

    applyEventHandlers: function() {
        this.newForm.addEventListener("submit", this.onNewFormSubmit.bind(this))
    },

    addSliderItems: function(data){
        // let newSliderItem = document.createElement("div");
    
        // let sliderItem = ` 
        // <label class="label">
        //     <input type="radio" class="radio" name="radio"  value="${data.icon}" ${data.checked || " "} data-dom="radio">
        //     <span class="icon icon_slider"><i class="fas fa-${data.icon}"></i></span>
        //     <p class="slider__text">${data.name}</p>
        // </label>`;

        // newSliderItem.classList.add("slider__item");
        // newSliderItem.innerHTML = sliderItem;

        this.slider.appendChild(renderToDom(data, 
            `<div class="slider__item">
                <label class="label">
                    <input type="radio" class="radio" name="radio"  value="data.icon" data-dom="radio">
                    <span class="icon icon_slider"><i class="fas fa-data.icon "></i></span>
                    <p class="slider__text">data.name</p>
                </label>
            </div>`));
    }
}