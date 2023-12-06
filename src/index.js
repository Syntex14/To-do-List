// To-Do-List
    // What will they require?
        // Name
        // Description/Note of to-do
        // A form of check box
        // Due Date
        // Priority
    // I want to create default screen (home?) that will show
    // all to-do
    //Separately, I wish to create projects for a specifc to-dos
    // that can be used to sort to-do specific to each project
        // E.g. Home
        // Project 1 
            // 5 specific to-dos
        // Project 2
            // 3 specific to-dos

    // UI 
        // One main page that will have:
            // Header
            // Sidebar that will house 
                // Home (default page)
                // Projects
            // To-Do-List 
                // Name
                // Date
    // UI ogic
        // Load UI
            // index.js 
                // function loadModule  
                    // import UI    
            // UI.js
                // create UI for site
                    // export UI

        // Update UI for projects
            // index.js 
                // function updateUI 
                    // will need to hear for a click on project
            // UI.js
                // create function that loads projects
                    // update name of to-do
                    // update to-do list with specific projects

    // App Logic
        // To-do-list
            // Default mode
                // Empty to-do-list
                    // "Add task"
        // Add Task Logic
            // Will open empty text box that will ask user to:
                // Enter title of to-do
                // Enter details of to-do
                // Set Due Date of To-do
                // Set Project Date of To-do
                // Allow user to confirm yes or no
        // Add Task Logic - "Confirm Yes"
             // when yes
                // will add to-do to current to-do
                    // may update to move DOM to new project
                // update project side-bar to add project and quantity 
        // Add Task Logic - "Confirm No"
            // when no
                // Will remove text box and all elements of text box
                    // will default to what was on original page

import { uiModule, createInputBox, createToDoLogic } from "./components/UI";



function loadModules() {
    uiModule();
}

loadModules();


const getAddTask = document.getElementById('addTask-p');

function addTaskListener() {
    getAddTask.addEventListener('click', textBoxLogic);
}

addTaskListener();

function textBoxLogic() {
    const textBox = createInputBox();
    textBox.createTextBox();

    if(textBox) {
        getAddTask.removeEventListener('click', textBoxLogic);
    }

    const getSubmitButton = document.getElementById('createSubmitButton-button');
    getSubmitButton.addEventListener('click', () => {
        getToDoValues();
        submitTask();
    });

    const getCancelButton = document.getElementById('createCancelButton-button');
    getCancelButton.addEventListener('click', cancelTask);
    
    function submitTask() {
        cancelTask();
        getAddTask.addEventListener('click', addTaskListener);
    }

    function cancelTask() {
        const getTextBox = document.getElementById('createTextBoxWrapper-div');
        getTextBox.remove();
        getAddTask.addEventListener('click', addTaskListener);
    }

    function getToDoValues() {
        const toDoValues = [];
        const getTitleValue = document.getElementById('createTitle-input');
        const getDescriptionValue = document.getElementById('createDescription-input');

        toDoValues[0] = getTitleValue.value;
        toDoValues[1] = getDescriptionValue.value;

        toDoLogic(toDoValues);
    }

}

// only interaction that will occur between textBoxLogic asnd toDoLogic is
    // when user submits task, we need to get information
    // to use when creating toDo.
    // return information and use it in toDo logic?
    // create a function in textBoxLogic that gathers the information
    // 


function toDoLogic(vals) {
    let toDo = createToDoLogic(...vals);
    toDo.createToDo();

    function updateToDoName() {
        const getTitle = document.getElementById('createTitle-input');
        const getInputName = getTitle.value;
        toDo.updateName(getInputName);
    }
}

// App logic
    // Default Mode - No to-do on list
        // Create link/button that will allow user to add a to-do list to the list
        // When user clicks, it opens a text box that allows user to input:
            // title
            // description
            // due date
            // project name
            // submit or cancel button
        // if sumbit
            // adds to-do to current list
            // updates projects if project name supplied
        // if cancel
            // deletes textbox, 
            // goes back to default mode
    // index.js will handle internal logic of application
    // UI.js will create the components to display to the user

    // 12-3
        // 1. Create link/button
            // use index.js
                // created the default link for "add task"
                    // still needs css styling and animation
        // 2. Create text box that will allow user to input info
            // Title
            // Description
            // Due Date
            // Project Name
        // 3. If submit
            // Once user clicks, get values of
                // title
                // description
                // due date
                // project name
                // event clicker cannot reference createToDo
                        // will need to build logic for this part
                
            // Remove DOM element (text boxes)
            // updates appriotate side bar

            
