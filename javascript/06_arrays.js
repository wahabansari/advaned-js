const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const myArr2 = new Array('a', 's', 'v', 'b', 'g');
// // console.log(myArr2);

/******  Methods on array ******/

/** 1. Push ==> add value at last index of an array
    myArr.push(10)
    console.log(myArr);
**/


/** 2. Pop ==> Remove last index from an array 
    myArr.pop()
    console.log(myArr);
**/


/** 3. unhsift ==> Add element at start index of an array ==> not much used
    myArr.unshift(10)
    console.log(myArr);
**/


/** 3. shift ==> Remove first index from an array 
    myArr.shift();
    console.log(myArr);
**/


/** 4. includes ==> Check if the element is present inside and return true or false  
    console.log(myArr.includes(4));
**/


/** 4. indexOf ==> Check the indexOf an element inside of an array 
    console.log(myArr.indexOf(7));
**/


/** 4. join ==> It can be used for both array and string for joining strings and arrays.It will join the array and converts the array into string 
 
    const newArr = myArr.join();
    console.log(newArr);
    console.log(typeof newArr);
**/


/** 4. Slice ==> Returns new array from slicing and array from index to the last index. The last index wil not include in this slicing.
 
    let myNewArray = myArr.slice(1, 3);
    console.log(myNewArray);
    console.log(myArr);
  **/


/** 5. Splice ==> Returns new array from slicing and array from index to the last index. The last index wil not include in this slicing.

    let myNewArray = myArr.splice(1, 3);
    console.log(myNewArray);
    console.log(myArr);
**/








//******  More About Arrays ******//

const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman"];


/** 6. concat() ==> this usually returns a new array so when we use concat we need to make it a variable so that it can store the new array in that variable

    let arr = marvel_heroes.concat(dc_heroes);
    console.log(arr);
**/


/** 7. Spread ==> It used to spread values in an array 
    const spreadArray = [...marvel_heroes, ...dc_heroes]
    console.log(spreadArray);
**/


/** 8. Flat ==> if there is a condition where we have array inside of ad array and then inside of an array and you want it to be in a single array so in that case we use "flat" method. 

    const flatArray = [1, 2, 3, 4, [4, 5, 6, [7, [8, 9]]], 10]
    console.log(flatArray.flat(Infinity));
**/


// console.log(Array.isArray("Sunhub")); //==> checks if this is an array or not

// console.log(Array.from("Sunhub")); //==> converts the string into an array

// console.log(Array.from({ name: "Sunhub", type: "Solar marketplace", brand: true })); //==> Interesting this will return empty object because we have to define how this object has to be created.



let score = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score, score2, score3)) //==> takes set of elements and create an array from them





