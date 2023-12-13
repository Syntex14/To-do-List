import { isWeekend } from 'date-fns';
import format from 'date-fns/format'
import isToday from 'date-fns/isToday'

export function setMultipleAttributes(element, attrs) {
    for(let key in attrs) {
      element.setAttribute(key, attrs[key]);
    }
  }

 export function formatData(name, date, descr) {
    function formatName(name) {
        
    }

    function formatDate(date) {
        // how would I take a string and conver it to a date?
        // 12-10-23 OR 12-10-2023 
        // Would rather take a specific format from the user
        // E.g. 12/10/2023
        
        // When we get the date from the user, it'll be a string
        // Will have to break down the string into it's indivdual
        // compontents. 
        // E.g. '12/10/2023' will need to break down 
            // How would we break this down?
                // 1. Use regex on the string
                // 2. Would have to remove '/' from the string
                // 3. Would have to convert to use either isToday
                // OR isEqual from date-fns
                // To convert we need to use format new Date(YEAR,
                // MONTH, DAY)
                // use split('/') to split the date and get an 
                // array returning the split words
                // convert array to array of integers
                // minus one from 
                //[MONTH, DAY, YEAR]
                // CONST formatedDate = [formatedDateArray[2], ...]
    const stringDateArray = date.split('/');
    const intDateArray = [];
    for (let i = 0; i < stringDateArray.length; i++) {
        intDateArray.push(parseInt(stringDateArray[i]));
    }
    intDateArray[0] -= 1; // date-fn only takes 0 - 11 ints for months
                         // if user supplies 1, we get Feb, if 12, undefined
    let formatedDate = format(new Date(
        intDateArray[2], // year
        intDateArray[0], // months
        intDateArray[1]  // day
    ),
        'M-d-y'
    );

    return formatedDate;

    }

  

    function formatDescription(descr) {

    }

    return { formatName, formatDate, formatDescription }
  }

  export function sortByToday(toDo) { 
    const formatDateForCheck = toDo.dueDate.split('-');
    formatDateForCheck[0] -= 1
    console.log(formatDateForCheck);
    const result = isToday(new Date(
        +formatDateForCheck[2],
        formatDateForCheck[0],
        +formatDateForCheck[1]
    ));
    return result;
}

export function sortByWeekend(toDo) {
    const formatDateForCheck = toDo.dueDate.split('-');
    formatDateForCheck[0] -= 1
    console.log(formatDateForCheck);
    const result = isWeekend(new Date(
        +formatDateForCheck[2],
        formatDateForCheck[0],
        +formatDateForCheck[1]
    ));
    return result;
}

