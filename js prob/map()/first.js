// first
// let mymap = new Map();
// mymap.set('name','Arpit');
// mymap.set('age',25);
// mymap.set('city','delhi');

// for(let [key,value] of mymap){
//     console.log(key,value)
// }

// let mymap = new Map();
// mymap.set(101,'Arpit');
// mymap.set(102,'Ankit');
// mymap.set(103,'Aman');
// mymap.set(104,'Rohit');

// for(let [key,value] of mymap){
//   if(key===102){
//     console.log(value)
//   }
// }

// count characters in a string
// let str = "banana";
// let freq = new Map();
// for (let ch of str) {
//   if (freq.has(ch)) {
//     freq.set(ch, freq.get(ch) + 1);
//   } else {
//     freq.set(ch, 1);
//   }
// }
// for (let ch of str) {
//   freq.set(ch, (freq.get(ch) || 0) + 1);
// }
// console.log(freq);

// let str = "I love coding and I love JavaScript";
// let freq = new Map();
// str = str + " ";
// let wordsArr = []
// console.log(wordsArr);
// let temp="";
// for(let ch of str){
//     if(ch !== " "){
//         temp+=ch;
//     }else{
//         wordsArr.push(temp);
//         temp="";
//     }
// }

// for(let word of wordsArr){
//     freq.set(word,(freq.get(word)||0)+1)
// }

// console.log(wordsArr);
// console.log(freq);
// for (let word of wordsArr) {
//     console
// }

// for(let word of wordsArr){
//     freq.set(word,(freq.get(word)||0)+1)
// }

// console.log(freq);

// Unique elements with Map
// Given an array [1, 2, 2, 3, 4, 4, 5], use a Map to remove duplicates.
//  Expected output: [1, 2, 3, 4, 5]
//  Hard (Interview Level)

// Group anagrams
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]
//  Use a Map to group words that are anagrams.
// Expected output:

// [
//   ["eat","tea","ate"],
//   ["tan","nat"],
//   ["bat"]
// ]

// Two Sum with Map
// Input: nums = [2,7,11,15], target = 9
//  Use a Map to find indices of two numbers that add up to target.
// Expected output: [0, 1] (because 2 + 7 = 9)

// let numArr = [1, 2, 2, 3, 4, 4, 5];
// let freq = new Map();
// for(let num of numArr){
//     freq.set(num,true);
// }
// console.log(freq.keys());
// const uniqueArray =[...freq.keys()];
// console.log(uniqueArray);

// let strArray = ["eat"];
// let anagramMap = new Map();
// let grpArray = [];
// let countArr = new Array(26).fill(0);
// for (let str of strArray) {
//   for (let ch of str) {
//     countArr[ch.charCodeAt(0) - "a".charCodeAt(0)]++;
//   }
//   let strtemp = "";
//   for (let i = 0; i < 26; i++) {
//     if (countArr[i] > 0) {
//       strtemp =
//         strtemp + String.fromCharCode(i + "a".charCodeAt(0)) + countArr[i];
//     }
//   }
//   anagramMap.set(str, strtemp);
//   strtemp = "";
//   countArr.fill(0);
// }

// let tempmap = new Map();
// for (let [key, value] of anagramMap) {
//   if (!tempmap.get(value)) {
//     tempmap.set(value, [key]);
//   }else{
//       tempmap.get(value).push(key);
//   }
// }

// console.log(tempmap);

// const finalArr = [...tempmap.values()];
// console.log(finalArr);

// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Explanation: nums[0] + nums[1] = 2 + 7 = 9

let nums = [2, 7, 3, 11, 15, 6];
let result = [];
let target = 9;
let numMap = new Map();
for (let i = 0; i < nums.length; i++) {
  let complement = target - nums[i];
  if (!numMap.has(complement)) {
    numMap.set(nums[i], i);
  } else {
    // console.log([numMap.get(complement),i])
    result.push([numMap.get(complement), i]);
  }
}
console.log(result);
