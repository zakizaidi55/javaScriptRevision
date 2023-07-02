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

function Rectangle() {
    this.length = 1;
    this.breadth = 2;
    this.draw = function () {
        console.log("kya hal chal h")
    }
}
// object creation using constructoe function
let reactangleObject = new Rectangle();