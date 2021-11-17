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
let myReduce = (collection, callback, acc = 0) => {
    let newCollection = helperFunction(collection)
    // let accumulator = acc === undefined ? 0 : acc
    for (let i = 0; i < newCollection.length; i++) {
        accumulator = callback(accumulator, newCollection[i], i, collection)
    }
    return accumulator
}