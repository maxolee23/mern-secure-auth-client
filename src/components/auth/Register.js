import React, {useState, useContext} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import AuthContext from '../../context/AuthContext';

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory();

    async function register (e) {
        e.preventDefault(e);

        try {
            const registerData = {email, password, confirmPassword}
            // console.log(registerData);
            await axios.post("http://localhost:5000/auth/register/", registerData);
            // console.log("great success")
            await getLoggedIn();
            history.push("/");
        } catch (error){
            console.log(error)
        }
    }
    return (
        <div>
            <h1>Register a new account</h1>
            <form onSubmit={register}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
                <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register
