import React, {useContext} from 'react';
import {useHistory, Link} from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import axios from 'axios';

const LogOutBtn = () => {
    const {getLoggedIn} = useContext(AuthContext);

    const history = useHistory()

    async function logOut() {
        await axios.get("http://localhost:5000/auth/logout")
        await getLoggedIn();
        history.push("/");
    }
    return (
        // <button className="ml-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={logOut}>Log Out</button>
        <Link className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium" onClick={logOut}>Log Out</Link>
        
    )
}

export default LogOutBtn;
