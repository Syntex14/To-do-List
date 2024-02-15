import { textBoxLogic } from "./textBoxLogic";

export function addTaskLogic() {

    let textBox = textBoxLogic();
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