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

let myReduce = (collection, callback, acc) => {
    let newCollection = helperFunction(collection)
    for (let i = 0; i < newCollection.length; i++) {
        
    }
}