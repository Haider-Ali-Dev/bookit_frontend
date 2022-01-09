import { useDispatch, useSelector } from "react-redux"
import {  changeRoute } from '../state/routeInSlice'
import { changeUserToNotSignedIn } from "../state/userSlice"
import './Navbar.css'
const Navbar = () => {
    const route = useSelector((state) => state.route.route)
    const dispatch = useDispatch()

    const isSignedIn = useSelector((state) => state.userGlobal.isUserSignedIn)
    const signOut = () => {
        dispatch(changeRoute("signin"))
        dispatch(changeUserToNotSignedIn())
    }
    return (
        <nav>
            {isSignedIn ?
            <ul>
                <li onClick={() => signOut}>Sign Out</li>
            </ul> :
            <ul>
                {
                    route === "register" ? <li onClick={() => dispatch(changeRoute("signin"))}>
                        Sign In
                    </li> :
                    <li onClick={() => dispatch(changeRoute("register"))}>Register</li>
                }
            </ul>
            }
        </nav>
    )
}

export default Navbar;