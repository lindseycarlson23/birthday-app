function storeBirthday() {
    const birthdayInput = document.getElementById('birthday').value;
    localStorage.setItem('userBirthday', birthdayInput);
    document.getElementById('result').textContent = 'Happy Birthday!';
}