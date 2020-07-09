// function capitalize(str,arr){
//   for(let i = 0; i <= arr.length - 1; i++) {
//    let before = str.slice(0, arr[i]);
//    let index = str.slice(arr[i], arr[i] + 1).toUpperCase();
//    let after = str.slice(arr[i] + 1)
//    str =`${before}${index}${after}`;
//   }
//   return str;
// };

function capitalize(str, arr) {
  return arr.reduce((capitalizedStr, i) => {
    let before = capitalizedStr.slice(0, i);
    let index = capitalizedStr.slice(i, i + 1).toUpperCase();
    let after = capitalizedStr.slice(i + 1);
    return before + index + after;
  }, str);
}

module.exports = capitalize;
