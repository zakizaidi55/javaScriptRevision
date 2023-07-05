console.log("Hello jee kaise ho saare ")

// let rectangle ={
//     length:1,
//     breadth:2,

//     draw:function() {
//         console.log("Kuya hal chal hai mitro")
//     }
// }

// factory function
// function createRectangle(length, breadth) {
//     return rectangle ={
//         // length:length,
//         // breadth:breadth,
//             // or
//         length,
//         breadth,
    
//         // draw:function() {
//         //     console.log("Kuya hal chal hai mitro")
//         // }
//         draw() {
//             console.log("Kya hal chal hai mitro")
//         }
//     };
// }

// let obj1 = createRectangle(14,21);
// obj1.length;


// constructor function -> Pascal Notation

function Rectangle(len, bre) {
    this.length = len;
    this.breadth = bre;
    this.draw = function () {
        console.log("kya hal chal h")
    }
}
// object creation using constructor function
// new keyword gives an empty object
// let reactangleObject = new Rectangle(); // new keywords give empty object 

// adding new property in object
// reactangleObject.color = 'yellow';
// console.log(reactangleObject);

// // delete property
// delete reactangleObject.color;
// console.log(reactangleObject); 


// constructor 

let Rectangle1 = new Function(
    'length', 'breadth',
    `this.length = length;
    this.breadth = breadth;
    this.draw = function () {
    console.log("kya hal chal h")
}`);

// object create using Rectangle1

let rect1 = new Rectangle1(2,3);
console.log(rect1);


// in primitive copy is created

// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);

// in reference-> points to the same address
let a = {value:10};
let b = a;

a.value++;
console.log(a.value);
console.log(b.value);

// object clonning
let obj2 = {} ;
// using for in loop

// 2nd
let dest = Object.assign({}, src, src2);

// 3rd
let dest1 = {...src}

