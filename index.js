// 1. Вивести в консоль квадрати чисел від 1 до 10 (за допомогою циклу)
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}

// 2. Написати код, який запитує через prompt пароль користувача, порівнює його з тим, який у неї збережений (захардкоджений у константі). Якщо пароль співпав - виводить на консоль “Ви успішно увійшли в систему”, якщо ні - продовжує запитувати пароль і перевіряти, поки не введуть правильно (за допомогою вічного цикла)

const Password_Stored = "Anna123";
let passwordInput = prompt("Enter your password:");

while (passwordInput !== Password_Stored) {
  passwordInput = prompt("Incorrect password. Please try again:");
}
console.log("You have successfully logged in.");

// or

while (true) {
  let passwordInput = prompt("Enter your password:");

  if (passwordInput === Password_Stored) {
    console.log("You have successfully logged in.");
    break;
  } else {
    alert("Wrong password!");
  }
}

// 3. Обчислити сумму чисел від 1 до 100 і вивести її в консоль

// 4. Вивести числа від 10 до 50, які кратні 5.

// 5. Намалювати в консолі символами “*” трикутник заданого користувачем розміру

// *
// **
// ***
// ****
// *****
// ******

// 6. Намалювати пустий квадрат з діагоналлю (зліва зверху - до права низу)

// 7. Задачка з *: Зробити квадрат зі зворотньою діагоналлю (з правого верхнього до лівого нижнього)
