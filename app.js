// 1
// function reverse(str_input) {
//     let reversed = ""
//     for (let i = str_input.length - 1; i >= 0; i--) {
//         reversed += str_input[i]
//     }
//     console.log(reversed);
// }
// reverse("program");


// 2
// function Str(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }
// const newstr = Str("this is Test");
// console.log(newstr);


// 3

// function one(arr) {
//     var newArr = []
//     for (var i = 0; i < arr.length; i++) {
//         if (newArr.indexOf(arr[i]) === -1) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }
// console.log(one([1,2,3,3,4,5,4,4,4,5,5]))


// 4
// let mindX = [];
// let nhanVien = {}
// nhanVien = { name: "Nam", old: 18, price: "20000", position: "Sam" }
// mindX.push(nhanVien);
// nhanVien = { name: "Nam", old: 18, price: "20000", position: "Sam" }
// mindX.push(nhanVien);
// nhanVien = { name: "Nam", old: 18, price: "20000", position: "Sam" }
// mindX.push(nhanVien);
// console.log(mindX);

// while (true) {
//     let userInput = prompt("Nhap C, R, U, D");
//     if (userInput === "C") {
//         let newName = (prompt("Enter new Name"));
//         let newOld = (prompt("Enter new Old"));
//         let newPrice = (prompt("Enter new Price"));
//         let newPosition = (prompt("Enter new Position"));

//         nhanVien.name = newName;
//         nhanVien.old = newOld;
//         nhanVien.price = newPrice;
//         nhanVien.position = newPosition;
//         mindX.push(nhanVien);
//         for (let i = 0; i <= mindX.length - 1; i++) {
//             console.log(`${mindX[i]}`);
//         }
//     } else if (userInput === "R") {
//         for (let i = 0; i <= mindX.length - 1; i++) {
//             nhanVien = mindX[i];
//             for (let key in nhanVien) {
//                 console.log(key, nhanVien[key]);
//             }
//         }
//     } else if (userInput === "U") {

//     } else if (userInput === "D") {

//     } else if (userInput === "E") {
//         break;
//     }
// }


