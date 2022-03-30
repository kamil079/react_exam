import React from "react";

// let RandomNumbersList = ({props}) => {
//     return (
//         <div>
//             wylosowane liczby {arr.join(', ')}
//         </div>
//     )
// }

let RandomNumbersInfo = ({props}) => {
    return (
        <div>
            liczby z przedziału:<br/>
            min = {min}<br/>
            max = {max}<br/>
            ilość = {count}
        </div>
    )
}

let RandomNumbers = ({ props }) => {

    let randomNr = () => {
        let arr = [];

        for (let i = 0; i < count; i++) {
            arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return arr.join(', ');

    };

    return (
        <>wylosowane liczby w ilości {count} to {randomNr()}
        <RandomNumbersInfo min={min} max={max} count={count}/>
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