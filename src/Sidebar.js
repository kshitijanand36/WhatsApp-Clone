import { Avatar, Icon, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, MoreVert, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import "./Sidebar.css";
import SidebarChat from './SidebarChat';

function Sidebar() {
    return (
        <div className = "sidebar">
            <div className = "sidebar_header" >

                <Avatar/>
                <div className = "sidebar_headerRight" >
                    <IconButton>
                        <DonutLarge/>
                        
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <MoreVert/>

                    </IconButton>

                </div>
            </div>
            <div className = "sidebar_search">

                <div className = "sidebar_searchContainer">

                    <SearchOutlined></SearchOutlined>
                    <input placeholder = "Search or start a new chat" type = "text"></input>
                    
                </div>

            </div>
            <div className = "sidebar_chats">
                <SidebarChat addNewChat = {true}/>
                <SidebarChat addNewChat = {false}/>
            {/* <h1>Side bar hai bhai</h1> */}
            </div>
        </div>
    )
}

export default Sidebar
