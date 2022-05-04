import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


import '../../App.css'

export default function SignInPage() {
    
    const navigate = useNavigate();
    const [firstName ,setFirstName] = useState("");
    const [password,setPassword] = useState("");
    const [isValid,setValid] = useState(true);
    let content = "";
    if(!isValid)
    {
        content = <p style={{color:'red'}}>Invalid Credentials</p>
    }
    function firstNameHandler(event)
    {
        setFirstName(event.target.value);
        //console.log(firstName);
    }

    function passwordHandler(event)
    {
        setPassword(event.target.value);
        //console.log(password);
    }
    function loginSubmitHandler ( event )
    {
        event.preventDefault();
        const data = {
            name : firstName,
            password : password
        }
        //console.log(data);
       axios.post("http://localhost:8080/api/login",data).then((response)=>{
           //console.log(typeof(response.data));
           if(response.data)
           {
               sessionStorage.setItem("useremail",firstName);
                navigate("/home");
           }else
           {
               setValid(false);
           }
        //    let val = 
        //    if(val === "true")
        //    {
        //        navigate("/home")
        //    }else
        //    {
        //        console.log("arrived");
        //        setValid(false);
        //    }
       });
    }

 

    
    return (
        <div className="text-center m-5-auto">
            <h2>My Mail</h2>
            <form >
                <p>
                    <label>email address</label><br/>
                    <input type="email" name="first_name" required autoComplete='off' onChange={firstNameHandler}/>
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required onChange={passwordHandler}/>
                </p>
                    {content}
                <p>
                    <button id="sub_btn" type="button" onClick={loginSubmitHandler}>Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
            </footer>
        </div>
    )
}
