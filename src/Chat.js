import { Avatar, IconButton } from '@material-ui/core'
import { MoreVert, SearchOutlined , Mic, AttachFile  } from '@material-ui/icons';
import React  ,{useState , useEffect} from 'react'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import "./Chat.css"
function Chat() {
    const [seed , setSeed] = useState('');
    const [input , setInput] = useState('');
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    } , [])
    
    const sendMessage = (e)=>{

        e.preventDefault();

        console.log("You have typed -> ",input);

        setInput('');
    }

    return (
        <div className = "chat">
            <div className = "chat_header">
                <Avatar src = {`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className = "chat_headerInfo">
                    <h3> Room name</h3>
                    <p>Last seen at  ..</p>

                </div>
                <div className ='chat_headerRight' >
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    
                    <IconButton>
                        <MoreVert/>

                    </IconButton>

                </div>

            </div>
            <div className = "chat_body" >
                
                <p className = {`chat_message ${true&&"chat_reciever"}`}>
                <span className = "chat_name">
                    Kshitij Anand
                </span>
                This is a message
                <span className = "chat_timestamp">4:30pm</span>
                </p>
            </div>

            <div className = "chat_footer">
                <InsertEmoticonIcon/>
                <AttachFile/>
                <form >
                    <input type = "text" value = {input}  onChange = {(e)=>{
                        setInput(e.target.value);
                    }} placeholder = "Start typing something">

                    </input>
                    <button onClick ={sendMessage}  type = "submit">Send a message</button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat
