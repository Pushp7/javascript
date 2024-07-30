//Static methods are meant to operate on the class level, not on individual instances.
//Static method is not dependent on instance-specific data.

class User{
    constructor(username){
        this.username = username
    }

    //Instance method
    logMe(){
        console.log(`username: ${this.username}`);
    }

    //static method
    static BatchId(){       // static keyword stops any object to accessing particular methods or properties. But we can call it using class name.
        return "xyz987"
    }
}

const user1 = new User("PushpRaj")
console.log(user1.BatchId());    // this will give error saying "user1.BatchId is not a function" because it is static. It can not be called using 'object.staticmethod'.
console.log(User.BatchId());     // xyz987   => calling this way it won't give any error. we can call static method using 'classname.staticmethod'.




class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const teacher1 = new Teacher("JohnWick", "john@teacher.com")
console.log(teacher1.BatchId());    // this will give error saying "teacher1.BatchId is not a function". Same problem as above.

//Note: static methods are also inherited by child classes when using inheritance, for ex-
console.log(Teacher.BatchId());    // xyz987
