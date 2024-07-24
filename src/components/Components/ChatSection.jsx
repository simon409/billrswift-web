import { GrAttachment } from "react-icons/gr";
import { VscSend } from "react-icons/vsc";
import { CiImageOn } from "react-icons/ci";
import { TbSettings2 } from "react-icons/tb";
import { useEffect, useState } from "react";
import ChatBubble from "./Components/ChatBubble";

const ChatSection = ({ discussion }) => {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    // Ensure discussion is an array before setting it to state
    if (Array.isArray(discussion)) {
      setChatMessages(discussion.sort((a, b) => new Date(b.messages[0].timestamp) - new Date(a.messages[0].timestamp)));
    } else {
      console.error("Discussion is not an array:", discussion);
    }
  }, [discussion]);

  // Placeholder for handling message input and sending messages
  const handleSendMessage = () => {
    // Logic for sending messages
  };

  return (
    <div className="w-[50%] h-full pl-secondaryPadding">
      <div className="bg-red-300 h-full w-full">
        {/* Chat header */}
        <div className="bg-grey w-full h-[10%] rounded-tl-4xl px rounded-tr-4xl px-4 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <img
              src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-[50px] h-[50px] rounded-full object-cover"
              alt="User avatar"
            />
            <div>
              <p className="font-medium h3-custom leading-5">Said Mansouri</p>
              <p className="text-lightGreen font-medium">Online</p>
            </div>
          </div>
          <button className="text-medium">
            <TbSettings2 />
          </button>
        </div>
        {/* Chat messages and input */}
        <div
          className="w-full bg-backgroundSecondary h-[90%] rounded-bl-4xl rounded-br-4xl py-5 relative flex flex-col gap-2"
          style={{ backgroundImage: 'url(/assets/chatMask.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          {/* Chat messages */}
          <div className="w-full h-[90%] z-0">
            {/* Messages will go here */}
            <div className="flex flex-col-reverse gap-4 mx-4 px-4 min-h-[550px] max-h-[550px] overflow-y-scroll mb-5" id="Container">
              {/* Display messages */}
              {chatMessages.map((messages, index) => (
                <ChatBubble key={index} messages={messages} />
              ))}
            </div>
          </div>
          {/* Chat input */}
          <div className="w-full h-[10%] px-5 z-10">
            <div className="w-full h-full flex justify-between items-center bg-white rounded-full px-5 py-2 shadow-lg">
              <input type="text" placeholder="Type a message..." className="w-full px-5 py-3 outline-none" />
              <div className="flex gap-medium text-medium">
                <button>
                  <CiImageOn />
                </button>
                <button>
                  <GrAttachment />
                </button>
                <button
                  className="bg-gradient-to-r from-buttonRed to-buttonOrange p-3 rounded-full text-white"
                  onClick={handleSendMessage}
                >
                  <VscSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
