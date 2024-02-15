import { storeToDoData } from "./storeToDoData";
import { createToDoLogic } from "./UI";

export function sideBarLogic() {

    const dataObject = storeToDoData();

    const getSideBar = document.getElementById('sideBarContentWrapper-div');
    let dataArray = dataObject.getToDoData();
    
    function removeAllToDos () {
        const toDos = document.querySelectorAll('.toDoWrapper-div');   
        
      for ( let i = 0; i < toDos.length; i++) {
        toDos[i].remove();
      }
    }

    getSideBar.addEventListener('click', e => {
        removeAllToDos();

        switch(e.target.innerText) {
            case 'Home': 
                dataArray.forEach((toDo) => {
                    let refreshToDo = createToDoLogic(...Object.values(toDo))
                    refreshToDo.appendToDo();
                });
                break;
            case 'Today': 
                let todayArray = dataArray.filter(sortByToday);
                todayArray.forEach(toDo => {
                    let newToDo = createToDoLogic(...Object.values(toDo));
                    newToDo.appendToDo();
                });
                break;
            case 'Weekend': 
                let weekendArray = dataArray.filter(sortByWeekend);
                weekendArray.forEach(toDo => {
                    let newToDo = createToDoLogic(...Object.values(toDo));
                    newToDo.appendToDo();
                });
                break;
        }   
    });
}