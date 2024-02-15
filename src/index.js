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

import { uiModule } from "./components/UI";
import { sideBarLogic } from "./components/sideBarLogic";
import { addTaskLogic } from "./components/addTaskLogic";


(function loadModules() {
    uiModule();
})();

let addTask = addTaskLogic();

addTask.addTaskListener();




   
sideBarLogic();





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



// function internalCheck() {

//     // internal check will have to work each mode that it's in
//         // Home - default
//         // Today - will load as found by loop, e.g. value of internalCheck will be the order the loops find these specific criterion
//         // Weekend - as above
//         // Projects - as above
//     // I need to add a counter to each toDo that is submitted by the user
//         // E.g. Code! - 1, Garage Clean up - 2
//     // With that counter variable I need to be able to:
//         // Remove one unit of counter
//         // Add one unit of counter
//     // Remove one unit of counter
//         // Edge cases
//             // Ten toDos in total
//             // Remove one scernario 
//                 // toDo 3 removed
//                     // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] --> [1, 2, 4, 5, 6, 7, 8, 9, 10] --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     // 
//     // find the length of each mode using a loop
//     // each time an action is submitted by the user, e.g. adding a ToDo or deleting a ToDo
//         // run the length of each mode again and update value of each ToDo

//     // 
//     // 1. Get elements that are on the DOM
//         // When user clicks submit or delete button, run this loop
//     // 2. 

// }

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
