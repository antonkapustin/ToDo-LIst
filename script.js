import {addNoteComponent} from "./src/components/form/form.component.js";

addNoteComponent.inited();




const icons = [{name:"Bath",icon:"bath"}, {name:"Cocktail",icon:"cocktail", checked:true}, {name:"Bed",icon:"bed"}, {name:"Train",icon:"dumbbell"}, {name:"Work",icon:"shopping-bag"}];

icons.forEach((item)=> {
    let slider = document.querySelector("[data-dom=slider]");
    let newSliderItem = document.createElement("div");

    let sliderItem = ` 
    <label class="label">
        <input type="radio" class="radio" name="radio"  value="${item.icon}" checked="${item.checked}" data-dom="radio">
        <span class="icon icon_slider"><i class="fas fa-${item.icon}"></i></span>
        <p class="slider__text">${item.name}</p>
    </label>`;

    newSliderItem.classList.add("slider__item");
    newSliderItem.innerHTML = sliderItem;
    slider.append(newSliderItem);
})