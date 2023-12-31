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

import { uiModule, createInputBox, createToDoLogic, createProjectTab } from "./components/UI";
import { formatData, sortByToday, sortByWeekend } from './utils';



(function loadModules() {
    uiModule();
})();

const dataObject = storeToDoData();
const dataFormate = formatData();
let textBox = textBoxLogic();
let addTask = addTaskLogic();
let projectTab = projectTabLogic();
addTask.addTaskListener();

function addTaskLogic() {

const getAddTask = document.getElementById('addTask-p');

    function addTaskListener() {
          getAddTask.addEventListener(
          'click',
          textBox.createTextBoxLogic,
          { once: true });
    }

    // return this maybe?
    
    function removeTaskListener(textBoxFlag) {
        if(textBoxFlag) {
            getAddTask.removeEventListener(
              'click',
              addTaskListener);
        }
    }

    return { addTaskListener, removeTaskListener };
}



function textBoxLogic() {

    function createTextBoxLogic() {
        const textBox = createInputBox();
        textBox.createTextBox();
        addTask.removeTaskListener(true);
        // dueDateLogic();
        addButtonListeners();
    }; // made an edit here

    function addButtonListeners() {
        const getSubmitButton = document.getElementById(
            'createSubmitButton-button'
        );
            getSubmitButton.addEventListener('click', () => {
                let values = getToDoValues();
                dataObject.createDataObject(...values);
                projectTab.projectTabInternalLogic();
                toDoLogic(values);
                removeTask();
    });
        const getCancelButton = document.getElementById(
            'createCancelButton-button'
        );
        getCancelButton.addEventListener('click', removeTask);
    }
    
    function removeTask() {
        const getTextBox = document.getElementById('createTextBoxWrapper-div');
        getTextBox.remove();
        const getAddTask = document.getElementById('addTask-p');
        getAddTask.addEventListener('click', addTask.addTaskListener);
    }

    function getToDoValues() {
        const toDoValues = [];
        const getTitleValue = document.getElementById('createTitle-input');
        const getDueDateValue = document.getElementById('createDueDate-input');
        const getDescriptionValue = document.getElementById('createDescription-input');
        const getProjectValue = document.getElementById('createProjectName-input');

        toDoValues[0] = getTitleValue.value;
        toDoValues[1] = dataFormate.formatDate(getDueDateValue.value);
        toDoValues[2] = getDescriptionValue.value;
        toDoValues[3] = getProjectValue.value;

        return toDoValues;

        // Is this function still neccessary? 
        // I can do the same in data storage function
    }

    return { createTextBoxLogic };
}

// function dueDateLogic() {
//     const dateInput = document.getElementById('createDueDate-input');
//     let timeOutId;
//     dateInput.addEventListener('input', function() {
//         clearTimeout(timeOutId);

//         timeOutId = setTimeout(() => {
//         const inputValue = this.value;
//         const formatPattern = /\d{2}\/\d{2}\/\d{4}/;

//             if(!formatPattern.test(inputValue)); {
//                 alert('Please use the format DD/MM/YYYY');
//                 this.value = '';
//             }
//         }, 1000);
    
//     });

// } // skipping this part to finish the rest of the project.
// Will get back to it

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
   
sideBarLogic();

function projectTabLogic() {
    let projectTabUI = createProjectTab();
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
        // need a function to filter the toDos
            // filterToDo
        // need a function that can actually create and append ToDo
            // createSpecificToDo
    }


    

    
    return { projectTabInternalLogic };
}



// move project to it's own logic, too complicated
// remove event listener on project
// initalize the projects when submit is clicked


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

    function createDataObject(toDoName, toDoDueDate, toDoDescription, toDoProjectName )
    {
        return toDoDataArray.push({
            name: `${toDoName}`,
            dueDate: `${toDoDueDate}`,
            completion: false,
            description: `${toDoDescription}`,
            project: `${toDoProjectName}`
            
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

    function getToDoData() {
        return toDoDataArray;
    }

    return { 
        getToDoData,
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
