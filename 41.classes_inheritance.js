class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }
}

class Teacher extends User{     // we can inherit other classes using extends keyword. This is called Inheritance. 
    constructor(username, email, password){
        super(username)    // here, super method implicitly carries 'this' context to its parrent class. So we don't need to call the other function and pass 'this' context.
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course is added by ${this.username}`);
    }
}

const teacher1 = new Teacher("hitesh", "hiteshsir@gmail.com", "axbycz")
console.log(teacher1);  // Teacher { username: 'hitesh', email: 'hitesh', password: 'axbycz'}
console.log(teacher1.username);     // hitesh
console.log(teacher1.addCourse());  // A new course is added by hitesh
console.log(teacher1.logMe());      // username: hitesh

const user1 = new User("saurabh")
console.log(user1.username);        // saurabh
console.log(user1.logMe());         // username: saurabh
console.log(user1.addCourse());     // this will give error saying "user1.addCourse is not a function"

console.log(teacher1 === user1);           // false => both user1 and teacher1 are instances of different classes.
console.log(teacher1 === Teacher);         // false => because teacher1 is an Instance but Teacher is a class, so they can not be equal.
console.log(teacher1 instanceof Teacher);  // true
console.log(teacher1 instanceof User);     // true  => because Teacher class inherits from the User class and teacher1 is the instance of Teacher class, so teacher1 will also be considered as instance of User class.
console.log(user1 instanceof Teacher);     // false => User class does not inherit from the Teacher class.
