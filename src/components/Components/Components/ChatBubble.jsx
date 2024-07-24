import { useEffect, useState } from "react";
import { TimeAgo } from "../../Utils/TimeAgo";

const ChatBubble = ({messages}) => {
  const [isSender, setisSender] = useState(true);
  const [Messages, setMessages] = useState([])
  console.log(messages);

  useEffect(() => {
    if (messages.senderId === 4) {
      setisSender(true);
    } else {
      setisSender(false);
    }

    setMessages(messages.messages)
    console.log(messages.messages);
  }, [messages])



  return (
    <>
      {
        isSender ? (
          <div className="flex flex-row-reverse gap-2 items-start">
            <img
              src="https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="w-[40px] h-[40px] rounded-full object-cover"
            ></img>
            <div className="flex flex-col gap-1">
              {
                Messages.map((message, index) => (
                  <p key={index} className={
                    `bg-gradient-to-r from-buttonRed to-buttonOrange text-white p-2 max-w-[300px]
                    ${Messages.length === 1 || index === 0 ? 'oneAndFirstMessageBubbleMe'
                    : index === Messages.length - 1 ? 'lastMessageBubbleMe' : 'middelMessageBubbleMe'
                    }`
                  }>
                    {message.text}
                  </p>
                ))
              }

              {/* Display the timestamp of the last message */}
              {
                Messages.length > 0 && (
                  <span className="text-gray-400 text-xs text-end">
                    <TimeAgo date={Messages[Messages.length - 1].timestamp} />
                  </span>
                )
              }
            </div>
          </div>
        ) : (
          <div className="flex gap-2 items-start">
            <img
              src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="w-[40px] h-[40px] rounded-full"
            ></img>
            <div className="flex flex-col gap-1">
              {
                Messages.map((message, index) => (
                  <p key={index} className={
                    `bg-gradient-to-r bg-white text-black p-2 max-w-[300px]
                      ${Messages.length === 1 || index === 0 ? 'oneAndFirstMessageBubbleOther'
                      : index === Messages.length - 1 ? 'lastMessageBubbleOther' : 'middelMessageBubbleOther'
                      }
                    `
                  }>{message.text}</p>
                ))
              }
              {/* Display the timestamp of the last message */}
              {
                Messages.length > 0 && (
                  <span className="text-gray-400 text-xs text-start">
                    <TimeAgo date={Messages[Messages.length - 1].timestamp} />
                  </span>
                )
              }
            </div>
          </div>
        )
      }
    </>
  );
};

export default ChatBubble;
