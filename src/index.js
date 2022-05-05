/**
 * Должна быть стрелочной функцией без фигурных скобок сразу возвращать значение
 * @param {string} string
 * @returns {string}
 */
export const capitalizeString = (string) => string.split(' ').map(item => `${item[0].toUpperCase()}${item.slice(1)}`).join(' ');

/**
 * Должна быть function declaration
 * @param {string} string
 * @returns {string}
 */
export const fenceString (string) {
    let arr = [];
    for(let i = 0; i < string.length; i++){
        if(string[i] === ' '){
            arr.push(string[i]);
        }
        else if(i % 2 === 0){
            arr.push(string[i].toLowerCase());
        }
        else if(i % 2 !== 0){
            arr.push(string[i].toUpperCase());
        }
    }
    return arr.join(''); 
};

/**
 * Должна быть function expression
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerIf = function (action, string) {
   const stringLow = string.toLowerCase()
   if (action === 'uppercase') {
      return stringLow.toUpperCase();
   } else if (action === 'lowercase') {
      return stringLow.toLowerCase();
   } else if (action === 'fence') {
      return fenceString(string);
   } else if (action === 'capitalize') {
      return capitalizeString(string);
   } else {
      return string;
   }
};

/**
 * Стрелочная
 * @param {'uppercase'|'lowercase'|'capitalize'|'fence'} action
 * @param {string} string
 * @returns {string}
 */
export const reducerSwitch = (action, string) => {
   switch (action) {
      case 'uppercase':
         return string.toUpperCase();
         break;
      case 'lowercase':
         return string.toLowerCase();
         break;
      case 'fence':
         return fenceString(string);
         break;
      case 'capitalize':
         return capitalizeString(string);
         break;
      default:
         return string;
   }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsForOf = (string) => {
   for (let i of string) {
      console.log(i);
   }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsFor = (string) => {
   for (let i = 0; i < string.length; i++) {
      console.log(text[i]);
   }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsWhile = (string) => {
   let i = 0;
   while (i < string.length) {
      console.log(text[i]);
      i++;
   }
};

/**
 Стрелочная
 * @param {string} string
 */
export const consoleLoggerWordsSplit = (string) => { string.split('').forEach(i => {
      console.log(i);
   });
};
