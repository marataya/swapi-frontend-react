import Header from "../components/Header.tsx"
import {Link, Outlet} from "react-router-dom"
import {useAuth} from "../services/auth/AuthContext.tsx"

function MainScreen() {
    const {isAuthenticated} = useAuth()
    return (
        <>
            {
                isAuthenticated ?
                    <div>
                        <Header/>
                        <Outlet/>
                    </div>
                    :
                    <div>Please <Link className="text-red-700" to="/">Login</Link> to continue</div>
            }
        </>
    )
}

export default MainScreen