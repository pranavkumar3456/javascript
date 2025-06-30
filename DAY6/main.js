// console.log(this)

// function greet()
// {
//     console.log(this);
// }

// greet()

// let person1 = {
//     name: "pranav",
//     age:21,
//     printName: function(){
//         console.log(this.name)
//     }
// }
// person1.printName()

// let person2 = {
//     name: "karan",
//     age: 22
// }

// //call, Bind , Apply

// person1.printName.call(person2);

// use StrictMode;

// const hello = ()=>{
//     console.log(this);
// }

// hello()

// *Lexically inclosed context

// const user ={
//     name: "Alice",
//     greet:()=>{
//         console.log(this)
//     }
// }

// user.greet();

const user ={
    name: "Alice",
    greet:function(){
        const x= ()=>{
           console.log(this)
        };
        x();
        
    },
};

user.greet();