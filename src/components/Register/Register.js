import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserToSignedIn } from "../state/userSlice";
import { Button, TextField } from "@mui/material";
import { setData } from "../state/userDataSlice";
import { changeRoute } from "../state/routeInSlice";


const Register = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const [name, setName] = useState("")

    const register = async () => {
        const data = await fetch("https://api.bookit.haider-ali.xyz/register",{
            method: "POST",
            body: JSON.stringify({email, password, name})
            
        })
        const user = await data.json();
        if (user.id) {
            dispatch(setData(user))
            dispatch(changeRoute("home"))
            dispatch(changeUserToSignedIn())
        }
       
    }
    return (
        <div>
            <div className="main">
                <div className="main-child">
                    <h1 style={{textAlign: "center"}}>Register</h1>
                    <div>
                        <TextField type={"email"} onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
                    </div>
                    <div>
                        <TextField onChange={(e) => setPassword(e.target.value)} type={"password"} label="Password" variant="outlined" />
                    </div>
                    <div>
                        <TextField onChange={(e) => setName(e.target.value)} type={"text"} label="Name" variant="outlined" />
                    </div>
                    <div>
                        <Button onClick={register} variant="contained">Register</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;