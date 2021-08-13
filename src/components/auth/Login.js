import React, {useState, useContext} from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext';
import {useHistory} from 'react-router-dom';
import { MailIcon, LockClosedIcon } from '@heroicons/react/solid'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {getLoggedIn} = useContext(AuthContext);
    const history = useHistory()

    async function login (e) {
        e.preventDefault();
        try {
            const loginData = {email, password};
            await axios.post("http://localhost:5000/auth/login/", loginData);
            await getLoggedIn();
            history.push("/");
        } catch (error){
            console.error(error)
        }
    }
    return (
        <div>
            <h1 className="text-center text-lg leading-6 font-medium text-gray-900 py-7">Log in to your account</h1>
            <form onSubmit={login}>
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
                <button
                    type="submit"
                    className="inline-flex items-center mt-5 px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    Log in
                </button>
            </form>
        </div>
    )
}

export default Login
