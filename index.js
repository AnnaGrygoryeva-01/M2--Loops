// 1. Вивести в консоль квадрати чисел від 1 до 10 (за допомогою циклу)
for (let i = 1; i <= 10; i++) {
  console.log(i * i);
}

// 2. Написати код, який запитує через prompt пароль користувача, порівнює його з тим, який у неї збережений (захардкоджений у константі). Якщо пароль співпав - виводить на консоль “Ви успішно увійшли в систему”, якщо ні - продовжує запитувати пароль і перевіряти, поки не введуть правильно (за допомогою вічного цикла)

const passwordStored = "Anna123";
let passwordInput = prompt("Enter your password:");

while (passwordInput !== passwordStored) {
  passwordInput = prompt("Incorrect password. Please try again:");
}
console.log("You have successfully logged in.");

// or

while (true) {
  let passwordInput = prompt("Enter your password:");

  if (passwordInput === passwordStored) {
    console.log("You have successfully logged in.");
    break;
  } else {
    alert("Wrong password!");
  }
}

// 3. Обчислити сумму чисел від 1 до 100 і вивести її в консоль

let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum from 1 to 100 is:", sum);

// 4. Вивести числа від 10 до 50, які кратні 5.

for (let i = 10; i <= 50; i++) {
  if (i % 5 === 0) {
    console.log(i);
  }
}

// 5. Намалювати в консолі символами “*” трикутник заданого користувачем розміру

let triangleSize = Number(prompt("Enter the size of the triangle:"));

if (isNaN(triangleSize) || triangleSize <= 0) {
  console.log("Будь ласка, введіть коректне додатне число.");
} else {
  for (let i = 1; i <= triangleSize; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}

// 6. Намалювати пустий квадрат з діагоналлю (зліва зверху - до права низу)

const size = Number(prompt("Enter size of the square:"));

for (let i = 0; i < size; i++) {
  let row = "";
  for (let j = 0; j < size; j++) {
    if (i === 0 || i === size - 1 || j === 0 || j === size - 1 || i === j) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}

// 7. Задачка з *: Зробити квадрат зі зворотньою діагоналлю (з правого верхнього до лівого нижнього)

const squareSize2 = Number(prompt("Enter square size:"));

for (let i = 0; i < squareSize2; i++) {
  let row = "";
  for (let j = 0; j < squareSize2; j++) {
    if (
      i === 0 ||
      i === squareSize2 - 1 ||
      j === 0 ||
      j === squareSize2 - 1 ||
      i + j === squareSize2 - 1
    ) {
      row += "*";
    } else {
      row += " ";
    }
  }
  console.log(row);
}
