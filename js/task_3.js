// # Завдання 3

// Напишіть функцію, яка приймає об'єкт з іменем та віком користувача і повертає рядок, що містить ім'я та повідомлення про те, скільки років їй або йому.

// Використайте деструктуризацію, щоб отримати доступ до імені та віку з переданого об'єкту.

function getUserInfo(user) {
    const { name, age } = user;
    return `Hello, my name is ${name} and I am ${age} years old.`;
  }
  
  const user = { name: 'John', age: 30 };
  console.log(getUserInfo(user)); // "Hello, my name is John and I am 30 years old."
  