const myArray = ["Windy", "Rain", "Fire Storm"];
myArray.sort(lengthSorter);
console.log(myArray)
function lengthSorter(a,b){
    if(a.length > b.length) return 1;
}