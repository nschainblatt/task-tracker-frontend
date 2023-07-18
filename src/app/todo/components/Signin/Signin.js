import { useState } from 'react'
import './Signin.css'

export const Signin = ({ routing, setEmail, setPassword, email, password, setData, setDoneData }) => {

    const [loading, setLoading] = useState(null);

    const onSubmitSignIn = async (e) => {
        e.preventDefault()
        try {
            setLoading(true);
            const response = await fetch('https://to-do-server.adaptable.app/signin', {
                method: 'post',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });
            const data = await response.json();
            if (data) {
                if (data.status) {
                    setData("List #1", data.status.listData.listData1);
                    setData("List #2", data.status.listData.listData2);
                    setData("List #3", data.status.listData.listData3);
                    setDoneData("List #1", data.status.doneData.doneData1);
                    setDoneData("List #2", data.status.doneData.doneData2);
                    setDoneData("List #3", data.status.doneData.doneData3);
                    routing('list1');
                } else {
                    alert('Incorrect username or password.');
                    setLoading(null);
                }
            }
        } catch (e) {
            console.log(e);
            alert('Incorrect username or password.');
            setLoading(null);
         }
    }

    return (
        <div className='signin'>
            <div className='signinContainer'>
                <div className='wrapper'>
                    <h2>Sign In</h2>
                    <form action="#">
                        <div className="input-box">
                            <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter your email" required />
                        </div>
                        <div className="input-box">
                            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" required />
                        </div>
                        <div className="input-box button">
                            <input onClick={onSubmitSignIn} type="submit" value="Sign In"/>
                        </div>
                        <div className="text">
                            <h3>Don't have an account? <a onClick={()=>routing('register')}>Register here</a></h3>
                        </div>
                    </form>
                </div>
                {loading ? <p style={{textAlign:'center'}}>Loading</p> : <p></p>}
            </div>
        </div>
    );
}
