import './App.css'
import LoginScreen from "./screens/LoginScreen.tsx";
import {AuthProvider} from "./services/auth/AuthContext.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MainScreen from "./screens/MainScreen.tsx";


function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginScreen/>}/>
                    <Route path="/app" element={<MainScreen/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App
