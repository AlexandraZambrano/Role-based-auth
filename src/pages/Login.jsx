import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useToken } from '../context/TokenProvider';

const LOGIN_URL = 'http://127.0.0.1:8000/api/login_check';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);

    const { findToken } = useContext(useToken)

    useEffect(()=>{
        findToken()
    },[])


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ username: username, password: password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );

            const accessToken = response.data.token;

            console.log(accessToken)


           const storedToken = () => window.localStorage.setItem(
                'token', accessToken
            );

            storedToken()


            setUsername('');
            setPassword('');
            setSuccess(true);

            console.log('hecho!')


        } catch (err) {
            console.log('no funciona')
        }
    }

    return (
        <>
            {success ? (
                <section className='success'>
                    <h2>You've logged in succesfully!</h2>
                    <a href='/home' className='btn-login'>Ve al inicio</a>
                </section> 
            ) : (
                <section>
                    <h1>Log In!</h1>
                        <div className='box-fichaje'>
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
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                    required
                                />
                                <button className='btn'>Entrar</button>
                            </form>
                        </div>
                </section>
            )}
        </>
    )
}

export default Login;