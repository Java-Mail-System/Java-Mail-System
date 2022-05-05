
import axios from 'axios';
import React,{useState} from 'react'
import SendGroupMail from "./SendGroupMail";


export default function SingleGroups(props) {
    //const navigate = useNavigate();
   // console.log(props.groupbody);
    let groupname = props.groupbody.groupname;
    groupname = groupname.substring(1,groupname.length -1);
    let groupid = props.groupbody.groupid;
    groupid = groupid.substring(1,groupid.length - 1);
    let groupmails = props.groupbody.mailids;
   
   
    //console.log(typeof(body))

    // body = body.split('\n');
    //console.log(body);
    
    console.log(groupmails);

    const[clicked,setClicked] = useState(false);
    const[send,setSend] = useState(false);
    const[mailid,setMail] = useState("");

    // console.log(groupname);
    // console.log(groupid);
    // console.log(groupmails);
    // console.log(body);
   function clickHandler()
   {
       setClicked(true);
   }

   function backButtonHandler()
   {
       setClicked(false);
   }

   function addGroupHandler()
   {
        //console.log(mailid);
        const data = {
            groupid : groupid,
            useremail : mailid
        };
        axios.post("http://localhost:8080/api/groups/add",data);
        setMail("");
        window.location.reload(true);
   }

   function inputHandler(event)
   {
        setMail(event.target.value);
   }
   

   function groupMailSender()
   {
        setSend(true);
   }
   let allmails = [];
   for(let i=0;i<groupmails.length;i++)
   {
       allmails.push(
           <div key={i}>{groupmails[i].substring(1,groupmails[i].length -1)}</div>
       )
   }

   let sendbody = "";
    if(send)
    {
        sendbody = <SendGroupMail groupbody = {props.groupbody} groupid = {groupid} allmails = {groupmails} />
    }
   let content = "";

   if(!clicked)
   {
      
      
        content = <div className='singleGroup' onClick={clickHandler}>
            <div>
                <p>
                    <b>Group :{groupname}  </b>
                </p>
            </div>
        </div>
   }else
   {
        
       
        content = <div className='fullGroup'>
            <div className='groupname'>
                <b>{groupname} </b>
            </div>
            <div className='groupid'>
                <b>{groupid}</b>
            </div>
            <div onClick={groupMailSender}>
                    <div className='backbutton'>
                        Compose a Group Mail
                    </div>
                    {
                        sendbody
                    }
            </div>
            <div className='groupmails'>
                Subscribers 
               {allmails}
            </div>
            <div>
            <input type="email" onChange={inputHandler} placeholder="email id" value={mailid}></input>
            <div className='addbutton' onClick={addGroupHandler}>
                    Add
            </div>
            </div>
            
            <div className='backbutton' onClick={backButtonHandler}>
                    Back
            </div>
        </div>
   }
    return (
        
        <div >
            {content}
            
        </div>
    );
}
