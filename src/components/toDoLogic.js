import { createToDoLogic } from "./UI";

export function toDoLogic(vals) {
    let toDo = createToDoLogic(...vals);
    toDo.appendToDo();
    addDisplayListener();
}

