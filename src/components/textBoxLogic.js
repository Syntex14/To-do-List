import { createInputBox } from "./UI";
import { addTaskLogic } from "./addTaskLogic";
import formatData from './util';

export function textBoxLogic() {

    let addTask = addTaskLogic();
    let dataFormate = formatData();

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