import { FaArrowLeft } from "react-icons/fa6";
import { LuPen } from "react-icons/lu";
import { HiOutlinePhone } from "react-icons/hi";
import { FiVideo } from "react-icons/fi";
import { HiOutlineUserAdd } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import SmallButton from "./Components/SmallButton";
import UserCard from "./Components/UserCard";
import { useState } from "react";

import { GrDocumentText } from "react-icons/gr";
import { MdOutlineImage } from "react-icons/md";
import { CiFileOn } from "react-icons/ci";
import FilesCard from "./Components/FilesCard";

const ConvPeopleData = [
  {
    imageUrl: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Said Mansouri",
    status: "Online"
  },
  {
    imageUrl: "https://images.pexels.com/photos/762080/pexels-photo-762080.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Jane Smith",
    status: "Offline"
  },
  {
    imageUrl: "https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600",
    name: "Alex Johnson",
    status: "Online"
  }
];

//all sizes in MB

const FilesData = [
  {
    Icon: GrDocumentText,
    Name: "Document",
    FilesCount: 8,
    FilesSize: 2.45
  },
  {
    Icon: MdOutlineImage,
    Name: "Images",
    FilesCount: 13,
    FilesSize: 9.77
  },
  {
    Icon: CiFileOn,
    Name: "Attachements",
    FilesCount: 10,
    FilesSize: 0.45
  }
];


const ChatDetailsSection = () => {
  const [SelectIndex, setSelectIndex] = useState(null);
  const [MuteIndex, setMuteIndex] = useState(null);

  const HandelSelectChange = (index) => {
    setSelectIndex(index);
    console.log("Selected Card index: "+index);
  }

  const HandelMuteChange = (index) => {
    if(MuteIndex === index){
      setMuteIndex(null);
    }else{
      setMuteIndex(index);
    }
    console.log("Muted Card index: "+index);
  }

  return (
    <div className="w-[25%] h-full px-secondaryPadding flex flex-col">
        <div className="h-[10%] w-full flex items-center gap-5">
            {/*TODO: Add chat details section*/}
            <div>
              <button className="h3-custom p-2 bg-backgroundSecondary rounded-full w-fit text-gray-500"><FaArrowLeft /></button>
            </div>
            <h1 className="h3-custom">Chat Details</h1>
        </div>
        <div className="h-[90%] py-10 w-full flex flex-col gap-10 overflow-y-auto max-h-[700px] pr-4" id="Container">
            <div className="flex flex-col gap-5">
              <div className="flex gap-5 w-full">
                  <div className="flex items-center gap-5">
                      <img src="https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className="h-[80px] w-[80px] rounded-full object-cover" />
                  </div>
                  <div className="flex-1 flex-col justify-between">
                      <div className="flex justify-between">
                        <h1 className="h3-custom font-bold">Said Mansouri</h1>
                        <SmallButton Icon={LuPen} onclick={() => console.log("Edit profile")}/>
                      </div>
                      <p className="text-gray-500 h4-custom">3 Members</p>
                      <p className="p-custom">Last message: Today, 09:59</p>
                  </div>
              </div>
              <div className="flex gap-5">
                <div className="flex-1">
                  <button className="bg-buttonRed w-full py-3 rounded-lg text-white flex gap-3 justify-center items-center h4-custom">
                    <span className="w-fit"><HiOutlinePhone/></span>
                    <span className="w-fit">Voice chat</span>
                  </button>
                </div>
                <div className="flex-1">
                  <button className="bg-lightGreen w-full py-3 rounded-lg text-white flex gap-3 justify-center items-center h4-custom">
                    <span className="w-fit"><FiVideo/></span>
                    <span className="w-fit">Video call</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between w-full">
                <div><h4 className="h4-custom">People</h4></div>
                <div className="flex gap-2">
                  <SmallButton Icon={HiOutlineUserAdd} onclick={() => console.log("Edit profile")}/>
                  <SmallButton Icon={IoMdArrowDropdown} onclick={() => console.log("Edit profile")}/>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-3">
                {
                  ConvPeopleData.map((person, index) => (
                    <UserCard key={index} index={index} Person={person} SelectedIndex={SelectIndex} MuteIndex={MuteIndex} onClick={()=>HandelSelectChange(index)} OnClickMute={()=>HandelMuteChange(index)} OnClickClose={()=>console.log("Muted Card index: "+index)}/>
                  ))
                }
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between w-full">
                <div><h4 className="h4-custom">Chat Files</h4></div>
                <div className="flex gap-2">
                  <SmallButton Icon={IoMdArrowDropdown} onclick={() => console.log("Edit profile")}/>
                </div>
              </div>
              <div className="flex flex-col gap-3 mt-3">
                {
                  FilesData.map((file, index) => (
                    <FilesCard key={index} Icon={file.Icon} Name={file.Name} FilesCount={file.FilesCount} FilesSize={file.FilesSize} OnClick={()=>console.log("View Files")}/>
                  ))
                }
              </div>
            </div>
        </div>
    </div>
  )
}

export default ChatDetailsSection