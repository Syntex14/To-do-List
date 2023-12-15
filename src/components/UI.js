import { setMultipleAttributes } from "../utils";


const getRoot = document.getElementById('content');

// Create header section

const header = document.createElement('header');
const title = document.createElement('h1');
title.setAttribute('id', 'title-h1');
title.innerText = 'To-do List';

header.append(title);

// Create side-bar

const sideBarWrapper = document.createElement('div');

const sideBarContentWrapper = document.createElement('div');
sideBarContentWrapper.setAttribute('id', 'sideBarContentWrapper-div');

const homeTab = document.createElement('p');
homeTab.setAttribute('id', 'homeTab-p');
homeTab.innerText = 'Home';

const todayTab = document.createElement('p');
todayTab.setAttribute('id', 'todayTab-p');
todayTab.innerText = 'Today';

const weekendTab = document.createElement('p');
weekendTab.setAttribute('id', 'weekendTab-p');
weekendTab.innerText = 'Weekend';

const projectDiv = document.createElement('div');
projectDiv.setAttribute('id', 'projectDiv-div');
const projectDivText = document.createElement('p');
projectDivText.setAttribute('id', 'projectDivText-p');
projectDivText.innerText = 'Projects';

projectDiv.append(projectDivText); 
sideBarContentWrapper.append(homeTab, todayTab, weekendTab, projectDiv);
sideBarWrapper.append(sideBarContentWrapper);

// Create To-do Bar

const toDoBar = document.createElement('div');
toDoBar.setAttribute('id', 'toDoBar-div');

const barName = document.createElement('p');
barName.innerText = 'To-Do';

const barDueDate = document.createElement('p');
barDueDate.innerText = 'Due Date';

const addTaskWrapper = document.createElement('div');
addTaskWrapper.setAttribute('id', 'addTaskWrapper-div');

const addTask = document.createElement('p');
addTask.setAttribute('id', 'addTask-p');
addTask.innerText = 'Add Task';

addTaskWrapper.append(addTask)
toDoBar.append(barName, barDueDate, addTaskWrapper);

export function createInputBox() {

    const createTextBoxWrapper = document.createElement('div');
    createTextBoxWrapper.setAttribute('id', 'createTextBoxWrapper-div');

    const createTitle = document.createElement('input');
    setMultipleAttributes(createTitle, {
        'type':'text',
        'id':'createTitle-input',
        'placeholder':'Title: Code!'
    });

    const createDescription = document.createElement('input');
    setMultipleAttributes(createDescription, {
        'type':'text',
         'id':'createDescription-input',
         'placeholder':'Details: e.g code starting at 2 P.M.'
    });

    const createDueDate = document.createElement('input');
    setMultipleAttributes(createDueDate, {
        'type':'text',
        'id':'createDueDate-input',
        'placeholder':'Due Date: 12/10/23'
    });
    

    const createProjectName = document.createElement('input');
    setMultipleAttributes(createProjectName, {
        'type':'text',
        'id':'createProjectName-input',
        'placeholder':'Project Name'
    });

    const createSubmitButton = document.createElement('button');
    createSubmitButton.setAttribute('id', 'createSubmitButton-button');
    createSubmitButton.innerText = 'Submit';

    const createCancelButton = document.createElement('button');
    createCancelButton.setAttribute('id', 'createCancelButton-button');
    createCancelButton.innerText = 'Cancel';

    createTextBoxWrapper.append(createTitle, createDueDate, createDescription, createProjectName, createSubmitButton, createCancelButton);

    const createTextBox = () => {
        let textBox = createTextBoxWrapper;
        const getAddTask = document.getElementById('addTask-p');
        getAddTask.append(textBox);
    }
    return { createTextBox };
}

// To add the to-do when user clicks submit
    // 1. create a function that will create the to-do
        // take createToDo as inspiration
    // 2. get values of input fields when submit is clicked by user
        // clear iput fields after submit is clicked

export function createToDoLogic(name, date) {

    const toDoWrapper = document.createElement('div');
    toDoWrapper.setAttribute('class', 'toDoWrapper-div');

    const checkBox = document.createElement('input');
    setMultipleAttributes(checkBox, {
        'type':'checkbox',
        'class':'checkBox-input'
    });

    const toDoName = document.createElement('p');
    toDoName.setAttribute('class', 'toDoName-p');
    toDoName.innerText = `${name}`;

    const dueDate = document.createElement('p');
    dueDate.setAttribute('class', 'dueDate-p');
    dueDate.innerText = `${date}`;

    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'deleteButton-button');
    deleteButton.innerText = 'Delete';

    toDoWrapper.append(checkBox, toDoName, dueDate, deleteButton);

    const appendToDo = () => {
        const getToDoBar = document.getElementById('toDoBar-div');
        getToDoBar.appendChild(toDoWrapper);
    }

    const updateName = (name) => {
        toDoName.innerText = `${name}`;
    }

    const updateDueDate = (dueDate) => {
        dueDate.innerText = `${dueDate}`;
    }

    const deleteToDo = () => {
        const getDeleteButton = document.getElementById('deleteButton-button');
        getDeleteButton.remove();
        // will have to update this to work with classes
        // will need a more specific selector
        // think of selecting class then the specific target
    }

    return { appendToDo, updateName, updateDueDate, deleteToDo };
}

export function createProjectTab() {

    function createProjectElement(...projectNames) {
        const createProjectNameTab = document.createElement('p');
        createProjectNameTab.setAttribute('class', 'nameElement-p');
        createProjectNameTab.innerText = `${projectNames}`

        return createProjectNameTab;
    }

    function appendProjectNames(projects) {
        console.log(projects);
        const getProjectTab = document.getElementById('projectDiv-div');
        getProjectTab.appendChild(projects);
    }

    return { createProjectElement, appendProjectNames }

}
    

export function uiModule() {
    getRoot.append(header, sideBarWrapper, toDoBar);    
};