// There are alwasys two types of data 

//  # Primitive ===> 7 types of data
//  # Non-Primitive or reference type 

// one more thing called "call by value" or "call by reference" we will discuss more about this

// # Primitive Type  are alwys call by value they always give copy of data
// String
// Number
// Boolean
// null
// undefined
// Symbol
// 


// # Refence Type / Non-Primitive
//  are the group of data and the collection of data
// they provide the reference of the value

// const heroes = ["saktiman", "boga", "spiderman"];
// const heroes1 = { name: "saktiman", boga: "boga", marvelname: "spiderman" }

// console.table([heroes,heroes1])






// Javascript is a loosely types language

// let sym = Symbol('123')
// console.log(sym);
// let sym1 = Symbol('123')
// console.log(sym1 === sym);




// Now we have something like storing funciton in variable just like that
// all data types always returns the data type of function excepts function. functin always retuns object functions

const fun = function () {
    console.log("variable function called also knwon as function statement")
}
console.log(typeof fun)







