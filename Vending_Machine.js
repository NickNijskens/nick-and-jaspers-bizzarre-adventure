"use strict";

//Merge sort code van: https://stackabuse.com/merge-sort-in-javascript/

let stock = [];
let on = false;
let items = [0.5, 1.5, 0.5, 1.24, 2.40, 0.75, 1.35, 2.00, 0.5, 0.75, 1.75, 1.05, 1.20, 5.00, 2.20, 1.25, 0.65, 0.34, 1.24, 1.44, 2.24, 5.50, 1.00];

function run() {
    let selectedItem;

    function pressOnButton() {
        on = !on;
    }

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

    function getStock() {
        let returnStock = [];
        let tempArray = [];

        stock.forEach(row => {
            tempArray = [];
            row.forEach(item => {
                tempArray.push(item[0]);
            });
            returnStock.push(tempArray);
        });

        console.log(returnStock);
    }

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

    function mergeSort(array) {
        const half = array.length / 2;

        if (array.length < 2) {
            return array;
        }

        const left = array.splice(0, half);
        return merge(mergeSort(left), mergeSort(array));
    }

    function merge(left, right) {
        let arr = [];

        while (left.length && right.length) {
            if (left[0] < right[0]) {
                arr.push(left.shift());
            } else {
                arr.push(right.shift());
            }
        }

        return [...arr, ...left, ...right];
    }

    function dropAnItem(first, second) {
        inputNumber(first, second);
        ejectItem();
    }

    function execute() {
        pressOnButton();
        fillMachine();
        console.log(mergeSort(items));

        getStock();
        dropAnItem(0, 2);
        dropAnItem(0, 2);
        dropAnItem(0, 2);
        dropAnItem(0, 2);

        dropAnItem(0, 2);
        dropAnItem(2, 4);
    }

    execute();
}

run();