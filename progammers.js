const programmers = [
  "Dennis Ritchie",
  "Brian Kernighan",
  "Ken Thompson",
  "Linus Torvalds",
  "Bjarne Stroustrup",
  "Tim Berners-Lee",
  "Donald Knuth",
  "Alan Turing",
  "Mark Zuckerberg",
  "Bill Gates",
  "Larry Page",
  "Elon Musk",
  "Jack Dorsey",
  "Satoshi Nakamoto",
  "Ada Lovelace",
  "Grace Hopper",
  "Dan Ambramov",
  "Jordan Walke",
  "Ryan Dahl",
  "David Heinemeier Hansson",
  "Guido van Rossum",
  "Yukihiro Matsumoto",
  "Sergey Brin",
  "Lyndsey Scott",
  "Abhinav Asthana",
  "Abhijit Kane",
  "Ankit Sobti",
  "Loi Tran",
  "Charles Lee",
  "Tuan Nguyen",
  "Tan Vo",
];

// 3.0
function threePointOne() {
  function firstName(e) {
    return e.split(" ")[0];
  }
  const res31 = programmers.map(firstName);
  document.getElementById("3.1").innerHTML = res31.join("<br>");
}

threePointOne();

function threePointTwo() {
  function lastName(e) {
    return e.split(" ")[1];
  }
  const res32 = programmers.map(lastName);
  document.getElementById("3.2").innerHTML = res32.join("<br>");
}
threePointTwo();

function threePointThree() {
  const nameLength = programmers.reduce((foo, currentVal) => {
    if (currentVal) {
      return (currentVal.split(" ")[0].length += foo);
    }
    return 0;
  }, 0);
  document.getElementById("3.3").innerHTML = nameLength;
}
threePointThree();

function threePointFourth() {
  const nameLength = programmers.reduce((far, currentVal) => {
    if (currentVal) {
      return (currentVal.split(" ")[1].length += far);
    }
    return 0;
  }, 0);
  document.getElementById("3.4").innerHTML = nameLength;
}
threePointFourth();

function threePointFive() {
  const firstNameLength = programmers.reduce((foo, currentVal) => {
    if (currentVal) {
      return (currentVal.split(" ")[0].length += foo);
    }
    return 0;
  }, 0);
  const lastNameLength = programmers.reduce((far, currentVal) => {
    if (currentVal) {
      return (currentVal.split(" ")[1].length += far);
    }
    return 0;
  }, 0);
  document.getElementById("3.5").innerHTML = firstNameLength + lastNameLength;
}
threePointFive();

// 4.0

function sortByFirstName() {
  const r = programmers.sort();
  document.getElementById("4.1").innerHTML = r.join("<br>");
}
sortByFirstName();

// function sortByLastName() {
//   function splitName(e) {
//     return e.split(" ")[1];
//   }
//   const r = programmers.map(splitName);
//   r.sort();
//   console.log(r);
// }
// sortByLastName();
