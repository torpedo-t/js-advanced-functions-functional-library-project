let helperFunction = (collection) => {
    return collection instanceof Array ? collection.slice() : Object.values(collection)
}

let myEach = (collection, callback) => {
    let newCollection = helperFunction(collection)
    for (let i = 0; i < newCollection.length; i++) {
        callback(newCollection[i])
    }
    return collection
}

let myMap = (collection, callback) => {
    let newAry = []
    let newCollection = helperFunction(collection)
    for (let i = 0; i < newCollection.length; i++) {
        const result = callback(newCollection[i])
        newAry.push(result)
    }
    return newAry
}

// returns a single value
// acc starts at the value that's passed in as an argument
// , and with each successive step is updated to return the value of callback
// if a start value is not passed to myReduce, the first value in the collection should be used as the start value.
// callback is passed 3 arguments, the current value of acc, the current element/value in our iteration, and a reference to the entire collection.
// Hint: For the case when a start value for the accumulator is not passed in as an argument
// , think about how you'll need to adjust your function 
// to account for the fact that the first element of the collection has already been accounted for.
let myReduce = (collection, callback, acc) => {
    let newCollection = helperFunction(collection)
    if (!acc) {  
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }
    for (let i = 0; i < newCollection.length; i++) {
        acc = callback(acc, newCollection[i], newCollection)
    }
    return acc
}

// collection is an array of strings ["a", "b", "c"]
// predicate is a callback function with a truthiness value (element) => element === "c"
let myFind = (collection, predicate) => {
    // console.log(collection)
    for (let i = 0; i < collection.length; i++) {
        let element = collection[i] 
        // ((element) => element === "c")
        if (predicate(element)) {
            return element
        }
        // when iterating through collection, if value is equal to the value of the argument provided
        // stop iteration and return that value
        // else continue iterating through collection until value is found
        // return undefined if the value is not present in collection
    }
    return undefined
}

// collection is an array of integers [1, 2, 3, 4, 5, 6]
// predicate is a callback function with a truthiness value (element) => element % 2 == 0
let myFilter = (collection, predicate) => {
    let newAry = []
    let newCollection = helperFunction(collection)
    for (let i = 0; i < newCollection.length; i++) {
        let element = newCollection[i]
        if (predicate(element)) {
            newAry.push(element)
        }
    }
    return newAry
}

// collection is an array of integers or strings
// return value is an integer resembling the number of values in the collection
let mySize = (collection) => {
    for (let i = 0; i < collection.length; i++) {
        
    //     // after the first iteration we want to return 1
    //     // after each iteration following the first add 1
    //     // after successfully iterating through the entire collection return the sum 
    // }
    }
}