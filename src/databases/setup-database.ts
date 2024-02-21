/*
// Create or switch to the 'chatbotdb' database
use chatbotdb

// Create the 'daily' collection
db.createCollection('daily')

// Create the 'weekly' collection
db.createCollection('weekly')

// Create the 'monthly' collection
db.createCollection('monthly')

// Create the 'annual' collection
db.createCollection('annual')

db.daily.insert([
  { "first_name": "Liam", "last_name": "Anderson", "age": 30, "country": "USA" },
  { "first_name": "Maria", "last_name": "Gomez", "age": 28, "country": "Spain" },
  { "first_name": "John", "last_name": "Smith", "age": 35, "country": "USA" },
  { "first_name": "Ana", "last_name": "Silva", "age": 32, "country": "Brazil" },
  { "first_name": "Mohammed", "last_name": "Ali", "age": 27, "country": "Egypt" },
  { "first_name": "Lily", "last_name": "Johnson", "age": 29, "country": "Canada" },
  { "first_name": "Carlos", "last_name": "Lopez", "age": 31, "country": "Mexico" },
  { "first_name": "Olga", "last_name": "Ivanova", "age": 26, "country": "Russia" },
  { "first_name": "David", "last_name": "Kim", "age": 33, "country": "South Korea" },
  { "first_name": "Emily", "last_name": "Davis", "age": 30, "country": "Australia" },
]);

db.weekly.insert([
  { "first_name": "Liam", "last_name": "Anderson", "age": 30, "country": "USA" },
  { "first_name": "Maria", "last_name": "Gomez", "age": 28, "country": "Spain" },
  { "first_name": "John", "last_name": "Smith", "age": 35, "country": "USA" },
  { "first_name": "Ana", "last_name": "Silva", "age": 32, "country": "Brazil" },
  { "first_name": "Mohammed", "last_name": "Ali", "age": 27, "country": "Egypt" },
  { "first_name": "Lily", "last_name": "Johnson", "age": 29, "country": "Canada" },
  { "first_name": "Carlos", "last_name": "Lopez", "age": 31, "country": "Mexico" },
  { "first_name": "Olga", "last_name": "Ivanova", "age": 26, "country": "Russia" },
  { "first_name": "David", "last_name": "Kim", "age": 33, "country": "South Korea" },
  { "first_name": "Emily", "last_name": "Davis", "age": 30, "country": "Australia" },
  { "first_name": "Alice", "last_name": "Johnson", "age": 25, "country": "USA" },
  { "first_name": "Bob", "last_name": "Miller", "age": 31, "country": "Canada" },
  { "first_name": "Charlie", "last_name": "Garcia", "age": 28, "country": "Mexico" },
  { "first_name": "Diana", "last_name": "Smith", "age": 29, "country": "Brazil" },
  { "first_name": "Eva", "last_name": "Chen", "age": 27, "country": "China" },
  { "first_name": "Frank", "last_name": "Kowalski", "age": 32, "country": "Poland" },
  { "first_name": "Grace", "last_name": "Kim", "age": 30, "country": "South Korea" },
  { "first_name": "Hector", "last_name": "Hernandez", "age": 33, "country": "Spain" },
  { "first_name": "Isabel", "last_name": "Lopez", "age": 26, "country": "Colombia" },
  { "first_name": "Sophia", "last_name": "Martinez", "age": 28, "country": "Mexico" },
]);

db.monthly.insert([
  { "first_name": "Sophia", "last_name": "Martinez", "age": 28, "country": "Mexico" },
  { "first_name": "Liam", "last_name": "Anderson", "age": 30, "country": "USA" },
  { "first_name": "Ava", "last_name": "Garcia", "age": 29, "country": "Spain" },
  { "first_name": "Noah", "last_name": "Fernandez", "age": 32, "country": "Colombia" },
  { "first_name": "Olivia", "last_name": "Lee", "age": 26, "country": "South Korea" },
  { "first_name": "Lucas", "last_name": "Nguyen", "age": 31, "country": "Vietnam" },
  { "first_name": "Emma", "last_name": "Chen", "age": 33, "country": "China" },
  { "first_name": "Mia", "last_name": "Silva", "age": 27, "country": "Brazil" },
  { "first_name": "Alexander", "last_name": "Hernandez", "age": 34, "country": "Argentina" },
  { "first_name": "Elijah", "last_name": "Martinez", "age": 28, "country": "Mexico" },
  { "first_name": "Grace", "last_name": "Anderson", "age": 30, "country": "USA" },
  { "first_name": "Benjamin", "last_name": "Garcia", "age": 29, "country": "Spain" },
  { "first_name": "Aria", "last_name": "Fernandez", "age": 32, "country": "Colombia" },
  { "first_name": "Leo", "last_name": "Lee", "age": 26, "country": "South Korea" },
  { "first_name": "Zoe", "last_name": "Nguyen", "age": 31, "country": "Vietnam" },
  { "first_name": "Mason", "last_name": "Chen", "age": 33, "country": "China" },
  { "first_name": "Luna", "last_name": "Silva", "age": 27, "country": "Brazil" },
  { "first_name": "Eva", "last_name": "Hernandez", "age": 34, "country": "Argentina" },
  { "first_name": "Sophia", "last_name": "Martinez", "age": 28, "country": "Mexico" },
  { "first_name": "Liam", "last_name": "Anderson", "age": 30, "country": "USA" },
  { "first_name": "Ava", "last_name": "Garcia", "age": 29, "country": "Spain" },
  { "first_name": "Noah", "last_name": "Fernandez", "age": 32, "country": "Colombia" },
  { "first_name": "Olivia", "last_name": "Lee", "age": 26, "country": "South Korea" },
  { "first_name": "Lucas", "last_name": "Nguyen", "age": 31, "country": "Vietnam" },
  { "first_name": "Emma", "last_name": "Chen", "age": 33, "country": "China" },
  { "first_name": "Mia", "last_name": "Silva", "age": 27, "country": "Brazil" },
  { "first_name": "Alexander", "last_name": "Hernandez", "age": 34, "country": "Argentina" },
  { "first_name": "Isabella", "last_name": "Lopez", "age": 28, "country": "Colombia" },
  { "first_name": "Elijah", "last_name": "Martinez", "age": 28, "country": "Mexico" },
  { "first_name": "Grace", "last_name": "Anderson", "age": 30, "country": "USA" },
]);

db.annual.insert([
  { "first_name": "Sophia", "last_name": "Martinez", "age": 28, "country": "Mexico" },
  { "first_name": "Liam", "last_name": "Anderson", "age": 30, "country": "USA" },
  { "first_name": "Ava", "last_name": "Garcia", "age": 29, "country": "Spain" },
  { "first_name": "Noah", "last_name": "Fernandez", "age": 32, "country": "Colombia" },
  { "first_name": "Olivia", "last_name": "Lee", "age": 26, "country": "South Korea" },
  { "first_name": "Lucas", "last_name": "Nguyen", "age": 31, "country": "Vietnam" },
  { "first_name": "Emma", "last_name": "Chen", "age": 33, "country": "China" },
  { "first_name": "Mia", "last_name": "Silva", "age": 27, "country": "Brazil" },
  { "first_name": "Alexander", "last_name": "Hernandez", "age": 34, "country": "Argentina" },
  { "first_name": "Isabella", "last_name": "Lopez", "age": 28, "country": "Colombia" },
  { "first_name": "Elijah", "last_name": "Martinez", "age": 28, "country": "Mexico" },
  { "first_name": "Grace", "last_name": "Anderson", "age": 30, "country": "USA" },
  { "first_name": "Benjamin", "last_name": "Garcia", "age": 29, "country": "Spain" },
  { "first_name": "Aria", "last_name": "Fernandez", "age": 32, "country": "Colombia" },
  { "first_name": "Leo", "last_name": "Lee", "age": 26, "country": "South Korea" },
  { "first_name": "Zoe", "last_name": "Nguyen", "age": 31, "country": "Vietnam" },
  { "first_name": "Mason", "last_name": "Chen", "age": 33, "country": "China" },
  { "first_name": "Luna", "last_name": "Silva", "age": 27, "country": "Brazil" },
  { "first_name": "Eva", "last_name": "Hernandez", "age": 34, "country": "Argentina" },
  { "first_name": "Oliver", "last_name": "Taylor", "age": 29, "country": "Canada" },
  { "first_name": "Ava", "last_name": "Gomez", "age": 28, "country": "Mexico" },
  { "first_name": "Lucas", "last_name": "Wilson", "age": 30, "country": "USA" },
  { "first_name": "Emma", "last_name": "Perez", "age": 31, "country": "Spain" },
  { "first_name": "Logan", "last_name": "Smith", "age": 33, "country": "Colombia" },
  { "first_name": "Sophia", "last_name": "Davis", "age": 27, "country": "South Korea" },
  { "first_name": "Jackson", "last_name": "Johnson", "age": 28, "country": "Vietnam" },
  { "first_name": "Avery", "last_name": "Wang", "age": 26, "country": "China" },
  { "first_name": "Mia", "last_name": "Lopez", "age": 32, "country": "Brazil" },
  { "first_name": "Carter", "last_name": "Hernandez", "age": 29, "country": "Argentina" },
  { "first_name": "Isabella", "last_name": "Taylor", "age": 30, "country": "Canada" },
  { "first_name": "Emma", "last_name": "Garcia", "age": 28, "country": "Spain" },
  { "first_name": "Noah", "last_name": "Martinez", "age": 30, "country": "Mexico" },
  { "first_name": "Olivia", "last_name": "Nguyen", "age": 29, "country": "Vietnam" },
  { "first_name": "Liam", "last_name": "Rodriguez", "age": 32, "country": "Colombia" },
  { "first_name": "Ava", "last_name": "Lopez", "age": 26, "country": "USA" },
  { "first_name": "Isabella", "last_name": "Chen", "age": 31, "country": "China" },
  { "first_name": "Sophia", "last_name": "Smith", "age": 33, "country": "Brazil" },
  { "first_name": "Jackson", "last_name": "Taylor", "age": 27, "country": "Canada" },
  { "first_name": "Lucas", "last_name": "Hernandez", "age": 34, "country": "Argentina" },
]);
*/
