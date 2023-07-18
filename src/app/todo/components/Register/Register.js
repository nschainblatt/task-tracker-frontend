import { useState } from 'react';

export const Register = ({routing}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [valid, setValid] = useState(false);
    const [loading, setLoading] = useState(null);

    const submitName = (e) => {
        setName(e.target.value);
    }

    const submitEmail = (e) => {
        setEmail(e.target.value);
    }

    const submitPassword = (e) => {
        setPassword(e.target.value);
    }

    const onSubmitRegister = async (e) => {
        e.preventDefault()
        if (valid) {
            try {
                setLoading(true);
                const response = await fetch('https://to-do-server.adaptable.app/register', {
                    method: 'put',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        password: password
                    })
                });
                const data = await response.json();

                if (data.status) {
                    routing('signin');
                }
            } catch (e) {
                console.log(e);
                alert('Error registering. Email already in use.')
                setLoading(null);
            }
        }
    }

    const validate_password = (e) => {
        // lower
        const letter = document.querySelector('#letter');
        const lowerCaseLetters = /[a-z]/g;
        if (e.target.value.match(lowerCaseLetters)) {
            letter.classList.remove("invalid");
            letter.classList.add("valid");
        } else {
            letter.classList.remove('valid');
            letter.classList.add('invalid');
        }
        // upper
        const upper = document.querySelector('#capital');
        const upperCaseLetters = /[A-Z]/g;
        if (e.target.value.match(upperCaseLetters)) {
            upper.classList.remove("invalid");
            upper.classList.add("valid");
        } else {
            upper.classList.remove('valid');
            upper.classList.add('invalid');
        }
        // numbers
        const number = document.querySelector('#number');
        const numbers = /[0-9]/g;
        if (e.target.value.match(numbers)) {
            number.classList.remove("invalid");
            number.classList.add("valid");
        } else {
            number.classList.remove('valid');
            number.classList.add('invalid');
        }
        // length
        const length = document.querySelector('#length');
        const minLength = 8;
        if (e.target.value.length >= minLength) {
            length.classList.remove("invalid");
            length.classList.add("valid");
        } else {
            length.classList.remove('valid');
            length.classList.add('invalid');
        }
        if (letter.classList.contains('valid') && 
            upper.classList.contains('valid') && 
            number.classList.contains('valid') && 
            length.classList.contains('valid')) {
                setValid(true);
            }
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
                        <input onKeyUp={validate_password} onChange={submitPassword} 
                               type="password" placeholder="Create password" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                               title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required />
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
            <div id='message'>
                <h3>Password must contain the following:</h3>
                <p id='letter' className='invalid'>An <b>lowercase</b> letter</p>
                <p id='capital' className='invalid'>An <b>uppercase</b> letter</p>
                <p id='number' className='invalid'>An <b>number</b></p>
                <p id='length' className='invalid'>A Minimum of <b>8 characters</b></p>
            </div>
            {loading ? <p style={{textAlign:'center'}}>Loading</p> : <p></p>}
        </div>
    );
}
