import axios from 'axios';
import React,{useState} from 'react';
// import { Label } from 'reactstrap';
// import { Link } from 'react-router-dom'
import NavBar from "./Navbar";
import { useNavigate } from 'react-router-dom';

export default function SendGroupMail(props){
    const navigate = useNavigate();
    //const navigate = useNavigate();
    //const[email,setEmail] = useState("");
    const[subject,setSubject] = useState("");
   
    const[body,setBody] = useState("");
    //const[valid,setValid] = useState(true);
    // function emailHandler(event)
    // {
    //     setEmail(event.target.value);
    // }

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

        const fromemail = props.groupid;
        const allmailids = props.allmails;

        for(let i=0;i<allmailids.length;i++)
        {
            let to = allmailids[i];
            to = to.substring(1,to.length-1);
            console.log(to);
            const data = {
                fromemail:fromemail,
                toemail : to,
                subject : subject,
                body : body
            };
       
             //console.log(data);
            
            axios.post("http://localhost:8080/api/compose",data);
        }

       window.location.reload(true);
    }

 


    return(
        <div>
          
            <div className='messagebody'>
            <form >
                {/* <p>
                    <label>To</label>
                    <br/>
                    <input type="email" name="emailaddress" required  className='email' onChange={emailHandler}/>
                </p> */}
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
               
            </form>
        </div>
        </div>
        
    );
}