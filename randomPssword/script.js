const passwordBox = document.getElementById('password');
const length = 10;

const upperCase =  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const loweCase = "abcdefghijklmnopqrstuvwxyz";
 const numbers = "0123456789"; 
 const symbule = "!@#$%^&*()_+{}|\[];:><?_-=";

 const allChars = upperCase + loweCase + numbers + symbule ;

 function createPassword(){
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += loweCase[Math.floor(Math.random() * loweCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbule[Math.floor(Math.random() * symbule.length)];


    while (length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    passwordBox.value = password;
 }