function setUsername(username){
    this.username = username;
}

function createUser(username, email, password){
    // setUsername(username)  //❌ this way, it won't set username (behind the scene it sets username but as soon as the work is done of setUsername() method, it gets releases from the callstack and doesn't wait for the previous realated method to execute hence this methods only returns  { email: 'amrishpuri@gmail.com', password: 'password123' } but does not set username.)
            // setUsername(username) is called without specifying the 'this' context explicitly. Therefore, this inside setUsername does not refer to the instance of createUser, and this.username is not set on the user1 object as intended.

    setUsername.call(this, username)  //✅ this is the correct way to call other function (setUsername) if that function is related to this function. And for this we also have to pass 'this' of current context.
    //By using setUsername.call(this, username), you ensure that this inside setUsername refers to the same object as this in the createUser function.

    this.email = email;
    this.password = password;
}

const user1 = new createUser("Amrish Puri", "amrishpuri@gmail.com", "password123");
console.log(user1);