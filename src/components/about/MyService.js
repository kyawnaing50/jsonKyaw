import React from 'react'
import { GoDeviceMobile } from 'react-icons/go';//SiWebflow
import { HiGlobeAlt } from 'react-icons/hi';//HiTranslate
import { HiTranslate } from 'react-icons/hi';//FcReading
import { MdOutlineContentPaste } from 'react-icons/md';//
import { AiFillApi, AiOutlineDesktop } from 'react-icons/ai';
import ServiceCard from './ServiceCard'

const MyService = () => {
  return (
      <div className=' grid grid-cols-2 mb-8'>
      <ServiceCard
        icons={<HiGlobeAlt />}
        title="Web Development"
        subtitle=" Portfolio ဝက်ဆိုက်များ၊ လုပ်ငန်း Landing Page ဝက်ဆိုက်များ၊ Ecommerce ဝက်ဆိုက်များနှင့်  any type of website, etc...။ "
      />
        <ServiceCard
        icons={<GoDeviceMobile />}
        title="Mobile Development"
        subtitle="Ecommerce App, Delivery App, Categories Management Syatem App စသော Android Apps, IOS Apps အမျိုးမျိုးအား ရေးသားပေးခြင်း၊ ရေးပြီးသွားပါက App အား  Play Store ပေါ်သို့ တင်ပေးခြင်း။"
      />
      <ServiceCard
        icons={<AiFillApi />}
        title="API"
        subtitle="Ecommerce App, Delivery App ကဲ့သို့သော Database နှင့်ချိတ်ဆက်အသုံးပြုရသော ဝက်ဆိုက်များ၊ ဖုန်းဆော့ဝဲများအတွက် MySQL Database ၊ Laravel Framework  တို့ဖြင့် API Service များ။  "
      />
      <ServiceCard
        icons={<AiOutlineDesktop />}
        title="Desktop Development"
        subtitle="POS ဆော့ဝဲများ၊ Accountant ဆော့ဝဲများ၊ Class Management System ဆော့ဝဲများကဲ့သို့သော Database အခြေပြု Desktop ဆော့ဝဲအမျိုးမျိုး။  "
      />
      <ServiceCard
        icons={<MdOutlineContentPaste />}
        title="Content Writing"
        subtitle="ဘောလုံးသတင်းများ၊ IT ဆောင်းပါးများ၊ Youtue video နှင့် Facebook  video များအတွက် Contents များ။ "
      />
      <ServiceCard
        icons={<HiTranslate />}
        title="Translation"
        subtitle=" အားကစားသတင်းများ၊ နည်းပညာဆောင်းပါးများနှင့် စစ်ဘက်ဆိုင်ရာဆောင်းပါးများကို  English to Myanmar သို့ ဘာသာပြန်ပေးခြင်း။ "
      />
      </div>
  )
}

export default MyService