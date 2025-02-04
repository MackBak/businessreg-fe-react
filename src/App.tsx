// App.tsx

import Home from "./components/home/Home";
import './App.scss';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from "./components/register/Register";
import Login from "./components/login/Login";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </Router>
    );
}

export default App;