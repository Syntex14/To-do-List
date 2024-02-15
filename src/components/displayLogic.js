// function displayLogic() {
//     let displayInfo = displayUI();
//     let dataArray = dataObject.getToDoData();


//     function addDisplayListener() {
//         const getToDoName = document.getElementsByClassName('toDoName-p');
//         for (let i = 0; i < getToDoName.length; i++ ) {
//             getToDoName[i].addEventListener('click', function(e) {
//                 // need a comparison to get the correct dataObject
//                 // dataArray.forEach(toDo => 
//                     // if (toDo.name === this.innerText) 
//                         // createDisplayInfo(...Object.values(toDo))
//                 console.log(e);
//                 console.log(this.innerText);
//             });
                
//         }
//     }

//     function displayLogic() {
//         dataArray.forEach(toDo => {
//             if(toDo.name === this.innerText) {
//                 let display = displayInfo.createDisplay(...Object.values(toDo));
//                 display.append()
//             }
//         });
//     }
//     return { addDisplayListener };
// }