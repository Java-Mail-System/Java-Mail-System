import axios from 'axios';
import React,{useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import { Label } from 'reactstrap';
// import { Link } from 'react-router-dom'
import NavBar from "./Navbar";


export default function Compose(){
    const navigate = useNavigate();
    const[email,setEmail] = useState("");
    const[subject,setSubject] = useState("");
   
    const[body,setBody] = useState();
    const[valid,setValid] = useState(true);
    function emailHandler(event)
    {
        setEmail(event.target.value);
    }

    function subjectHandler(event)
    {
        setSubject(event.target.value);
    }

   

    function bodyHandler(event)
    {
        
        setBody(event.target.value);
    }


    function submitHandler(event)
    {

        const fromemail = sessionStorage.getItem("useremail");
        const data = {
            fromemail:fromemail,
            toemail : email,
            subject : subject,
            body : body
        };
   
        
        axios.post("http://localhost:8080/api/compose",data).then((res)=>{
            if(res)
            {
                navigate("/home");
            }else
            {
                setValid(false);
            }
        });

    }
    let content = "";
    if(!valid)
    {
        content = <p style={{color:'red'}}>Something went Wrong <span>😕</span>...Please Try again! </p>
    }


    return(
        <div>
            <NavBar/>
          
            <div className='messagebody'>
            <form >
                <p>
                    <label>To</label>
                    <br/>
                    <input type="email" name="emailaddress" required  className='email' onChange={emailHandler}/>
                </p>
                <p>
                    <label>Subject</label>
                    <br/>
                    <input type="text" name="subject"  className='subject' onChange={subjectHandler}/>
                </p>
                <p>
                    <textarea type="text" name="body" className='body' onChange={bodyHandler}/>
                </p>
               
                <p>
                    <button id="sub_btn" type="button" onClick={submitHandler}>Send</button>
                </p>
                {content}
            </form>
        </div>
        </div>
        
    );
}