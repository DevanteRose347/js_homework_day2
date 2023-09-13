//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
// def display():
//     for food in person3[]:
function display() {
    let person3 = {
        pizza: ["Deep Dish", "South Side Thin Crust"],
        tacos: "Anything not from Taco bell",
        burgers: "Portillos Burgers",
        ice_cream: ["Chocolate", "Vanilla", "Oreo"],
        shakes: [{
            oberwise: "Chocolate",
            dunkin: "Vanilla",
            culvers: "All of them",
            mcDonalds: "Sham-rock-shake",
            cupids_candies: "Chocolate Malt"
        }]
    }

    for (let [key, value] of Object.entries(person3)) {
        if (Array.isArray(value)) {
            console.log(`${key}:`)
            value.forEach(value => console.log(value))
        } else {
            console.log(`${key}: ${value}`)
        }
    }
}
display()

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age,) {
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method

    this.printInfo = () => {
        console.log(` The Name is: ${this.name} \n and the Age: ${this.age} years old`)

        return 'yoo'
    };
    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age
    this.age_inc = () => {

        this.age++
    };
}




let person_one = new Person('Mike', '6')

let person_two = new Person('Sarah', '8')
person_two.age_inc();
person_two.age_inc();
person_two.age_inc();

console.log(person_one)

console.log(person_two)

console.log(person_one.printInfo())

console.log(person_two.printInfo())




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve("Big word");
        } else {
            reject("Small Number");
        }
    });
}

checkStringLength("Hello World!")
    .then(result => console.log(result))
    .catch(error => console.log(error));


// Write a function that takes an array of numbers and returns the sum of the numbers. 
// The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

//python version

// def sum_array(a):
// sum = 0
// for num in a:
//     sum += num
// return sum


//java version

function sumArray(a) {
    let sum = 0;
    for (let num of a) {
        sum += num;
    }
    return sum;
}


//second one new
//Create a function with two arguments that will return an array of the first n multiples of x.
function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}
