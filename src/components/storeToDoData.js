export function storeToDoData() {
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