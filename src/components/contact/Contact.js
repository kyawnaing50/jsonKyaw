import React, { useState} from 'react';
import Title from '../../roundeDesign/home/Title'
import { FiSend } from 'react-icons/fi';
import axios from 'axios';

const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Error message start here
  const [errorClientName, setErrClientName] = useState("");
  const [errorEmail, setErrEmail] = useState("");
  const [errMessage, setErrMessage] = useState("");
  // Error Message End Here

  const [successMsg, setSuccessMsg] = useState("");
  // Email Validation Here


  const emailValidation = (email) => {
    return String(email).toLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  }
  const handleSend=(e)=>{
    if (!clientName) {
      setErrClientName(true);
    }
    if (!email) {
      setErrEmail(true);
    }
    else {
      if (!emailValidation(email)) {
        setErrEmail(true);
      }
    }
    if (!message) {
      setErrMessage(true);
    }
    if (clientName && email && emailValidation(email) && message) {
      console.log(clientName, email, message);
      axios.post("https://getform.io/f/bce43cfa-1a51-482d-bd0a-7d157165e0a2", {
        name: clientName,
        email: email,
        message:message
      });
      setSuccessMsg(
        `😍 ဟုတ်ကဲ့ပါ ${clientName} ရေ , မိတ်ဆွေပို့လိုက်တဲ့ မက်ဆေ့ကို အောင်မြင်စွာ လက်ခံရရှိကြောင်းပါ။ စာပါအကြောင်းအရာနဲ့ပတ်သက်ပြီး မိတ်ဆွေထံ မကြာမီ အကြောင်းပြန်ပေးပါမည်ခင်များ။ ယခုလို အချိန်ပေးခဲ့မှုအတွက် ကျေးဇူးအန္တပါခင်များ။ လုပ်ငန်းများအဆင်ပြေချော့မွေ့ပြီး လိုအင်ဆန္ဒပြည့်ဝပါစေ ${clientName} ခင်များ 🙏`
      );

      setClientName("");
      setEmail("");
      setMessage("");
    }

  }
  const handleName = (e) => {
    setClientName(e.target.value)
    setErrClientName(false)
  }
   const handleEmail = (e) => {
     setEmail(e.target.value);
     setErrEmail(false);
   }
  const handleMessage = (e) => {
     setMessage(e.target.value);
     setErrMessage(false);
   }
   
  return (
    <div>
      <Title title="Get" subtitle="In Touch" />
      <div className='p-6 flex justify-between gap-20'>
        <div className='w-1/2'>
          <p className=' flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
              <span className='bg-designColor text-gray-700 text-sm font-titlefont font-medium px-2 rounded-md flex items-center justify-center'>Address</span><span className=' text-md font-titlefont text-[#ccc]'>Naypyitaw</span>
          </p>
          <p className=' flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
              <span className='bg-designColor text-gray-700 text-sm font-titlefont font-medium px-2 rounded-md flex items-center justify-center'>Phone</span><span className=' text-md font-titlefont text-[#ccc]'>+95 9967575972</span>
          </p>
        </div>
        
          <div className='w-1/2'>
          <p className=' flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
              <span className='bg-designColor text-gray-700 text-sm font-titlefont font-medium px-2 rounded-md flex items-center justify-center'>Email</span><span className=' text-sm font-titlefont text-[#ccc]'>zayyarzawye@gmail.com</span>
          </p>
          <p className=' flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800'>
              <span className='bg-designColor text-gray-700 text-sm font-titlefont font-medium px-3 py-1 rounded-md flex items-center justify-center'>Freelance</span> <span className=' text-md font-titlefont text-[#ccc]'>Available</span>
          </p>
        </div>
      </div>


      <div className=' w-full mt-10'>
        <Title title="Send" subtitle="Messages" />
        {/* ===========Form Start here=================== */}
        {
          successMsg ? <p className=' text-center text-base font-titlefont p-20 text-designColor'>{ successMsg}</p>:<form id='form'
          action='https://getform.io/f/bce43cfa-1a51-482d-bd0a-7d157165e0a2'
          method='POST'
          className=' px-6 flex flex-col gap-6'>
          <div className=' w-full flex gap-10 justify-between'>
            <input
              onChange={handleName}
              value={clientName }
              className={`${
                errorClientName?"border-red-600 focus-visible:border-red-600":" border-zinc-600 focus-visible:border-designColor"} w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
              type="text" placeholder='Full Name' />
            
            <input
              onChange={handleEmail}
              value={email}
              className={`${errorEmail?"border-red-600 focus-visible:border-red-600":"border-zinc-600 focus-visible:border-designColor"}w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
              type="email" placeholder='Email Address' />
          </div>
          <textarea
            onChange={handleMessage}
            value={ message}
            className={`${errMessage?"border-red-600 focus-visible:border-red-600":"border-zinc-600 focus-visible:border-designColor"} w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300 resize-none`} cols="30"
          rows="4"
          placeholder="Your Messages"
          ></textarea>
          <button
            onClick={handleSend}
            className=' text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-300'>Send Message <span>{<FiSend />}</span></button>
        </form>
        }
      </div>
    </div>
  )
}

export default Contact