import {addNoteComponent} from "./src/components/form/form.component.js";
import {todos} from "./data/todos.js";

addNoteComponent.inited();
for(let i=0; i<todos.length; i++){
addNoteComponent.createNewNote(todos[i]);
}
