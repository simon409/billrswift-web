import React, { useState } from 'react';
import { contactList } from '../Data/TestData';
import { calculateNewMessages } from '../Utils/ChatFunctions';
import { FaPlus } from 'react-icons/fa6';
import { TimeAgo } from '../Utils/TimeAgo';
import { getUserById } from '../Utils/UserFunctions';

const ContactSection = () => {
  const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className="w-[25%] h-full border-r-2">
      <div className="h-full w-full flex flex-col gap-large">
        <div className="px-secondaryPadding w-full flex flex-col gap-large">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gradient-to-r from-buttonRed to-buttonOrange placeholder-white text-white rounded-full px-5 py-3 shadow-lg"
            />
          </div>

          <div className="w-full flex justify-between">
            <span className="h3-custom">Active chats</span>
            <button className="bg-gradient-to-r from-buttonRed to-buttonOrange py-1 px-[6px] rounded-md text-white">
              <FaPlus />
            </button>
          </div>
        </div>

        <div className="w-full flex flex-col gap-5 relative">
          {contactList.map((contact, index) => {
            const user = getUserById(contact.userId);
            const newMessagesCount = calculateNewMessages(contact.messages, contact.lastChecked);
            console.log(newMessagesCount);
            return (
              <button
                key={index}
                onClick={() => setSelectedChat(contact.userId)}
                className={`flex relative ${selectedChat === contact.userId ? 'bg-backgroundSecondary' : ''}`}
              >
                {selectedChat === contact.userId && (
                  <div className="w-[10px] bg-buttonOrange h-full absolute"></div>
                )}

                <div className="flex px-secondaryPadding items-center gap-5 w-full py-2">
                  <div className="relative">
                    <div
                      className={`w-[10px] h-[10px] absolute top-1 left-10 rounded-full ${
                        user.isOnline ? 'bg-lightGreen' : 'bg-transparent'
                      }`}
                    ></div>
                    <img src={user.avatar} className="w-[60px] h-[50px] rounded-full object-cover" alt="" />
                  </div>

                  <div className="w-full">
                    <div className="flex w-full justify-between">
                      <div className="flex gap-2 items-center">
                        <p className="font-medium h3-custom">{user.name}</p>
                        {newMessagesCount > 0 && (
                          <span className="text-xs font-semibold bg-buttonRed text-white bg-red-500 px-2 py-[2px] rounded-full">
                            {newMessagesCount}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 p-custom">
                        <TimeAgo date={contact.lastMessageDateTime} />
                      </p>
                    </div>
                    <p className="text-gray-400 p-custom text-start">{contact.lastMessage}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
