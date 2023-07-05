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
    length = len;
    breadth = bre;
    this.draw = function () {
        console.log("kya hal chal h")
    }
}
// object creation using constructoe function
// new keyword gives an empty object
let reactangleObject = new Rectangle();

// adding new property in object
reactangleObject.color = 'yellow';
console.log(reactangleObject);

// delete property
delete reactangleObject.color;
console.log(reactangleObject); 

