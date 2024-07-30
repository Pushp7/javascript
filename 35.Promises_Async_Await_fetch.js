const promiseOne = new Promise(function(resolve, reject){
    //DO async task
    //for e.g.-  DB calls, cryptography, network
    
    setTimeout(function(){
        console.log("Async task 1 completed");
        resolve()
    }, 1000)
})

promiseOne.then(function(){         // resolve() is connected to then(). It means when everything done suceessfully and resolved then only then() will be executed. Similary reject() is connected to catch().
    console.log("Promise consumed");
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseThree = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({username: "foo", password: "bar"})
    }, 1000)
})
 promiseThree.then((user)=>{
    console.log(user);      // { username: 'foo', password: 'bar' }
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if(!error){
            resolve({username: "Pushp Raj", email: "pushp@example.com"})
        }
        else{
            reject()
        }
    }, 1000);
})

promiseFour.then((obj)=>{
    console.log(obj);   // { username: 'Pushp Raj', email: 'pushp@example.com' }    => if resolved
}).catch(()=>{
    console.log("problem ho gya"); 
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// promise chain
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ username: "Pushp Raj", email: "pushp@example.com" })
        }
        else {
            reject("Kuchh to gadbad hai Daya")
        }
    }, 1000);
})

promiseFive.then((obj) => {
    console.log(obj);           //{ username: 'Pushp Raj', email: 'pushp@example.com' }     =>if resolved
    return obj.username         //when we return a value inside then() method, that value is passed to the next then() callback in the promise chain.
}).then((myUsername) => {
    console.log(myUsername)     //Pushp Raj     =>if resolved
}).catch((error) => {
    console.log(error);         //Kuchh to gadbad hai Daya      =>if rejected
}).finally(() => {
    console.log("Finally will run in both the cases, either it is resolved or rejected");
})

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseSix = new Promise(function (resolve, reject) {
    setTimeout(function() {
        let error = true
        if (!error) {
            resolve({ language: "javascript", extension: ".js" })
        }
        else {
            reject("error: Kuchh to gadbad hai Daya")
        }
    }, 1000);
})

async function consumePromiseSix(){
    try {
        const response = await promiseSix
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseSix()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

async function getAllUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("couldn't fetch data");
    }
}
getAllUsers()

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => {
        return response.json()
    })
    .then((data)=>{
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++