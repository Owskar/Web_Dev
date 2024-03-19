//array methods
let arr=[1,2,3,4,5,6];
console.log(arr);
arr.push(7);
for(let i=0;i<arr.length;i++){
    console.log(i,":",arr[i]);
}
console.log(arr.length);
console.log(typeof(arr));
arr.pop(6);
console.log("after pop",arr);
arr.shift(5);
console.log("after shift",arr);
arr.unshift(0);
console.log("after unshift",arr);
let sl=arr.slice(1,4);
console.log("sclied array",sl);
let sll=arr.splice(0,1,8)
console.log("splied array",sl);
console.log("index of 4",arr.indexOf(4));
console.log("after sort",arr.sort());
console.log("after resverse",arr.reverse());
//string operations
let text="javascript is awsome"

console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());
console.log("Length of string:", text.length);
console.log("Index of 'is':", text.indexOf("is"));
console.log("substring",text.substring(4,10));
let newText = text.replace("awsome", "amazing!");
console.log("After replacement:", newText);
let words = text.split(" ");
console.log("Split string:", words);



