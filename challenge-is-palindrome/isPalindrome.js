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


