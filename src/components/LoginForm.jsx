import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
         //username / password => chatengine -> give messages
         //works ? logged in
         // no? try with new username

         const authObject = {'Project-ID': "e78b3fc4-b46a-4518-8814-dc5384123473", 'User-Name': username, 'User-Secret': password };

         try {
             await axios.get('https://api.chatengine.io/chats', { headers: authObject });
             localStorage.setItem('username', username);
             localStorage.setItem('password', password);

             window.location.reload();
         }catch (error) {
            setError('Oops, wrong credentials, try again')
         }

    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title" style={{"fontFamily":"Mogra", "color":"purple"}}>Login here <i className="fas fa-grin-beam"></i></h1>
                <form onSubmit={ handleSubmit }>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
                    <div align="center">
                        <button type="submit" className="button title">
                            <p style={{"fontFamily":"Mogra", "color":"purple"}}>Chat away! ... <i className="fas fa-paper-plane"></i></p>
                        </button>
                    </div>
                    <div align="center" style={{marginTop: "2em", color: "red"}}>
                        <h2>{error}</h2>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm