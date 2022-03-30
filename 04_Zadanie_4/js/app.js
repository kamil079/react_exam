import React from "react";

let ExamEl = ({ txt }) => {
    return <div>{txt}</div>;
};
let Button = ({ txt }) => {
    return <button>{txt}</button>;
};

export default function App() {
    return (
        <>
            <ExamEl txt={"egzamin"} />
            <Button txt={"Klik!"} />
        </>
    );
}
