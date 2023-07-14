import { useState } from 'react';

export const Register = ({routing}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitName = (e) => {
        setName(e.target.value);
    }

    const submitEmail = (e) => {
        setEmail(e.target.value);
    }

    const submitPassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmitRegister = (e) => {
        e.preventDefault()
        fetch('https://to-do-server.adaptable.app/register', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        }).then(res => res.json()).then(data => {
            if (data.status) {
                routing('signin')
            }
        })
    }

    return (
        <div className='signin'>
            <div className='signinContainer'>
                <div className='wrapper'>
                    <h2>Registration</h2>
                    <form action="#">
                    <div className="input-box">
                        <input onChange={submitName} type="text" placeholder="Enter your name" required />
                    </div>
                    <div className="input-box">
                        <input onChange={submitEmail} type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="input-box">
                        <input onChange={submitPassword} type="password" placeholder="Create password" required />
                    </div>
                    <div className="input-box button">
                        <input onClick={onSubmitRegister} type="Submit" value="Register Now" readOnly/>
                    </div>
                    <div className="text">
                        <h3>Already have an account? <a onClick={()=>routing('signin')}>Login now</a></h3>
                    </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
