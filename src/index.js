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
})(); // made an edit here

const dataObject = storeToDoData();
const dataFormate = formatData();
let textBox = textBoxLogic();
let addTask = addTaskLogic();
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
                dataObject.trackToDoList();
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
    let projectTab = createProjectTab();
    
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
            case 'Projects':
                // By default, I want the tab project to be only seen
                // If clicked, I want Project to open up a mini-menu list
                // of projects

                // The projects shown will not show numerical account but
                // just the name of the specific project.

                // The first to-do that has a project name will be used as 
                // that default name
                // Will have to create a way to search through each toDo
                // project name to see how much I'd need to store in memory

                // When the user clicks projects
                    // 1. Open the project tab filled with different projects
                        // Avoid duplicates
                    // Get all projects
                    // create an array that stores the project names
                    // iterate through each toDo stored in data
                    // for each toDo, search array for project name using 
                    // toDo.projectname as a conditional
                        // if found, discard
                        // if not found, input the project name into the array
                    // How do we create the UI?
                        // using the values of the array stored with project
                        // names
                            // create p elements that will display the values of array
                
                let projectNamesArray = [];

               // filters the toDo to not include same titles again

               for(let i = 0; i < dataArray.length; i++) {
                    dataArray.forEach(toDo => {
                        if(projectNamesArray.includes(toDo.project)) return;
                        
                        projectNamesArray.push(toDo.project);
                        console.log(projectNamesArray);
                });
               }
            
                // creates the titles in project tab

                projectNamesArray.forEach(name => {
                    let nameElement = projectTab.createProjectElement(name)
                    projectTab.appendProjectNames(nameElement);
                });

                // add event listener for each project I have
                // get all project tabs
                // add event listeners
                // store name of project
                // filter toDoData via project variable
                // store filtered toDoData in array
                // create toDos via array

                const getAllProjectTabs = document.getElementsByClassName('nameElement-p');
                for(let i = 0; i < getAllProjectTabs.length; i++) {
                    getAllProjectTabs[i].addEventListener('click', () => {
                        let projectNameToDo = getAllProjectTabs[i].innerText
                        let projectFilteredToDo = dataArray.filter((toDo) => {
                            if(toDo.project === projectNameToDo) {
                            }
                        projectFilteredToDo.forEach(toDo => {
                            let newToDo = createToDoLogic(...Object.values(toDo));
                            newToDo.appendToDo();
                        });
                        
                        })
                    });
                }

                // create the toDo again
                // toDoArray.forEach(toDo => {
                //     let newToDo = createToDoLogic(...Object.values(toDo));
                //     newToDo.appendToDo();
                // });

                // When the user clicks on the specific project name,
                // I want the projects with that project name to show 

                // So when clicked, use innerText of projectname to compare
                // toDo.project
                // if equal, display project
                // if not, move onto the next item

                // 1. Get all elements of name element
                    // querySelectorAll
                // 2. Loop through each element and add an event listener
                    // forEach
                // 3. When element is clicked, loop through toDo
                    // 
                // 4. For each event clicker, use a comparison between 
                // title of the element and toDo.project
                    // if()
                        // if true, print toDo on screen 
                        // if not, ignore
            };
    }
);
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
