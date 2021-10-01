const newForm = document.querySelector("[data-dom=search-form]");

newForm.addEventListener("submit", (e) => {
    event.preventDefault();
    const noteInput = document.querySelector("[data-dom=note-input]");
    const radioBtn = document.querySelector("[data-dom=radio]:checked");

    const newTask = {
        name: noteInput.value,
        time:new Date (),
        icon: radioBtn.value
    };
    createNewNote(newTask);
})

function createNewNote(newTask){
    let newTaskLabel = document.createElement("label");
    let taskSlider = document.querySelector("[data-dom=task-place]");

    let task = `   
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
}


const icons = [{name:"Bath",icon:"bath"}, {name:"Cocktail",icon:"cocktail"}, {name:"Bed",icon:"bed"}, {name:"Train",icon:"dumbbell"}, {name:"Work",icon:"shopping-bag"}];


  console.time(icons);
for(let i=0; i < icons.length; i++){
    let slider = document.querySelector("[data-dom=slider]");
    let newSliderItem = document.createElement("div");

    let sliderItem = ` 
    <label class="label">
        <input type="radio"  name="radio" class="radio" value="${icons[i].icon}" data-dom="radio">
        <span class="icon icon_slider"><i class="fas fa-${icons[i].icon}"></i></span>
        <p class="slider__text">${icons[i].name}</p>
    </label>`;

    newSliderItem.classList.add("slider__item");
    newSliderItem.innerHTML = sliderItem;
    slider.append(newSliderItem);
};

console.timeEnd(icons);