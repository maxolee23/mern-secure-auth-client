import React, {useState, useContext} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import { MailIcon, LockClosedIcon } from '@heroicons/react/solid'

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
        // <div>
        //     <h1>Register a new account</h1>
        //     <form onSubmit={register}>
        //         <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email}/>
        //         <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password}/>
        //         <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
        //         <button type="submit">Register</button>
        //     </form>
        // </div>
        <div>
            <h1 className="text-center text-lg leading-6 font-medium text-gray-900 py-7">Register a new account</h1>
            <form onSubmit={register}>
                <label htmlFor="email" className="block text-base font-medium text-gray-700 pl-5">
                Email
                </label>
                <div className="mt-1 relative rounded-md shadow-sm w-2/5">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MailIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                        <input
                            type="text"
                            name="email"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                            placeholder="you@example.com"
                            onChange={(e) => setEmail(e.target.value)} value={email}
                        />
                </div>

                <label htmlFor="password" className="block text-base font-medium text-gray-700 pl-5 pt-5">
                Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm w-2/5">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                            type="password"
                            name="password"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                            placeholder="password"
                            onChange={(e) => setPassword(e.target.value)} value={password}
                        />

                </div>

                <label htmlFor="password" className="block text-base font-medium text-gray-700 pl-5 pt-5">
                Confirm Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm w-2/5">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <LockClosedIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                            type="password"
                            name="password"
                            className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                            placeholder="password"
                            onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}
                        />

                </div>
                <button
                    type="submit"
                    className="inline-flex items-center mt-5 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register
