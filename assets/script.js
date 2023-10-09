// function to collect and store user's birthday in local storage
function storeBirthday() {
    const birthdayInput = document.getElementById('birthday').value;
    localStorage.setItem('userBirthday', birthdayInput);
    // This resulting display is a placeholder that can be replaced with our API results
    document.getElementById('result').textContent = 'Happy Birthday!';
}