import React from 'react'
import { AiOutlineAudioMuted } from "react-icons/ai";
import { IoMdCloseCircleOutline } from "react-icons/io";


const UserCard = ({index, Person, SelectedIndex, MuteIndex, OnClickMute, OnClickClose, onClick}) => {
    const {imageUrl, name, status} = Person;
    const handleMuteClick = (event) => {
        event.stopPropagation(); // Stop event propagation
        OnClickMute();
    };

    return (
        <button onClick={onClick} key={index}>
            <div className={`flex justify-between py-3 px-2 ${SelectedIndex === index ? 'bg-backgroundSecondary' : 'bg-white'} rounded-lg items-center`}>
                <div className='flex gap-2'>
                    <div>
                        <img src={imageUrl} alt={name} className="w-[40px] h-[40px] rounded-full object-cover"/>
                    </div>
                    <div className='flex flex-col'>
                        <h4 className='h4-custom leading-5'>{name}</h4>
                        <p className='text-lightGreen font-bold p-cutom text-start'>{status}</p>
                    </div>
                </div>
                <div className='flex gap-2 h3-custom'>
                    <button onClick={handleMuteClick} className={`${MuteIndex === index ? 'text-buttonRed' : 'text-black'}`}><AiOutlineAudioMuted /></button>
                    <button onClick={OnClickClose}><IoMdCloseCircleOutline /></button>
                </div>
            </div>
        </button>
    )
}

export default UserCard