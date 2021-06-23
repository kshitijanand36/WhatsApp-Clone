import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "./SidebarChat.css"
import db from "./firebase";
import {Link} from "react-router-dom"
function SidebarChat({addNewChat , id , name}) {

    const [seed , setSeed] = useState('');

    function createChat(){
        const roomName =  prompt("Enter name for the chat");
        if(roomName){

            db.collection("Rooms").add({
                name : roomName
            })
        }

    }


    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    } , [])

    return !addNewChat ?  (
        <Link to = {`/rooms/${id}`} >
            <div className = "sidebarChat">
            <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}  />
                <div className = "sidebarChat_info">
                    <h2>{name}</h2>
                    <p>Last message....</p>

                </div>
            </div>
        </Link>
    ) : 
    (
        <div className = "sidebarChat" onClick = {createChat}>
            <h2>Add new Chat</h2>
        </div>
    )
}

export default SidebarChat
