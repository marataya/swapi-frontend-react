import './App.css'
import LoginScreen from "./screens/LoginScreen.tsx";
import {AuthProvider} from "./services/auth/AuthContext.tsx";
import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import MainScreen from "./screens/MainScreen.tsx";
import ScreenCharacters from "./screens/ScreenCharacters.tsx";
import ScreenPlanets from "./screens/ScreenPlanets.tsx";
import ScreenStarships from "./screens/ScreenStarships.tsx";
import {Page404} from "./screens/Page404.tsx";


function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<LoginScreen/>} />
                    <Route path="/app" element={<MainScreen/>}>
                        <Route path="characters" element={<ScreenCharacters/>}/>
                        <Route path="planets" element={<ScreenPlanets/>}/>
                        <Route path="starships" element={<ScreenStarships/>}/>
                    </Route>
                    <Route path="*" element={<Page404/>}/>
                </Routes>
            </Router>
        </AuthProvider>
    )
}

export default App
