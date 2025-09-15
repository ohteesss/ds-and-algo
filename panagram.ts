// function checkPanagram(str) {
//   // remove space
//   const removedSpaceStr = str.replace(/[ .]+/g, "").toLowerCase();

//   // use set to get unique alphabet characters
//   const uniqueSet = new Set(removedSpaceStr.split(""));
//   const uniqueArr = [...uniqueSet];

//   // count the arrag if not equal to 26 return false
//   return uniqueArr.length == 26 ? "YES" : "NO";
// }
function checkPanagram(str: string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let char of alphabet) {
    if (!str.includes(char)) {
      return false;
    }
  }
  return true;
}


console.log(checkPanagram("The quick brown fox jumps over the lazy dog."));
console.log(checkPanagram("Hello world."));


