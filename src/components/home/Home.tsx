
function Home() {
    return (
        <>
        <h1>Home Page</h1>
            <button onClick={() => console.log('## Register clicked ##')}>Register</button>
            <button onClick={() => console.log('## Login clicked ##')}>Login</button>
            <button onClick={() => console.log('## Register Business clicked ##')}>Register Business</button>
            <button onClick={() => console.log('## Business Types clicked ##')}>Business Types</button>
        </>
    );
}

export default Home;