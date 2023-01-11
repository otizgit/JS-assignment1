// Question1:
firstName = prompt("Enter first name: ");
secondName = prompt("Enter second name: ")
randomNumber = Math.floor(Math.random() * 100)

if (firstName == "" && secondName == "") {
    alert("Sorry, you must enter a name");
} else if (firstName != "" && secondName != "") {
    alert("The love percentage between " + firstName + " and " + secondName + " is " + randomNumber + "%");
}

//! Question2:
array1 = [10, 20, 25, 24, 50];
array2 = [5, 4, 5, 6, 2];

let a = 0;
let b = 0;
while (a < array1.length && b < array2.length) {
  console.log(array1[a] / array2[b]);
  a++;
  b++;
}

//? Question2:
profiles = [
  { name: "Rache", gender: "female" },
  { name: "John", gender: "male" },
  { name: "Cherish", gender: "female" },
  { name: "Fareeda", gender: "female" },
  { name: "Fatima", gender: "female" },
];

profiles.forEach(function (items) {
  if (items.gender === "female") {
    console.log(items.name);
  }
});

let i = 0;
while (i < 5) {
  if (profiles[i].gender === "female") {
    console.log(profiles[i].name);
  }
  i++;
}
