import { textBoxLogic } from "./textBoxLogic";

let textBox = textBoxLogic();

export function addTaskLogic() {

    
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