import React from "react";

function Home() {
    return (
        <>
        <h1>Home Page</h1>
            <button onClick={() => console.log('Button 1 clicked')}>Button 1</button>
            <button onClick={() => console.log('Button 2 clicked')}>Button 2</button>
            <button onClick={() => console.log('Button 3 clicked')}>Button 3</button>
            <button onClick={() => console.log('Button 4 clicked')}>Button 4</button>
        </>
    );
}

export default Home;