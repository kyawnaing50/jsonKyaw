import React from 'react';
import { MdWork } from 'react-icons/md';
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from './ResumeCard';
import ResumeTitle from './ResumeTitle';

const Education = () => {
  return (

    // Experience
      <div className=' w-full grid grid-cols-9 px-6'>
          <div className='col-span-4'>
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge="2020-Present"
          title="Web Developer"
          subTitle="Freelancer"
          des="2020 ခုနှစ်တွင်  Web development အပိုင်းကို စတင်လေ့လာခဲ့ပြီး Website များကို ယခုအချိန်အထိ မိမိတစ်ဦးတည်းသော်လည်းကောင်း၊  development team ဖြင့်သော်လည်းကောင်း ရေးသားလျက်ရှိသည်။ " />
        <ResumeCard
          badge="2018-Present"
          title="Android Developer"
          subTitle="Freelancer"
          des="Android Development ကို 2018 ခုနှစ်တွင် စတင်လေ့လာခဲ့ပြီး ယနေ့အချိန်အထိ Android App မြောက်များစွာကို တစ်ဦးချင်းသော်လည်းကောင်း၊ development team ဖြင့်သော်လည်းကောင်း ရေးသားလျှက်ရှိပါသည်။ " />
        <ResumeCard
          badge="2022-Present"
          title="Backend Developer"
          subTitle="Freelancer"
          des="2022 ခုနှစ်တွင် Laravel Framework ဖြင့် Back-end API Service အပိုင်းကို စတင်လေ့လာခဲ့ပါသည်။ ယခုအချိန်တွင် Laravel API mini Projects များ စတင်ရေးသားလျှက်ရှိပါသည်။ " />
        <ResumeCard
          badge=""
          title="Desktop Developer"
          subTitle="R & D"
          des="2016 ခုနှစ်တွင် IT လောကထဲသို့စတင်ဝင်ရောက်ခဲ့ပြီး ယင်းအချိန်မှ ယနေ့အချိန်အထိ သုတေသနလုပ်ငန်းများ၏ လိုအပ်ချက်အရသော်လည်းကောင်း Commercial အရသော်လည်းကောင်း Desktop Appများစွာကိုရေးသားလျှက် ရှိပါသည်။  "/>
      </div>
      
      {/* Education */}
      <div className=' w-full h-full flex justify-center items-center'>
            <span className=' w-[1px] h-full bg-zinc-800 inline-flex'></span>
      </div>
      <div className=' col-span-4'>
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2004"
          title="High School"
          subTitle=""
          des="2004 ခုနှစ်တွင် တက္ကသိုလ်ဝင်တန်းစာမေးပွဲကို ရခိုင်ပြည်နယ်၊ စစ်တွေမြို့မှ ဖြေဆို၍ ဓာတုဗေဒဘာသာရပ်ဂုဏ်ထူး (စုစုပေါင်းရမှတ် ၄၁၂ မှတ်) ဖြင့် အောင်မြင်ခဲ့ပါသည်။ " />
        <ResumeCard
          badge="2007"
          title="B.C.Sc"
          subTitle=""
          des="2007 ခုနှစ်တွင် ကွန်ပျူတာသိပ္ပံဘွဲ့ (BCSc) ကို မဟာတန်းတက်ရောက်ရန်အဆင့်မီဖြင့် အောင်မြင်ခဲ့ပါသည်။ " />
        <ResumeCard
          badge="2011"
          title="M.C.Sc"
          subTitle=""
          des="2011 ခုနှစ်တွင် မဟာကွန်ပျူတာသိပ္ပံ(Master of Computer Science) ဘွဲ့ကို ရရှိခဲ့ပါသည်။ "/>
          </div>
    </div>
  )
}

export default Education