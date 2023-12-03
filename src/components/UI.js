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
const homeTab = document.createElement('p');
homeTab.innerText = 'Home';
const todayTab = document.createElement('p');
todayTab.innerText = 'Today';
const weekTab = document.createElement('p');
weekTab.innerText = 'Week';
const projectDiv = document.createElement('div');
const projectDivText = document.createElement('p');
projectDivText.innerText = 'Projects';

projectDiv.append(projectDivText); 
sideBarContentWrapper.append(homeTab, todayTab, weekTab, projectDiv);
sideBarWrapper.append(sideBarContentWrapper);

// Create To-do Bar

const toDoBar = document.createElement('div');

const barName = document.createElement('p');
barName.innerText = 'To-Do';

const barDueDate = document.createElement('p');
barDueDate.innerText = 'Due Date';

const addTaskWrapper = document.createElement('div');

const addTask = document.createElement('p');
addTask.setAttribute('class', 'addTask-p');
addTask.innerText = 'Add Task';

addTaskWrapper.append(addTask)
toDoBar.append(barName, barDueDate, addTaskWrapper);

export function createToDo(title) {

    function createToDoListBox() {

    const createTextBoxWrapper = document.createElement('div');

    const createTitle = document.createElement('input');
    createTitle.setAttribute('type', 'text');
    createTitle.innerText = this.title;

    const createSubmitButton = document.createElement('button');
    createSubmitButton.setAttribute('id', 'createSubmitButton-button');
    createSubmitButton.innerText = 'Submit';

    const createCancelButton = document.createElement('button');
    createCancelButton.setAttribute('id', 'createCancelButtton-button');
    createCancelButton.innerText = 'Cancel';

    createTextBoxWrapper.append(createTitle, createSubmitButton, createCancelButton);

    }
    return { createToDoListBox }
}

export function uiModule() {
    getRoot.append(header, sideBarWrapper, toDoBar);    
}