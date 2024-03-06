
const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const result = document.getElementById("result");
function isInputEmpty(stringInput) {
    return stringInput === "";
}

function sanitizeInput(stringInput) {
    return stringInput.replace(/[^a-z0-9]/gi, '');
}
const checkInputIfPalindrome = () =>{
    const textInputValue = sanitizeInput(textInput['value']).toLowerCase();
    if (isInputEmpty(textInputValue)) {
        alert("Please input a value");
    }
    else
    {
        let isPalindrome = true;
        for (let i = 0; i < textInputValue.length / 2; i++) {
            if (textInputValue[i] !== textInputValue[textInputValue.length - 1 - i]) {
                isPalindrome = false;
            }
        }
        if (isPalindrome)
        {
            const palindromeResult = document.createElement('span');
            palindromeResult.textContent = `${textInput['value']} is a palindrome`;
            result.appendChild(palindromeResult);
        }
        else
        {
            const palindromeResult = document.createElement('span');
            palindromeResult.textContent = `${textInput['value']} is not a palindrome`;
            result.appendChild(palindromeResult);
        }
        textInput['value'] = '';
    }
}
checkButton.addEventListener('click', function() {
    checkInputIfPalindrome();
});