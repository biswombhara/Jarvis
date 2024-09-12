import React, { useContext } from 'react'
import { Avatar, Badge } from "@material-tailwind/react";
import { Context } from '../context/Context';
import "./ChatBox.css"
import ChatLoader from './ChatLoader';
import HtmlProvider from '../context/HtmlContext';
import UseHtml from './UseHtml';

function ChatBox() { 
  const { recentPrompts, resultData, } = useContext(Context);
  const htmlString = resultData;

  return (
    <div className="flex sm:w-[90vw] flex-column w-[50vw] m-auto">
      <div className="search flex items-center my-4">
      <Badge placement="top-end" overlap="circular" color="green" withBorder>
        <Avatar
          src="https://wellgroomedgentleman.com/wp-content/uploads/2023/10/tony-stark-beard.original.jpg"
          alt="avatar"
          size='sm'
        />
      </Badge>
      <p className='text-white ml-2'>{recentPrompts}</p>
      </div>
      <div className="results text-white flex">
        <Avatar
          src="https://bit.ly/4d0u72E"
          alt="avatar"
          size='sm'
        />
      <p className='text-white ml-2'>        
        {resultData? <>
        <HtmlProvider htmlString={htmlString}>
          <UseHtml />
        </HtmlProvider></>
        :<ChatLoader/> }
      </p>
        
      </div>
    </div>
  )
}

export default ChatBox



