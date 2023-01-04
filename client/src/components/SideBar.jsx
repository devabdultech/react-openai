import React from 'react'
import send from "../assets/send.svg";
import add from "../assets/add.svg";
import message from "../assets/message.svg";
import del from "../assets/delete.svg";
import logout from "../assets/logout.svg";
import sun from "../assets/sun.svg";
import discord from "../assets/discord.svg";
import updates from "../assets/updates.svg";

import Buttons from '../components/Buttons';

const SideBar = () => {
  return (
    <aside className='relative flex-col hidden md:flex lg:flex xl:flex md:w-[45%] lg:w-[35%] xl:w-[25%] bg-[#202123] px-2 py-4'>
            <div className='flex border rounded-md px-3 py-3 gap-3 cursor-pointer hover:bg-gray-500/10'>
              <img className='w-5' src={add} alt='add' />
              <span>New Chat</span>
            </div>

            <div className='flex flex-col gap-2 mt-5 h-[50%]'>
              <div className='flex text-gray-100 py-3 px-3 items-center gap-3 rounded-md cursor-pointer bg-[#9ca0d4]'>
                <img className='w-4' src={message} />

                <div className='text-ellipsis max-h-5'>
                  <span>Message</span>
                </div>
              </div>
            </div>

            <div className='flex flex-col gap-1 border-t py-5 absolute bottom-0 w-full'>
              <Buttons image={del} text='Clear Conversations' />
              <Buttons image={sun} text='Light Mode' />
              <Buttons image={discord} text='OpenAI Discord' href={'https://discord.gg/openai'} />
              <Buttons image={updates} text='Updates & FAQ' href={'https://help.openai.com/en/collections/3742473-chatgpt'}/>
              <Buttons image={logout} text='Log out' />
            </div>
          </aside>
  )
}

export default SideBar