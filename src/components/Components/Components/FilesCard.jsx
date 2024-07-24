import React from 'react'
import { IoIosArrowForward } from "react-icons/io";


const FilesCard = ({Icon, Name, FilesCount, FilesSize, OnClick}) => {
return (
    <button className="text-black font-medium py-2 px-2 rounded-lg hover:bg-slate-50 flex justify-between items-center">
        <div className="flex gap-2">
            <p className='h3-custom p-4 bg-backgroundSecondary w-fit rounded-full'><Icon /></p>
            <div className='flex flex-col justify-center'>
                <h4 className='text-gray-500 h4-custom text-start'>{Name}</h4>
                <p className='h3-custom p-custom text-start'>{FilesCount} files</p>
            </div>
        </div>
        <div className='flex justify-center gap-2'>
            <p className='h3-custom p-custom text-gray-500'>{FilesSize} MB</p>
            <span className='text-gray-500'><IoIosArrowForward /></span>
        </div>
    </button>
)
}

export default FilesCard