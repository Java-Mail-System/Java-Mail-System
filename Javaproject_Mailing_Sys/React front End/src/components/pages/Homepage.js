import axios from 'axios';
import React,{useState} from 'react'
import { useEffect } from 'react';
import Navbar from "./Navbar";
import SingleMail from "./SingleMail";

export default function HomePage() {
    
   
    
    let user = sessionStorage.getItem("useremail");
    
   
    const [inbox,addInbox] =  useState([]);
    // const data = {useremail:user};
   
    const getResponse = async ()=>{
        const resdata = await axios.get("http://localhost:8080/api/inbox",{params :{useremail:user}});
        //console.log(resdata);
        addInbox(resdata.data)
    }
     
    useEffect(()=>{
        getResponse();
    },[])
 
   
    //console.log(inbox);
    
    let allmails= [];
    //console.log(inbox.length);
    
    for(let i=0; i<inbox.length;i++)
    {
            allmails.push(<SingleMail mailbody={inbox[i]} key = {i} />);
    }
 
    return (
        <div>
            <Navbar />
            <div className='mailbox'>
               {
                  allmails
               }
            </div>

            
            
        </div>
        
    );
}
