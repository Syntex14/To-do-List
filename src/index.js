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

function loadModules() {
    uiModule();
}

loadModules();