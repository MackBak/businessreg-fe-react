import Home from "./components/Home/Home";
import './App.scss';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Register from "./components/Register/Register";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/register" element={<Register/>} />
            </Routes>
        </Router>
    );
}

export default App;