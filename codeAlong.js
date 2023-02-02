let names = ['bob mARley', 'Randy john', 'kyle long', 'omAr sharif']
let nums =  [1,3,2,4,6,5,8,7,9]
const logNames = function(element, index){
    console.log(`${element} is at the index of ${index}.`)
}
names.forEach(logNames)

let filteredArray = nums.filter(num => {
    return num % 2 === 0
})
console.log(filteredArray)

let sum = nums.reduce((acc, curr) => {
    acc = acc * curr
})
console.log(sum)
// const copyChangeArr = (arr, callBack) => {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++){
//         let newValue = callBack(arr[i])
//         newArr.push(newValue)
//     }
//     return newArr
// }

const strToCamelCase = str => {
    let splitStr = str.split(' ')
    for (i = 0; i < splitStr.length; i++){
        splitStr[i] = splitStr[i].toLowerCase()
        if (i !== 0){
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1)
        }
    }
    return  splitStr.join('')
}

mappedArray = names.map(strToCamelCase);
 console.log(mappedArray)


class Users {
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName =lastName
    }
    greeting(){
        console.log(`Hello, my name is ${this.firstName}`)
    }
}

let nameObj = []

names.forEach (name =>{
    let nameArr = name.split(' ')
    let newUser = new Users(nameArr[0], nameArr[1])
    nameObj.push(newUser)
})

console.log(nameObj)

let firstNameArr = nameObj.map(user => {
    return user.firstName
})
let greet = (user) => {
    user.greeting()
}
nameObj.forEach(greet)


console.log(firstNameArr)