import React from 'react'
import { useTypewriter,Cursor} from "react-simple-typewriter";
 import {BsCloudLightningFill,  BsFacebook } from "react-icons/bs";//
import { FaGithub } from "react-icons/fa";//FaLinkedin
// import { AiFillTwitterCircle } from "react-icons/ai";
import { SiYoutube, SiViber ,SiTelegram} from "react-icons/si";
import {  FiMail, FiSend } from "react-icons/fi";//FiInstagram,FiSend
import  banner  from '../../assets/work/banner.jpeg';
import CV from '../../assets/myResume.pdf'

const Left = () => {
    const [text] = useTypewriter({
        words: ["Full Stack Developer","Web Developer", "UI Designer", "Android Developer","Youtuber", "Desktop App Developer","Myint Myat Maung's Daddy", "Shwe Yote's Father"],
        loop: true,
        typeSpeed:50,deleteSpeed:20,delaySpeed:2000,
    });
    return (
        <div className='w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShadow z-10'>
            <div className='w-full h-3/5'>
                <img className='w-full h-full object-cover rounded-2xl'
                    src={banner}
                    alt="bannerImage"
                    loading='priority'/>
            </div>
            <div className='w-full h-2/5 '>
                {/* Contain the intro */}
                <div className='flex flex-col items-center gap-2 py-10'>
                    <h1 className='text-textColor text-2xl font-semibold'>Json Kyaw</h1>
                    <p className=' text-base text-designColor tracking-wide'>{ text}<Cursor cursorBlinking="false" cursorStyle="|"/></p>
                    <div className=' flex justify-center gap-2 mt-2'>

                    {/* =====Github====== */}
                    <a href= "https://github.com/kyawnaing50" target="_blank" rel='noreferrer'>      
                    <span className=' hover:text-designColor duration-300 cursor-pointer text-xl'><FaGithub /></span>
                    </a>
                        
                    {/* ====Viber======  */}
                    <a href= "https://msng.link/o/?959693919888=vi" target="_blank" rel='noreferrer'> 
                    <span className=' hover:text-designColor duration-300 cursor-pointer text-xl'><SiViber /></span>
                    </a>  
                    {/* ====Youtube======  */}
                    <a href= "https://www.youtube.com/channel/UCcoSSlH6jXWe_QEB6yLv5Jg" target="_blank" rel='noreferrer'>
                    <span className=' hover:text-designColor duration-300 cursor-pointer text-xl'><SiYoutube /></span>
                    </a>
                    {/* ====Facebook======  */}
                    <a href= "https://www.facebook.com/profile.php?id=100011348866484" target="_blank" rel='noreferrer'> 
                    <span className=' hover:text-designColor duration-300 cursor-pointer text-xl'>< BsFacebook/></span>
                    </a>
                    {/* ====Mail======  */}
                    <a href= "https://mail.google.com/mail/u/0/#inbox" target="_blank" rel='noreferrer'> 
                    <span className=' hover:text-designColor duration-300 cursor-pointer text-xl'><FiMail /> </span>     
                    </a>
                    {/* ====Telegram======  */}
                    <a href="https://telegram.me/U Kyaw" target="_blank" rel='noreferrer'>
                        <span className=' hover:text-designColor duration-300 cursor-pointer text-xl'><SiTelegram /></span> 
                    </a>   
                    </div>
                </div>

                {/* button */}
                <div className='flex h-14'>
                    <a className=' w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-sm tracking-wide uppercase gap-2 hover:text-designColor duration-300'
                        href= {CV}
                        target="_blank"
                        rel='noreferrer'>
                    <button className='w-full h-full flex justify-center borderRight items-center gap-2 '>Download Resume<BsCloudLightningFill/></button>
                    </a>
                    <button className='w-1/2 h-full flex justify-center items-center gap-2 border-t-[1px] border-t-zinc-800 text-sm tracking-wide uppercase hover:text-designColor duration-300'>contact me<FiSend/></button>
                </div>
            </div>
        </div>
    );
}

export default Left
