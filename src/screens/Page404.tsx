import {useLocation} from "react-router-dom"

export function Page404() {
    let location = useLocation()
    console.log(location)
    return (
        <div>
            <h1>
                Resource not found at {location.pathname}
            </h1>
        </div>
    )
}