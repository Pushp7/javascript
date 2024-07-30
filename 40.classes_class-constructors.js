// ES6

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {      // we don't use function keywords inside a class while defining it.
        return "abc%&qwert" + this.password + "zw@75"
    }

    capitalizeUsername() {
        return this.username.charAt(0).toUpperCase() + this.username.slice(1);
    }
}

const user1 = new User("aditya", "aditya@example.com", "password123");
console.log(user1);
console.log(`encrypted password: ${user1.encryptPassword()}`);
console.log(`Capitalized username: ${user1.capitalizeUsername()}`);




//behind the scenes⤵️

// function User(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPassword = function() {
//     return "abc%&qwert" + this.password + "zw@75"
// }

// User.prototype.capitalizeUsername = function() {
//     return this.username.charAt(0).toUpperCase() + this.username.slice(1);
// }

// const user2 = new User("shambhavi", "shambhavi@example.com", "HelloKon?");
// console.log(user2);
// console.log(`encrypted password: ${user2.encryptPassword()}`);
// console.log(`Capitalized username: ${user2.capitalizeUsername()}`);