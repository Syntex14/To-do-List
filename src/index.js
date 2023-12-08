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



(function loadModules() {
    uiModule();
})(); // made an edit here

function addTaskListener() {
    const getAddTask = document.getElementById('addTask-p');
    getAddTask.addEventListener('click', textBoxLogic, { once: true });
} // made an edit here
addTaskListener();

const dataObject = storeToDoData();

function textBoxLogic() {

    const getAddTask = document.getElementById('addTask-p');

    (function () {
        const textBox = createInputBox();
        textBox.createTextBox();
        removeTextBoxListener(true);
    })(); // made an edit here
    
    const getSubmitButton = document.getElementById('createSubmitButton-button');
    getSubmitButton.addEventListener('click', () => {
        let values = getToDoValues();
        dataObject.createDataObject(...values);
        dataObject.trackToDoList();
        toDoLogic(values);
        submitTask();
    });

    const getCancelButton = document.getElementById('createCancelButton-button');
    getCancelButton.addEventListener('click', cancelTask);

    function addTextBoxListener() {
        getAddTask.addEventListener('click', addTaskListener);
    }

    function removeTextBoxListener(textBoxFlag) {
        if(textBoxFlag) {
            getAddTask.removeEventListener('click', addTaskListener);
        }
    }

    function submitTask() {
        cancelTask();
    }

    function cancelTask() {
        const getTextBox = document.getElementById('createTextBoxWrapper-div');
        getTextBox.remove();
        getAddTask.addEventListener('click', addTaskListener);
        // glitch appears to be here and in submit task where addTaskListener stays
        // will have to edit this portion of the program

        // Need to run an event listener only once in the beginning of the dom loading
        // Create a function inside that will then re-add the event listener

    }

    function getToDoValues() {
        const toDoValues = [];
        const getTitleValue = document.getElementById('createTitle-input');
        // const getDescriptionValue = document.getElementById('createDescription-input');
        const getDueDateValue = document.getElementById('createDueDate-input');

        toDoValues[0] = getTitleValue.value;
        toDoValues[1] = getDueDateValue.value;

        return toDoValues;
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
    toDo.appendToDo();

    // function updateToDoName() {
    //     const getTitle = document.getElementById('createTitle-input');
    //     const getInputName = getTitle.value;
    //     toDo.updateName(getInputName);
    // }

    // this part need to be updated completely to work with
    // an edit mode, currently I have it where the only time
    // a to-do name is made is during setup

    // edit mode
        // 1. Update name
        // 2. Update Due Date
        // 3. Update Description
        // 4. Update Project Name
        // 5. Delete To-Do
    
}

function sideBarLogic() {
    const getSideBar = document.getElementById('sideBarContentWrapper-div');
    
    function removeAllToDos () {
        const toDos = document.getElementsByClassName('toDoWrapper-div');   
        
      for ( let i = 0; i < toDos.length; i++) {
        toDos[i].remove();
      }
    }

    getSideBar.addEventListener('click', e => {
        switch(e.target.innerText) {
            case 'Home': 
                removeAllToDos();
                
                // remove all to-dos from screen
                // get all tasks from data
                // createToDo using append function and values
                // from data

        }
    });
}

sideBarLogic();

// I'm going to need a way to store data from the textboxes the user supplies
// Currently, I am reliant on the DOM to keep user data
// But if I am going to update pages and DOM, I'll lose access
// to that data. 

// The data that would need to be stored is 
// 1. Completion (checkBox)
// 2. Name
// 3. Description
// 4. Due Date

// Additionally, I'd need to be able to update or
// delete the data

// The entry point for the data would be when the user submits
// their to-do

// An additional entry point would be when the user decides to
// update a to-do

// Lets start on the first entry point: submission of data by
// user

// When user clicks submit, create an object that stores
    // Completion
    // Name
    // Description
    // Due Date

// Using getToDoValues in textBoxLogic to pass the necessary
// values

// We know how to get the data and how to store the data itself
// but how do we store the objects?

// We can 
    // store them in one array, using querySelectors and all 
    // to get the info we need
    // OR
    // we can store in separate arrays, separating them based
    // on some type of property
    // e.g. project name
    // no project name = general array
    // project name = project array

function storeToDoData() {
    const toDoDataArray = [];

    function createDataObject(toDoName, toDoDescription, toDoDueDate)
    {
        return toDoDataArray.push({
            completion: false,
            name: `${toDoName}`,
            description: `${toDoDescription}`,
            dueDate: `${toDoDueDate}`
        });
    }

    function appendDataObject() {
      toDoDataArray.push(createDataObject());
    }

    function deleteDataObject() {
        // splice(i, 1);
            // How can we get i is the question

    }

    function updateDataObject() {
        // have to grab the specific to-do in question when
        // using edit mode

    }
    
    function trackToDoList() {
        console.log(toDoDataArray);
    }

    return { 
        createDataObject,
        appendDataObject,
        trackToDoList 
    }
}

// SideBar Logic

// Get all the elements 
    // Home
    // Today
    // Week
    // Projects
// Set up a default page
    // Home
        // Shows all to-dos
    // Today
        // Shows all to-dos with today's date
    // Week
        // Shows all to-dos due within a week of today
    // Projects
        // Shows to-dos based on project name
            // e.g. Project Name: Coding
                // to-do: Reformat code
                // to-do: Push to production 
    

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


