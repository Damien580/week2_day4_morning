// Write your code below
function checkPalindrome(string) {
    for (i = 0; i < string.length / 2; i++){
       string = string.toLowerCase()
        if (string[i] !== string[string.length - 1 -i]){
            return 'It\'s not a palindrome.'
        }
    }
    return 'It\'s a palindrome.'

}

console.log(checkPalindrome('raCecaR'))


const isPalindrome = str => {
    for (let i = 0; i < str.length; i++){
    let finalIndex = str.length - 1 - i

    if(str[i] !== str[finalIndex]){
        return false
    }
    }
    return true
}
console.log(isPalindrome('tacocat'))
console.log('========================')

const isPalindromeMethods = str => {
    let reverseStr = str.split('').reverse().join('')
    return str === reverseStr
}

console.log(isPalindromeMethods('yahoo'))
