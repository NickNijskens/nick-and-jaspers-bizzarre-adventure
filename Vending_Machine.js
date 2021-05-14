"use strict";

let stock = [];
let on = false;

function run() {
    let selectedItem;

    function pressOnButton() {
        on = !on;
    }
    pressOnButton();

    function fillMachine() {
        let index = 0;
        for (let i = 0; i < 4; i++) {
            stock[i] = [];
            for (let j = 0; j < 6; j++) {
                stock[i][j] = [Math.ceil(Math.random() * 2), index, 4];
                index++;
            }
        }
    }
    fillMachine();
    console.log(stock);

    function inputNumber(first, second) {
        if (on) {
            let input = second;
            if (first !== 0) {
                let f = first.toString();
                let s = +second.toString();

                input = parseInt(f + s);
            }

            if (input > 23) console.log("input out of bounds...");

            stock.forEach(row => {
                row.forEach(item => {
                    if (item[1] === input);
                    selectedItem = item;
                });
            });
        }
    }

    function ejectItem() {
        if (on) {
            if (selectedItem[0] === 0) {
                console.log("No item was selected or Row is empty...");
            } else if (selectedItem[0] === 1) {
                selectedItem[2]--;
                console.log("You got a DRINK from: " + selectedItem[1]);
            } else if (selectedItem[0] === 2) {
                selectedItem[2]--;
                console.log("You got a COOKIE from: " + selectedItem[1]);
            }

            if (selectedItem[2] === 0) {
                selectedItem[0] = 0;
            }
        }
    }

    function dropAnItem(first, second) {
        inputNumber(first, second);
        ejectItem();
    }

    dropAnItem(0, 2);
    dropAnItem(0, 2);
    dropAnItem(0, 2);
    dropAnItem(0, 2);

    dropAnItem(0, 2);
    dropAnItem(2, 4);

}
run();