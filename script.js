import {addNoteComponent} from "./src/components/form/form.component.js";
import {todos} from "./data/todos.js";

addNoteComponent.inited();

console.time("t");
addNoteComponent.populateNotesFromArray(todos);
console.timeEnd("t");
