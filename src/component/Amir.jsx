import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import amirimage from '../assets/amir.jpeg'


const quotes = [
{ text: "Khusro raen suhaag ki, jagi piya ke sang.", author: "Amir Khusro" },
{ text: "Tu kun faya kun, main faya kun.", author: "Amir Khusro" },
{ text: "Agar firdaus bar roo-e zameen ast, hameen ast-o hameen ast-o hameen ast.", author: "Amir Khusro" },
{ text: "Tohse naina laage re, piya saaware.", author: "Amir Khusro" },
{ text: "Chaap tilak sab cheeni, re mose naina milaike.", author: "Amir Khusro" },
{ text: "Nami danam che manzil bood, shab jaaye ke man boodam.", author: "Amir Khusro" },
{ text: "Aaj rang hai ri maa, rang hai ri.", author: "Amir Khusro" },
{ text: "Mehboob ke dar par sar rakh diya, duniya ke daulat se kya lena.", author: "Amir Khusro" },
{ text: "Ishq me jeena, ishq me marna.", author: "Amir Khusro" },
{ text: "Dil hi to hai na sang-o-khisht, dard se bhar na aaye kyun.", author: "Amir Khusro" },
{ text: "Bahut kathin hai dagar panghat ki.", author: "Amir Khusro" },
{ text: "Mann mandir pe rakh de zindagi, ishq ki ibadat ban jaaye.", author: "Amir Khusro" },
{ text: "Tujhe dekha toh bas dekhte reh gaye.", author: "Amir Khusro" },
{ text: "Jo na aaya wo na aayega, dil yeh baat jaanta tha.", author: "Amir Khusro" },
{ text: "Na main moosa na phiraun, ishq ki raah anokhi.", author: "Amir Khusro" },
{ text: "Ranjha ranjha kardi ni main aape ranjha hoyi.", author: "Amir Khusro" },
{ text: "Mera ishq bhi tu, marz bhi tu, dawa bhi tu.", author: "Amir Khusro" },
{ text: "Main to piya se naina laga aayi re.", author: "Amir Khusro" },
{ text: "Bada mushkil hai raah-e-ishq, par hum bhi ziddi hain.", author: "Amir Khusro" },
{ text: "Meri jaan tere hawale, ab jo ho so ho.", author: "Amir Khusro" },
{ text: "Ishq na puche zaat na puche kaun.", author: "Amir Khusro" },
{ text: "Nazar mila ke ishq ki raah shuru hoti hai.", author: "Amir Khusro" },
{ text: "Ishq ki gali mein kadmon se zyada dil chalte hain.", author: "Amir Khusro" },
{ text: "Teri baat mein ho jaaun gum, bas itna hi kaafi hai.", author: "Amir Khusro" },
{ text: "Maqsood yehi ishq ka, khud ko bhula dena.", author: "Amir Khusro" },
{ text: "Maine ishq mein sab kho diya, par khud ko paa liya.", author: "Amir Khusro" },
{ text: "Tere bina kya jeena, tere bina kya marna.", author: "Amir Khusro" },
{ text: "Zakhm ishq ke hain, par meetha lagta hai.", author: "Amir Khusro" },
{ text: "Har dhadkan tera naam kare.", author: "Amir Khusro" },
{ text: "Ishq ki duniya ajeeb, par sukoon bhi wahin.", author: "Amir Khusro" },
{ text: "Dil diya, jaan di, ishq ka farz adaa kiya.", author: "Amir Khusro" },
{ text: "Jab ishq saath ho, khuda bhi paas ho.", author: "Amir Khusro" },
{ text: "Hum ishq wale, duniya se alag.", author: "Amir Khusro" },
{ text: "Mohabbat rooh ka safar hai, jism ka nahi.", author: "Amir Khusro" },
{ text: "Tu ho toh har jagah roshan.", author: "Amir Khusro" },
{ text: "Ishq mein haarna hi jeet hai.", author: "Amir Khusro" },
{ text: "Khuda ke baad agar kisi ko chaha, toh tu.", author: "Amir Khusro" },
{ text: "Aankhon se ishq ki ibadat hoti hai.", author: "Amir Khusro" },
{ text: "Ishq ki aag mein jal ke sona ban jaata hai.", author: "Amir Khusro" },
{ text: "Tu mila toh khuda mila.", author: "Amir Khusro" },
{ text: "Mohabbat ne mujhe muqammal kar diya.", author: "Amir Khusro" },
{ text: "Dil tere hawale, ab jo ho so ho.", author: "Amir Khusro" },
{ text: "Teri ek muskurahat meri duniya badal de.", author: "Amir Khusro" },
{ text: "Khushi teri, dua meri.", author: "Amir Khusro" },
{ text: "Ishq mein na sahi, dua mein toh yaad rakhna.", author: "Amir Khusro" },
{ text: "Tu rooh ki awaaz, main uska tarjuman.", author: "Amir Khusro" },
{ text: "Teri yaad mein rehta hoon, yahi meri ibadat hai.", author: "Amir Khusro" },
{ text: "Tu mil jaaye toh duniya se kya mohabbat karu?", author: "Amir Khusro" }
];





const Rahul = () => {
    const [index, setindex] = useState(0)
    const [Copied, setCopied] = useState(false)


    const shareQuote = async () => {
  const quoteText = `"${quotes[index].text}" — ${quotes[index].author}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Motivational Quote",
        text: quoteText,
      });
    } catch (err) {
      console.log();
    }
  } else {
    alert("Sharing not supported on this device ❌");
  }
};



const nextQuote = () => {
    if(index < quotes.length -1 )setindex(index + 1)
}
const prevQuote = () => {
    if(index > 0) setindex(index - 1)
}

 const copyQuote = () => {
    const quoteText = `"${quotes[index].text}" — ${quotes[index].author}`;
    navigator.clipboard.writeText(quoteText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500); // Reset after 1.5s
  };

  const [showList, setShowList] = useState(false);
  
    const shayars = [
      {Name:"Rahat",path:"/rahat"},
      {Name:"John Elia",path:"/john"},
      {Name:"Mirza Ghalib",path:"/mirja"},
      {Name:"Allama Iqbal",path:"/allma"},
      {Name:"Faiz Ahmed Faiz",path:"/faiz"},
      {Name:"Rahul",path:"/rahul"},
      {Name:"Rumi",path:"/rumi"},
      {Name:"BullehShah",path:"/shah"},
      {Name:"Amir",path:"/amir"},
    ];


  return (
    <>
     <div className="relative">
              {/* Navbar */}
              <nav className="flex justify-between items-center px-10 py-4 sticky top-0 z-50 bg-black text-white shadow-md">
                <h1 className="text-2xl font-bold">Quotes App</h1>
        
                <button onClick={() => setShowList(!showList)}>
                  <i className="fa-solid fa-bars text-2xl"></i>
                </button>
              </nav>  
        
              {/* Sidebar */}
              <div
                className={`fixed top-0 right-0 h-full w-64 bg-black text-white shadow-lg transform transition-transform duration-300 z-40 flex flex-col items-start p-6 gap-4 ${
                  showList ? "translate-x-0" : "translate-x-full"
                }`}
              >
                <button
                  className="self-end mb-4 text-2xl"
                  onClick={() => setShowList(false)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
        
                {shayars.map((item, i) => (
                  <Link
                    key={i}
                    to={item.path}
                    onClick={() => setShowList(false)}
                    className="hover:text-gray-300 text-lg transition"
                  >
                    {item.Name}
             
        
                  </Link>
                ))}
                       <p class="text-center text-sm text-gray-500 mt-6">
          Made with ❤️ by Aman : )
        </p>
              </div>
            </div>
            
    <div className='flex justify-center items-center p-6 min-h-screen'>
      <div className='text-center max-w-lg  shadow-lg rounded-2xl p-6 bg-white bg-opacity-30 backdrop-blur-md border border-white/30'>
        <Link to="/">
        <button className=" p-2 text-xl font-bold m-4 flex start rounded">
                  <i class="fa-regular fa-house"></i></button>
        </Link>
        <img
        src={amirimage}
        className='w-40 h-40 rounded-full mx-auto object-cover mb-4 border-4 border-emerald-400 shadow-md'
        alt='Rahul Sankrityayan'
        />
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {quotes[index].author}
        </h1>
        <p className='text-xl text-gray-700 italic mb-6'>
          “{quotes[index].text}”
        </p>

<div className='flex justify-center gap-18'>
          <div className='flex justify-center gap-20 mb-4'>
             <button
        onClick={copyQuote}
        className="mt-4 text-black px-5 py-2 rounded-lg font-bold"
      >
        {Copied ? "Copied ✅" : <i class="fa-regular fa-copy  text-xl font-bold text-black"></i>}
      </button>
          </div>

          <div>
            <button 
            onClick={shareQuote}
            className="mt-4 text-black px-5 py-2 rounded-lg font-bold">
              <i class="fa-solid fa-share text-xl font-bold"></i></button>
</div>
</div>


        <div className="flex justify-center gap-4">
            {index > 0 && (
              <button
                className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-emerald-600 transition"
                onClick={prevQuote}
              >
                Prev
              </button>
            )}
            {index < quotes.length - 1 && (
              <button
                className="bg-emerald-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-emerald-600 transition"
                onClick={nextQuote}
              >
                Next
              </button>
            )}
          </div>
      </div>

    </div>
    </>
  )
}

export default Rahul