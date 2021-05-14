"use strict";

let stock = [];
let on = true;

function fillMachine() {
    for (let i = 0; i < 4; i++) {
        stock[i] = [];
        for (let j = 0; j < 6; j++) {
            stock[i][j] = Math.ceil(Math.random() * 2);
        }
    }
}
fillMachine();

// function inputNumber(first, second) {
//     let input;
//     if (on) {
//         input = second;
//         if (first !== 0) {
//             input = Integer.parseInt((String.valueOf(first) + String.valueOf(second)).trim());
//         }

//         if (input > 23) console.log("Input number is out of bounds...");

//         stock.forEach(row => {
//             row.forEach(element => {
//                 if (collection.getLocation() == input) {

//                     if (collection.getItems().get(0).getType() == "VOID") {
//                         System.err.println("Selected Row is empty...");
//                     } else {
//                         returnItem = collection.getItems().get(0);
//                         collection.getItems().remove(0);
//                         collection.getItems().add(new Item(2));
//                     }

//                 }
//             });
//         });
//     } else {
//         console.log("Machine is off...");
//     }
// }