import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const REGISTER_URL = 'http://127.0.0.1:8000/register';


function Register() {

    const [username, setUsername] = useState('');
    const [pwd, setPwd] = useState('');
    const [success, setSuccess] = useState(false);

    const navigate = useNavigate()




    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post(REGISTER_URL,
                {
                    username: username,
                    password: pwd
                },
                {
                    headers: { 'Content-Type': 'application/json' },
                }
            );

            console.log(response.data)

            console.log('listo!')

            setSuccess(true);

        } catch {
            console.log('no funciona')
        }
    }

    return (
            <div>
                {success ? (
                    <section className='success'>
                        <h2>You've registered succesfully!</h2>
                        <a href='/login' className='btn-login'>Ve al inicio de sesión</a>
                    </section>
                ) : (
                    <section>
                        <h1>User Registration</h1>
                        <div className='box-registration'>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor='username'>Email</label>
                                <input
                                    type='text'
                                    id='username'
                                    autoComplete='off'
                                    onChange={(e) => setUsername(e.target.value)}
                                    value={username}
                                    required
                                />

                                <label htmlFor='password'>Password</label>
                                <input
                                    type='password'
                                    id='password'
                                    onChange={(e) => setPwd(e.target.value)}
                                    value={pwd}
                                    required
                                />
                                <button className='btn'>Register</button>
                            </form>

                            <a href="/" className='btn-login'>Log in</a>
                        </div>
                    </section>
                )}
            </div>
    )
}

export default Register