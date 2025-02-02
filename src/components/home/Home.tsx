import {useNavigate} from "react-router-dom";


function Home() {

    const navigate = useNavigate();

    // Constants to handle button redirects:
    const handleRegisterCLick = () => {
        navigate('/register');
    }
    const handleLoginCLick = () => {
        navigate('/login');
    }
    const handleBusinessRegister = () => {
        navigate('/registerBusiness');
    }
    const handleBusinessTypes = () => {
        navigate('/businessTypes');
    }


    return (
        <>
        <h1>Home Page</h1>
            <button onClick={handleRegisterCLick}>Register</button>
            <button onClick={() => console.log('## Login clicked ##')}>Login</button>
            <button onClick={() => console.log('## Register Business clicked ##')}>Register Business</button>
            <button onClick={() => console.log('## Business Types clicked ##')}>Business Types</button>
        </>
    );
}

export default Home;