import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';

//Actions
import { signin } from '../actions/userActions';

export default function SigninScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search 
                    ? props.location.search.split('=')[1]
                    : '/';
    
    const userSignin = useSelector((state) => state.userSignin);
    const { loading,  userInfo, error } = userSignin;


    const dispatch = useDispatch();
    const submitHandler = (e) =>{
        e.preventDefault();
        dispatch(signin(email, password));
    }

    useEffect(() =>{
        if(userInfo){
            props.history.push(redirect);
        }
}, [props.history, redirect, userInfo]);

    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div>
                    <label htmlFor="email">Email adress</label>
                    <input 
                        type="email" id="email" 
                        placeholder="Enter email" 
                        onChange={ e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" id="password" 
                        placeholder="Enter password" 
                        onChange={ e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <button className ="primary" type="submit"> 
                        Sign In
                    </button>
                </div>
                <div>
                    <label />
                    <div>
                        New customer ? <Link to="/register">Create your account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
