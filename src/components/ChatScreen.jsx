import { useAuth } from "../context/AuthContext"
import IMG from "/assets/user-male-circle.jpg";

const ChatScreen = () => {
    const {selectedUser} = useAuth();
  return (
    <div className='chatscreen'>
        {selectedUser?
        <>
        <div className="top">
            <div className="img">
                <img src={selectedUser?.photoURL} alt="img" />
            </div>
            <span>{selectedUser?.fullName || "Unknown User"}</span>
        </div>
        </>
        :
         <div className="text">
            <h1>Click any chat; Start messaging!❤️</h1>
        </div>}
    </div>
  )
}

export default ChatScreen