import './Signin.css'

export const Signin = ({ routing, setEmail, setPassword, email, password, setData, setDoneData }) => {

    const onSubmitSignIn = (e) => {
        e.preventDefault()
        fetch('https://to-do-server.adaptable.app/signin', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json()).then(data => {
            
            if (data.status) {
                setData("List #1", data.status.listData.listData1);
                setData("List #2", data.status.listData.listData2);
                setData("List #3", data.status.listData.listData3);
                setDoneData("List #1", data.status.doneData.doneData1);
                setDoneData("List #2", data.status.doneData.doneData2);
                setDoneData("List #3", data.status.doneData.doneData3);
                routing('list1');
            }
        });
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
            </div>
        </div>
    );
}
