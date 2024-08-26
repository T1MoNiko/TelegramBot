
import { Route, Routes } from 'react-router-dom';
import ZodiacContainer from './components/ZodiacContainer';
import ZodiacInfo from './components/ZodiacInfo';
import { createContext, useState } from 'react';
export const LanContext = createContext(null)

const App = () => {
  const [lan, setLan] = useState(window.Telegram.WebApp.initDataUnsafe.user?.language_code);
  const [zodiacs, setZodiacs] = useState([
    {
      zodiacRu: "Овен",
      zodiacEn: "Aries",
      periodRu: "21 марта - 19 апреля",
      periodEn: "March 21 - April 19"
    },
    {
      zodiacRu: "Телец", 
      zodiacEn: "Taurus",
      periodRu: "20 апреля - 20 мая",
      periodEn: "April 20 - May 20"
    },
    {
      zodiacRu: "Близнецы",
      zodiacEn: "Gemini", 
      periodRu: "21 мая - 20 июня",
      periodEn: "May 21 - June 20"
    },
    {
      zodiacRu: "Рак",
      zodiacEn: "Cancer",
      periodRu: "21 июня - 22 июля",
      periodEn: "June 21 - July 22"
    },
    {
      zodiacRu: "Лев",
      zodiacEn: "Leo",
      periodRu: "23 июля - 22 августа",
      periodEn: "July 23 - August 22"
    },
    {
      zodiacRu: "Дева",
      zodiacEn: "Virgo",
      periodRu: "23 августа - 22 сентября",
      periodEn: "August 23 - September 22"
    },
    {
      zodiacRu: "Весы",
      zodiacEn: "Libra",
      periodRu: "23 сентября - 22 октября",
      periodEn: "September 23 - October 22"
    },
    {
      zodiacRu: "Скорпион",
      zodiacEn: "Scorpio",
      periodRu: "23 октября - 21 ноября",
      periodEn: "October 23 - November 21"
    },
    {
      zodiacRu: "Стрелец",
      zodiacEn: "Sagittarius",
      periodRu: "22 ноября - 21 декабря",
      periodEn: "November 22 - December 21"
    },
    {
      zodiacRu: "Козерог",
      zodiacEn: "Capricorn",
      periodRu: "22 декабря - 19 января",
      periodEn: "December 22 - January 19"
    },
    {
      zodiacRu: "Водолей",
      zodiacEn: "Aquarius",
      periodRu: "20 января - 18 февраля",
      periodEn: "January 20 - February 18"
    },
    {
      zodiacRu: "Рыбы",
      zodiacEn: "Pisces",
      periodRu: "19 февраля - 20 марта",
      periodEn: "February 19 - March 20"
    }
  ])


  return (
    <LanContext.Provider value={{lan, setLan, zodiacs, setZodiacs}}>
      <Routes>
        <Route path='/' element={<ZodiacContainer/>}/>
        <Route path='/:zodiac' element={<ZodiacInfo/>}/>
      </Routes>
    </LanContext.Provider>
  )
}

export default App;
