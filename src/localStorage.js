let name = "Cody";

let age = 31;

let pets = ["Ozzy", "Lola"];

localStorage.setItem("name", myName);
localStorage.setItem("age", age);
localStorage.setItem("pets", JSON.stringify(pets));

console.log(localStorage);


    // JSON: JavaScript Object Notation
    // {
    // "name": "Cody",
    // "pets": '["Ozzy", "Lola"]'
    //   }
