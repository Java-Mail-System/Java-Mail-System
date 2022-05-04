import axios from 'axios';
import React,{useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import Homepage from './Homepage';


export default function Navbar() {
    const [mail,setMail] = useState("");
    const navigate = useNavigate();
    // function inputHandler(event)
    // {
    //     setMail(event.target.value);
    // }
    // function searchHandler(event)
    // {
    //     console.log(mail);
    //     return <Homepage email={mail}></Homepage>;
    // }

    function homeButton()
    {
        navigate("/home");
    }
    return (
        
        <div className="navbar">
            <Link to='/home' onClick={homeButton}>
                Home
            </Link>
           
            <Link to='/compose'>
                Compose
            </Link>
            <Link to="/sent">
                Sent
            </Link>
            <Link to="/groups">
                Groups
            </Link>
            <Link to='/'>
                Logout
            </Link>
            
            {/* <div className='searchmail'>
                <input type="email" placeholder='Search Mails' onChange={inputHandler}></input>
                <button onClick={searchHandler} >Go</button>
            </div> */}
        </div>
    )
}
