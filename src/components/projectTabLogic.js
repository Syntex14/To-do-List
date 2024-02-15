import { createProjectTab } from "./UI";
import { storeToDoData } from "./storeToDoData";
import { createToDoLogic } from "./UI";

export function projectTabLogic() {

   
    let projectTabUI = createProjectTab();
    let dataObject = storeToDoData();
    let dataArray = dataObject.getToDoData();
    let projectNamesArray = [];

    function filterProjectNames() {
        for(let i = 0; i < dataArray.length; i++) {
            dataArray.forEach(toDo => {
                if(projectNamesArray.includes(toDo.project)) return;
                
                projectNamesArray.push(toDo.project);
                console.log(projectNamesArray);
            });
        }
    }

    function createProjectTitles() {
        projectNamesArray.forEach(name => {
            let nameElement = projectTabUI.createProjectElement(name)
            projectTabUI.appendProjectNames(nameElement);
        });
    }

    function filterToDo(e) {
            let projectFilteredToDo = dataArray.filter(toDo => toDo.project === e.target.innerText);
            return projectFilteredToDo;
    }

    function createSpecificToDo(filteredToDos) {
        filteredToDos.forEach(toDo => {
            let newToDo = createToDoLogic(...Object.values(toDo));
            newToDo.appendToDo();
        });
    }

    function addProjectListeners() {
        const getAllProjectTabs = document.getElementsByClassName('nameElement-p');
        for(let i = 0; i < getAllProjectTabs.length; i++) {
            getAllProjectTabs[i].addEventListener('click', recreateToDoLogic);
        }
    }

    function removeAllToDos () {
        const toDos = document.querySelectorAll('.toDoWrapper-div');   
            
        for ( let i = 0; i < toDos.length; i++) {
            toDos[i].remove();
        }
    } // this an be moved to ui under createToDoLogic

    // Internal logic for the project tab

    function projectTabInternalLogic() {
        projectTabUI.removeProjectNames();
        filterProjectNames();
        createProjectTitles();
        addProjectListeners();
    }
    // Internal logic for creating toDos

    function recreateToDoLogic(e) {
        removeAllToDos();
        let filteredToDos = filterToDo(e);
        createSpecificToDo(filteredToDos);
    }

    return { projectTabInternalLogic };
}