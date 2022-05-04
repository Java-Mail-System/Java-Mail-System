import axios from 'axios';
import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../../App.css'

export default function SignUpPage() {
    const navigate = useNavigate();

    const[username,setUserName] = useState("");
    const[useremail,setUserEmail] = useState("");
    const[password,setPassword] = useState("");
    const[isValid,setValid] = useState(true);
    let content = "";
    if(!isValid)
    {
        content = <p style={{color :'red'}}>User already Exists!!</p>
    }
    function userNameHandler(event)
    {
        setUserName(event.target.value);
    }

    function userEmailHandler(event)
    {
        setUserEmail(event.target.value);
    }

    function passwordHandler(event)
    {
        setPassword(event.target.value);
    }

    function submitHandler(event)
    {
        event.preventDefault();
        const data = {
            username : username,
            useremail : useremail,
            password : password
        };
        axios.post("http://localhost:8080/api/register",data).then((response)=>{
            if(response.data)
            {
                sessionStorage.setItem("useremail",useremail);
                navigate("/home");
            }else
            {
                setValid(false);
            }
        });
    
    }


    return (
        <div className="text-center m-5-auto">
            <h2>Join us</h2>
            <h5>Create your personal account</h5>
            <form onSubmit={submitHandler}>
                <p>
                    <label>Username</label><br/>
                    <input type="text" name="user_name" required onChange={userNameHandler} />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required onChange={userEmailHandler} />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required onChange={passwordHandler}/>
                </p>
                <p>
                    <input type="checkbox" name="checkbox" id="checkbox" required /> <span>I agree all statements in <a href="https://google.com" target="_blank" rel="noopener noreferrer">terms of service</a></span>.
                </p>
                {content}
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">Login</Link>.</p>
            </footer>
        </div>
    )

}
