import React from "react";

let RandomNumbersList = ({ arr }) => {
    return (
        <ul>
            {arr.map((el, i) => (
                <li key={i}>{el}</li>
            ))}
        </ul>
    );
};

let RandomNumbersInfo = ({ min, max, count }) => {
    return (
        <div>
            liczby z przedziału:
            <br />
            min = {min}
            <br />
            max = {max}
            <br />
            ilość = {count}
        </div>
    );
};

let RandomNumbers = ({ min, max, count }) => {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    arr.join(", ");

    return (
        <>
            <RandomNumbersInfo min={min} max={max} count={count} />
            <RandomNumbersList arr={arr} />
        </>
    );
};

let min = 1;
let max = 9;
let count = 3;

export default function App() {
    return (
        <>
            <RandomNumbers min={min} max={max} count={count} />
        </>
    );
}
