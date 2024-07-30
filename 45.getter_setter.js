// In JavaScript, getters and setters are special functions that allow you to define the behavior of reading (get) and writing (set) a property on an object.
// They provide a way to encapsulate access to object properties, allowing you to control how values are set and retrieved.
// Properties initialized directly in the constructor will take precedence over any default values or behaviors defined in getters/setters.
// Generally, it's advisable to set initial values directly in the constructor and use setters for subsequent updates or validations rather than for initializations.


class User{
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    
    // If you defined any of them (get, set) you have to implement other also otherwise it will give error saying something like this "Cannot set property 'password' of #<User> which has only a getter"
    // When we defines both getter and setter and there is constructor also, this situation creates disputes who will initialize object and gives error- "RangeError: Maximum call stack size exceeded"
    // so to avoid ambiguity, put underscore(_) as a prefix before the the properties name so that no name conflict/clash possible
    
    get password() {
        return this._password
    }

    set password(newPassword) {
        this._password = newPassword
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(newEmail) {
        this._email = newEmail
    }
}

let user1 = new User("ranjan@mail.com", "ranjan123pass")
console.log(user1.password);    // ranjan123pass

user1._password = "ranjanchangedpass"

console.log(user1.password);    // ranjanchangedpass
console.log(user1._password);   // ranjanchangedpass
console.log(user1.email);       // RANJAN@MAIL.COM
console.log(user1._email);      // ranjan@mail.com
console.log(user1);             // User { _email: 'ranjan@mail.com', _password: 'ranjanchangedpass' }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Old style before ES6 when class was not a thing in javascript

    function User(email, password) {
        this._email = email
        this._password = password

        Object.defineProperty(this, 'email', {
            get: function() {
                return this._email.toUpperCase()
            },
            set: function(newEmail) {
                this._email = newEmail
            }
        })

        Object.defineProperty(this, 'password', {
            get: function() {
                return this._password.toUpperCase()
            },
            set: function(newPassword) {
                this._password = newPassword
            }
        })
    }

    let user2 = new User("iron@man.com", "iron123")
    console.log(user2);
    console.log(user2.email);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//another way

const User = {
    _email: "spiderman@mcu.com",
    _password: "spidypass",

    get email() {
        return this._email.toUpperCase()
    },

    set email(newEmail) {
        this._email = newEmail
    }
}

const user3 = Object.create(User)
console.log(user3);         // {}
console.log(user3.email);   // SPIDERMAN@MCU.COM