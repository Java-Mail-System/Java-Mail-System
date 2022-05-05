import axios from 'axios';
import React,{useState} from 'react'
import { useEffect } from 'react';
import Navbar from "./Navbar";
import SingleGroups from "./SingleGroups";

export default function Groups()
{

    const [groupName,setGroupName] = useState("");
    const [groupId,setGroupID] = useState("");
    const [groups,addGroup] = useState([]);
    function groupNameHandler(event)
    {
        setGroupName(event.target.value);
    }
    function groupIDHandler(event)
    {
        setGroupID(event.target.value);
    }

    function clickHandler()
    {
            const useremail = sessionStorage.getItem("useremail");
            const data = {groupname : groupName,
            groupid: groupId,
            useremail: useremail
        };
            axios.post("http://localhost:8080/api/groups",data);
            setGroupName("");
            setGroupID("");
            window.location.reload(true);
    }
    let user = sessionStorage.getItem("useremail");
    const getResponse = async ()=>{
        const resdata = await axios.get("http://localhost:8080/api/getgroups",{params :{useremail:user}});
        //console.log(resdata);
        addGroup(resdata.data)
    }

   
     
    useEffect(()=>{
        getResponse();
    },[])
    let allgroups = [];
    for(let i=0;i<groups.length;i++)
    {
        allgroups.push(<SingleGroups groupbody ={groups[i]} key={i}></SingleGroups>);
    }
    //console.log(groups);
    return (
        <div>
            <Navbar />
            <div className='groupsheader'>
                <label htmlFor="groupname">Group Name </label>
                <input type="text" required name="groupname" onChange={groupNameHandler} value={groupName} ></input>
                <br></br>
                <label htmlFor="groupid">Group Email </label>
                <input type="email" required name="groupid" onChange={groupIDHandler} value={groupId}></input>
                <br></br>
                <button type='button' onClick={clickHandler}>Create Group</button>
                <div className='groupsbody'>
                {allgroups}
                </div>
            </div>
           
        </div>
    );
}