let password = document.getElementById('password');

class Password {
    static check(pass, lengthMin, capitalNeeded, numberNeeded, symbolNeeded) {
        return {
            lengthMet: pass.length >= lengthMin,
            capitalMet: capitalNeeded && /[A-Z]/.test(pass),
            numberMet: numberNeeded && /[0-9]/.test(pass),
            symbolMet: symbolNeeded && /\W/.test(pass)
        }
    }
};

password.addEventListener('input', function() {
    let check = Password.check(password.value, 8, true, true, true);

    console.log(check);

    updateRequirement('length', check.lengthMet);
    updateRequirement('capital', check.capitalMet);
    updateRequirement('number', check.numberMet);
    updateRequirement('symbol', check.symbolMet);
});

function updateRequirement(test, check) {
    document.querySelector(`#${test}-test`).className = check ? 'pass' : 'fail';
    document.querySelector(`#${test}-test .status`).innerHTML = check ? '✓' : 'O';
}

function toggleVisibility() {
    let newType = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', newType);
}