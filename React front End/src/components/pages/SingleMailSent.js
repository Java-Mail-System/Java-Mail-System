import axios from 'axios';
import React,{useState} from 'react'

import { useNavigate } from 'react-router-dom';


export default function SingleMailSent(props) {
    const navigate = useNavigate();
   // console.log(props.mailbody);
    let fromemail = props.mailbody.fromemail;
    fromemail = fromemail.substring(1,fromemail.length -1);
    let toemail = props.mailbody.toemail;
    toemail = toemail.substring(1,toemail.length - 1);
    let subject = props.mailbody.subject;
    subject = subject.substring(1,subject.length - 1);
    let body = props.mailbody.body;
    //console.log(typeof(body))
    body = body.substring(1,body.length-1);
    // body = body.split('\n');
    //console.log(body);
    


    const[clicked,setClicked] = useState(false);
    

    // console.log(fromemail);
    // console.log(toemail);
    // console.log(subject);
    // console.log(body);
   function clickHandler()
   {
       setClicked(true);
   }

   function backButtonHandler()
   {
       setClicked(false);
   }
   

 

   function deleteHandler()
   {
       const data = {
           id : props.mailbody.id
       }
       axios.post("http://localhost:8080/api/inbox/delete",data);

      window.location.reload(true);
   }
   let content = "";

   if(!clicked)
   {
       //fromemail = fromemail.split("@")[0];
      

       if(subject.length >=150)
       {
            subject = subject.substring(0,150);
       }
        content = <div className='singleMail' onClick={clickHandler}>
            <div>
                <p>
                    <b>To : {toemail} - </b>
                    {subject}
                </p>
            </div>
        </div>
   }else
   {
        
       
        content = <div className='fullMail'>
            <div>
                <b>To : {toemail} </b>
            </div>
            <div className='inboxsubject'>
                {subject}
            </div>
            <div className='inboxbody'>
                {body}
            </div>
         
                
                <div className='backbutton' onClick={backButtonHandler}>
                        Back
                </div>
        
           
            <div onClick={deleteHandler}>
                <i className="fa-solid fa-trash-can"></i>
            </div>
        </div>
   }
    return (
        
        <div >
            {content}
            
        </div>
    );
}
