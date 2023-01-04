import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import classNames from 'classnames';
import hamburger from "../assets/hamburger.svg";
import add from "../assets/add.svg";
import testimg from "../assets/testimg.webp";
import SideBar from '../components/SideBar';
import HumanChat from '../components/HumanChat';
import GPTChat from '../components/GPTChat';
import message from "../assets/message.svg";
import del from "../assets/delete.svg";
import logout from "../assets/logout.svg";
import sun from "../assets/sun.svg";
import discord from "../assets/discord.svg";
import updates from "../assets/updates.svg";
import close from "../assets/close.svg";
import Buttons from '../components/Buttons';


const MainChat = () => {
   const [toggle, setToggle] = useState(false)

  return (
    <div className={'w-full h-full bg-gray-50 dark:bg-gray-700 text-black dark:text-white relative z-20 overflow-hidden'}>
        <Helmet>
            <title>Open AI | ChatGPT</title>
            <link rel="apple-touch-icon" sizes="180x180" href="https://chat.openai.com/apple-touch-icon.png"></link>
            <link rel="icon" type="image/png" sizes="32x32" href="https://chat.openai.com/favicon-32x32.png"></link>
            <link rel="icon" type="image/png" sizes="16x16" href="https://chat.openai.com/favicon-16x16.png"></link>
        </Helmet>

        <div className='flex flex-col flex-1 h-full md:flex-row lg:flex-row xl:flex-row'>
          <nav className={classNames('opacity-100', 'flex', 'justify-between', 'items-center', 'px-2', 'py-2', 'border-b', 'bg-gray-700', 'sticky', 'top-0', 'z-10', 'text-gray-200', 'md:hidden', 'lg:hidden', 'xl:hidden', {'opacity-20': toggle})}>
            <div className='cursor-pointer' onClick={() => setToggle(!toggle)}><img className='w-7 h-7' src={hamburger} alt='icon' /></div>
            <div className=''><span>New Chat</span></div>
            <div className='cursor-pointer'><img className='w-7 h-7' src={add} alt='icon' /></div>
          </nav>

          <SideBar />

          {toggle && (
            <div className='flex gap-3 absolute z-20 top-0 bottom-0 right-0 left-0 '>
              <aside className='px-3 py-4 bg-[#202123] w-[85%] relative'>
                <div className=''>
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

                    <div className='w-full flex flex-col gap-1 border-t py-5 absolute bottom-0 max-w-[calc(100%-20px)]'>
                      <Buttons image={del} text='Clear Conversations' />
                      <Buttons image={sun} text='Light Mode' click={toggleDark} />
                      <Buttons image={discord} text='OpenAI Discord' href={'https://discord.gg/openai'} />
                      <Buttons image={updates} text='Updates & FAQ' href={'https://help.openai.com/en/collections/3742473-chatgpt'}/>
                      <Buttons image={logout} text='Log out' />
                    </div>
                </div>
              </aside>

              <div onClick={() => setToggle(false)} className='w-[35px] h-[35px] mt-3 cursor-pointer'><img className='w-full focus:border p-1 ' src={close} alt='Close Nav' /></div>
            </div>
          )}

          <main className={classNames('relative', 'h-full', 'w-full', 'flex', 'flex-col', {'opacity-20': toggle})}>
            <div className="flex flex-col overflow-y-scroll max-h-[calc(100%-130px)] lg:mx-auto scrollbar-thumb-gray-500 scrollbar-thin scrollbar-w-1.5 scrollbar-rounded-[12px]">
              <HumanChat />
              <GPTChat />
              <HumanChat />
              <GPTChat />
              <HumanChat />
              <GPTChat />
              <HumanChat />
              <GPTChat />
              <HumanChat />
              <GPTChat />
              <HumanChat />
              <GPTChat />
              <HumanChat />
              <GPTChat />
            </div>

            <div className='absolute bottom-0 left-0 w-full border-t py-3 lg:py-4 xl:py-5 lg:border-none'>
              <form className='stretch mx-2 flex flex-grow gap-3 pt-2 lg:mx-auto lg:max-w-2xl xl:max-w-3xl overflow-hidden' action="">
                <div className='relative flex h-full flex-1 items-center'>
                  <div className='w-12 h-12 cursor-pointer rounded-lg flex-shrink-0 p-1.5 lg:hidden xl:hidden'>
                    <img src={testimg} alt='image' />
                  </div>
                  
                  <div className='flex items-center w-full py-2 relative border border-black/10 dark:border-gray-900/50 bg-white dark:bg-gray-700 rounded-md'>
                    <textarea rows='1' className='w-full h-full m-0 resize-none border-0 bg-transparent p-0 focus:ring-0 focus-visible:ring-0 outline-none dark:outline-none pl-3 dark:focus:ring-0 dark:focus-visible:ring-0 dark:border-0 dark:bg-transparent'></textarea>
                    <button className="absolute p-1 rounded-md text-gray-500 bottom-1.5 right-1 md:bottom-2.5 md:right-2 hover:bg-gray-100 dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 20 20" class="h-4 w-4 rotate-90" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg></button>
                  </div>


                  <div className="ml-1 mt-1.5 mb-1.5 md:w-full md:m-auto md:hidden md:mb-2 gap-2 justify-center lg:hidden xl:hidden lg:max-w-2xl"><button className="btn flex justify-center gap-2 btn-neutral border-0 md:border"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path></svg></button></div>
                </div>
              </form>
              <div class="px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6"><a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank" rel="noreferrer" class="underline">ChatGPT Dec 15 Version</a>. Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.</div>
            </div>
          </main>
        </div>
    </div>
  )
}

export default MainChat