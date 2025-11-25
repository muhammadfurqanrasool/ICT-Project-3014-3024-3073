import ChatList from "../components/ChatList";
import ChatScreen from "../components/ChatScreen";
import "../css/chat.css";
const Chats = () => {
  return (
    <div className='chats'>
      <ChatList />
      <ChatScreen/>
    </div>
  )
}

export default Chats