import React, { useState } from "react";
import { Link } from "react-router-dom";
import mirjagalibimage from '../assets/mirjagalib.jpeg'


const quotes = [
  { text: "Hazaron khwahishen aisi ke har khwahish pe dam nikle.", author: "Mirza Ghalib" },
  { text: "Dil hi toh hai na sang-o-khisht, dard se bhar na aaye kyun.", author: "Mirza Ghalib" },
  { text: "Ishq par zor nahi, hai ye woh aatish Ghalib, jo lagaye na lage aur bujhaye na bane.", author: "Mirza Ghalib" },
  { text: "Har ek baat pe kehte ho tum ke tu kya hai.", author: "Mirza Ghalib" },
  { text: "Bas ke dushvaar hai har kaam ka aasaan hona.", author: "Mirza Ghalib" },
  { text: "Yeh na thi hamari qismat ke visaal-e-yaar hota.", author: "Mirza Ghalib" },
  { text: "Koi umeed bar nahi aati, koi soorat nazar nahi aati.", author: "Mirza Ghalib" },
  { text: "Imaan mujhe roke hai, jo kheenchhe hai mujhe kufr.", author: "Mirza Ghalib" },
  { text: "Dil-e-nadaan tujhe hua kya hai, aakhir is dard ki dawa kya hai.", author: "Mirza Ghalib" },
  { text: "Jala hai jism jahan dil bhi jal gaya hoga.", author: "Mirza Ghalib" },
  { text: "Koi mere dil se pooche teri nigaahon ka asar.", author: "Mirza Ghalib" },
  { text: "Ye na thi hamari qismat ke visaal-e-yaar hota.", author: "Mirza Ghalib" },
  { text: "Gham agarche jaan leva hai, par kahaan bachein.", author: "Mirza Ghalib" },
  { text: "Rone se aur ishq mein bebaak ho gaye.", author: "Mirza Ghalib" },
  { text: "Ishq mujhko nahi, wehshat hi sahi.", author: "Mirza Ghalib" },
  { text: "Kya farz hai ke sab ko mile ek jaisa jawab.", author: "Mirza Ghalib" },
  { text: "Hazaron saal nargis apni be-noori pe roti hai.", author: "Mirza Ghalib" },
  { text: "Yeh masail-e-tasawwuf, yeh tera bayan Ghalib.", author: "Mirza Ghalib" },
  { text: "Kya farz hai ke sab ko mile ek jaisa jawab.", author: "Mirza Ghalib" },
  { text: "Main bhi ek insaan hoon, mujhe bhi gham hai.", author: "Mirza Ghalib" },
  { text: "Hain aur bhi duniya mein sukhanwar bahut acche.", author: "Mirza Ghalib" },
  { text: "Na tha kuch toh khuda tha, kuch na hota toh khuda hota.", author: "Mirza Ghalib" },
  { text: "Rau mein hai rakhsh-e-umr kahaan dekhiye thamti.", author: "Mirza Ghalib" },
  { text: "Bazicha-e-atfaal hai duniya mere aage.", author: "Mirza Ghalib" },
  { text: "Haste hue dilon ko rulaana koi baat hai.", author: "Mirza Ghalib" },
  { text: "Ye na thi hamari qismat ke visaal-e-yaar hota.", author: "Mirza Ghalib" },
  { text: "Hai aur bhi duniya mein sukhanwar bahut acche.", author: "Mirza Ghalib" },
  { text: "Main ne majnun pe ladakpan mein asar dekha hai.", author: "Mirza Ghalib" },
  { text: "Ranj se khugar hua insaan toh mit jaata hai ranj.", author: "Mirza Ghalib" },
  { text: "Kabhi naam bhi le leta hai koi to acha lagta hai.", author: "Mirza Ghalib" },
  { text: "Nikalna khuld se aadam ka sunte aaye hain lekin.", author: "Mirza Ghalib" },
  { text: "Mohabbat mein nahi hai farq jeene aur marne ka.", author: "Mirza Ghalib" },
  { text: "Jab ke tujh bin nahi koi maujood, phir yeh hungama ae khuda kya hai.", author: "Mirza Ghalib" },
  { text: "Bas ke dushvaar hai har kaam ka aasaan hona.", author: "Mirza Ghalib" },
  { text: "Humko maaloom hai jannat ki haqiqat lekin.", author: "Mirza Ghalib" },
  { text: "Ishq ne Ghalib nikamma kar diya.", author: "Mirza Ghalib" },
  { text: "Har ek baat pe kehte ho tum ke tu kya hai.", author: "Mirza Ghalib" },
  { text: "Ishq ne humko barbaad kar diya, lekin sukoon bhi diya.", author: "Mirza Ghalib" },
  { text: "Maut ka ek din muayyan hai, neend kyun raat bhar nahi aati.", author: "Mirza Ghalib" },
  { text: "Dil hi toh hai na sang-o-khisht, dard se bhar na aaye kyun.", author: "Mirza Ghalib" },
  { text: "Aah ko chahiye ek umr asar hone tak.", author: "Mirza Ghalib" },
  { text: "Woh aaye ghar mein hamare khuda ki qudrat hai.", author: "Mirza Ghalib" },
  { text: "Kabhi naam bhi le leta hai koi to acha lagta hai.", author: "Mirza Ghalib" },
  { text: "Kya budh hai ke yeh aag lagayi nahi jaati.", author: "Mirza Ghalib" },
  { text: "Rau mein hai rakhsh-e-umr, kahaan dekhiye thamti.", author: "Mirza Ghalib" },
  { text: "Main ne majnun pe ladakpan mein asar dekha hai.", author: "Mirza Ghalib" },
  { text: "Hai bas ke har ek unke ishare mein nishaan aur.", author: "Mirza Ghalib" },
  { text: "Har ek baat pe kehte ho tum ke tu kya hai.", author: "Mirza Ghalib" },
  { text: "Jab ki tujh bin nahi koi maujood, phir yeh hungama ae khuda kya hai.", author: "Mirza Ghalib" },
  { text: "Mohabbat mein nahi hai farq jeene aur marne ka.", author: "Mirza Ghalib" }
];

const Quotes = () => {
  const [index, setIndex] = useState(0);
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
    if (index < quotes.length - 1) setIndex(index + 1);
  };

  const prevQuote = () => {
    if (index > 0) setIndex(index - 1);
  };

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

      <div className="flex justify-center items-center p-6 min-h-screen ">
        
        <div className="text-center max-w-lg  shadow-lg rounded-2xl p-6 bg-white bg-opacity-30 backdrop-blur-md border border-white/30">
          <Link to="/">
                <button className=" p-2 text-xl font-bold m-4 flex start rounded">
                  <i class="fa-regular fa-house"></i></button></Link>

          <img
          src={mirjagalibimage}
            alt="Mirja Galib"
            className="w-40 h-40 rounded-full mx-auto object-cover mb-4 border-4 border-emerald-400 shadow-md"
          />

          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            {quotes[index].author}
          </h1>

          <p className="text-xl text-gray-700 italic mb-6">
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
  );
};

export default Quotes;
