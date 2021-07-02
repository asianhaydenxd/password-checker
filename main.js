function toggleVisibility() {
    let password = document.getElementById('password');
    let newType = password.getAttribute('type') === 'password' ? 'text' : 'password';

    password.setAttribute('type', newType);
}