// open index.html and check the console

let array = [
    1,1,1,1,1,2,2,2,3,3,4,5,6,7,7,7,7,7
]

let obj = {}

array.forEach(n => {
    if(obj[n]){
        obj[n] = obj[n] +1
    } else {
        obj[n] = 1
    }
})

console.log(array)
console.log(obj)