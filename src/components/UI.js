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

export function createToDo(title) {
    const createTextBoxWrapper = document.createElement('div');

    const createTitle = document.createElement('input');
    createTitle.setAttribute('type', 'text');

    const createSubmitButton = document.createElement('button');
    createSubmitButton.setAttribute('id', 'createSubmitButton-button');
    createSubmitButton.innerText = 'Submit';

    const createCancelButton = document.createElement('button');
    createCancelButton.setAttribute('id', 'createCancelButtton-button');
    createCancelButton.innerText = 'Cancel';

    createTextBoxWrapper.append(createTitle, createSubmitButton, createCancelButton);

    const updateTitle = () => {
        createTitle.innerText = this.input.value;
    }

    return { createTextBoxWrapper, updateTitle };
}

// Click on 'Add Task'
    // 1. User clicks on 'Add Task'
        // Open UI that is created
    // 2. User types in information in text boxes. 
    // 3. Users submits information
        // Collect data from user submission
            // Show data in to-do
    // 3b. User cancels request
        // Delete text box
    

export function uiModule() {
    getRoot.append(header, sideBarWrapper, toDoBar);    
};