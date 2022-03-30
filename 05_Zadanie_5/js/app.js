import React from "react";

let Square = () => {
    const size = "200px";
    return <div style={{background: 'blue', height: size, width: size}}></div>
};

export default function App() {
    return <Square />;
}
