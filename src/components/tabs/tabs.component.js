export const addToDoComponent = {
    newToDo: undefined,
    inited: false,

    inited: function () {
        if (this.init) {
            return false;
        } else {
            this.newToDo = document.querySelector("[data-dom=ToDo]");
            this.toDoSlider = document.querySelector("[data-dom=task-place]");
            console.time(this.addSliderItems);
            this.addSliderItems();
            console.timeEnd(this.addSliderItems);
        }
    },

    sliderItems:[
        {name:"Here must to be a tabs name",
        about:"Here mut to be tabs discription"}
    ],

    addSliderItems: function(){
        this.sliderItems.forEach((item)=> {
        let newSliderItem = document.createElement("label");
    
        let sliderItem = ` 
        <span class="icon icon_note">
            <i class="fas fa-shopping-bag"></i>
        </span>
        <div class="note__content">
            <p class="note__name">${item.name}</p>
            <p class="note__discription">${item.about}</p>
        </div>

            <input type="checkbox" class="note__checkbox">
            <span class="icon icon_note"><i class="fas fa-check-circle"></i></span>`;

        newSliderItem.classList.add("note");
        newSliderItem.innerHTML = sliderItem;
        this.toDoSlider.append(newSliderItem);
    })
}

}