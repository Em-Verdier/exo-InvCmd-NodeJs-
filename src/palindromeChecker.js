const str = process.argv[2]

const isPalindrome = (str) => {
    str = str.toLowerCase()
    return str.split('').reverse().join('').toLowerCase() == str
}

console.log(isPalindrome(str))
