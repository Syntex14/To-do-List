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

toDoBar.append(barName, barDueDate);

export function uiModule() {
    getRoot.append(header, sideBarWrapper, toDoBar);    
}