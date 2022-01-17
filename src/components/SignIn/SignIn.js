import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeUserToSignedIn } from "../state/userSlice";
import { Button, TextField } from "@mui/material";
import './SignIn.css'
import Checkbox from '@mui/material/Checkbox';
import { fetchUserSignIn } from "../state/signInSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import { setData } from "../state/userDataSlice";
import { changeRoute } from "../state/routeInSlice";


const SignIn = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch();
    const [showPasswordCheckBox, setShowPasswordCheckBox] = useState("password");
    const s = useSelector((state) => state)
    

    const signIn = async () => {
        const data = await fetch("https://api.bookit.haider-ali.xyz/signin",{
            method: "POST",
            body: JSON.stringify({email, password})
            
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
                    <h1 style={{textAlign: "center"}}>Sign In</h1>
                    <div>
                        <TextField onChange={(e) => setEmail(e.target.value)} label="Email" variant="outlined" />
                    </div>
                    <div>
                        <TextField onChange={(e) => setPassword(e.target.value)} type={"password"} label="Password" variant="outlined" />
                    </div>
                    <div>
                        <Button onClick={signIn} variant="contained">Sign In</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;