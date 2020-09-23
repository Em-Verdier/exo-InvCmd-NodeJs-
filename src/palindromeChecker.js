const str = process.argv[2]

const isPalindrome = (str) => {
    str = str.toLowerCase()
    return str.split('').reverse().join('').toLowerCase() == str
}

if (process.argv.length != 3) {
    console.log("avertissment: palindromeChecker.js ne s'execute pas")
    process.exit(1)
}

console.log(isPalindrome(str))
