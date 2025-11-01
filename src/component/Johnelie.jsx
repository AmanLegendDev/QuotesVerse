import React, { useState } from "react";
import { Link } from "react-router-dom";
import johnalieimage from '../assets/johnelie.jpeg'

const quotes = [ { text: "In the silence of failure, hope learns to speak again.", author: "John Elie" }, { text: "Every scar is a medal for surviving what tried to break you.", author: "John Elie" }, { text: "Dreams are not lost; they just wait for your courage to return.", author: "John Elie" }, { text: "Tears teach you what victory could never explain.", author: "John Elie" }, { text: "When life forgets to smile, smile for it.", author: "John Elie" }, { text: "Even broken wings remember how to fly.", author: "John Elie" }, { text: "Sometimes, strength is simply refusing to give up your softness.", author: "John Elie" }, { text: "You rise not because you never fall, but because you still believe.", author: "John Elie" }, { text: "The heart heals in whispers, not in noise.", author: "John Elie" }, { text: "Every sunset writes a promise for another sunrise.", author: "John Elie" }, { text: "Those who walk alone often arrive first — and wiser.", author: "John Elie" }, { text: "Pain is not your enemy; it’s the map that shows you where to begin.", author: "John Elie" }, { text: "Behind every smile lies a battle worth fighting.", author: "John Elie" }, { text: "Courage doesn’t roar; it breathes quietly in tired hearts.", author: "John Elie" }, { text: "Some goodbyes build you stronger than any love ever could.", author: "John Elie" }, { text: "Faith is walking in the dark, believing there’s light ahead.", author: "John Elie" }, { text: "You can’t lose what was meant to teach you.", author: "John Elie" }, { text: "Every heartbreak plants the seed of a better tomorrow.", author: "John Elie" }, { text: "Sometimes silence is the loudest answer to pain.", author: "John Elie" }, { text: "The moment you forgive yourself, life forgives you too.", author: "John Elie" }, { text: "Stars shine brightest in the darkest nights of your soul.", author: "John Elie" }, { text: "Even broken mirrors reflect truth.", author: "John Elie" }, { text: "The ones who smile after losing everything are the true kings.", author: "John Elie" }, { text: "Sometimes, peace is not found — it’s created.", author: "John Elie" }, { text: "Every pain carries a poem inside it.", author: "John Elie" }, { text: "Hearts don’t forget; they just learn to beat differently.", author: "John Elie" }, { text: "Don’t chase people; build yourself until they find you.", author: "John Elie" }, { text: "What breaks you today, shapes you tomorrow.", author: "John Elie" }, { text: "Tears water the garden of your strength.", author: "John Elie" }, { text: "Sometimes, losing is how you win your peace.", author: "John Elie" }, { text: "The soul grows silent when it finally understands.", author: "John Elie" }, { text: "Kindness is the only language pain understands.", author: "John Elie" }, { text: "Even the moon has scars, yet it lights the sky.", author: "John Elie" }, { text: "Every goodbye hides a lesson in disguise.", author: "John Elie" }, { text: "Don’t rush healing; even dawn takes time to appear.", author: "John Elie" }, { text: "You’re never too broken to begin again.", author: "John Elie" }, { text: "Loneliness is just life’s way of helping you meet yourself.", author: "John Elie" }, { text: "Forgive the past; it was only trying to prepare you.", author: "John Elie" }, { text: "The most beautiful souls are born in storms.", author: "John Elie" }, { text: "Not every wound bleeds — some just change you quietly.", author: "John Elie" }, { text: "When love leaves, it still teaches you how to feel.", author: "John Elie" }, { text: "Sometimes strength looks like a quiet smile.", author: "John Elie" }, { text: "Your pain today will be someone’s hope tomorrow.", author: "John Elie" }, { text: "Time doesn’t heal — it teaches you how to live with it.", author: "John Elie" }, { text: "The sky never forgets a dream that dared to fly.", author: "John Elie" }, { text: "Even endings can be beautiful if you walk away with grace.", author: "John Elie" }, { text: "Don’t curse your scars; they’re proof that you fought.", author: "John Elie" }, { text: "Sometimes all you need is one breath of belief.", author: "John Elie" }, { text: "The heart always rebuilds itself from the ruins.", author: "John Elie" }, { text: "Peace begins when you stop arguing with what is.", author: "John Elie" }, { text: "If it didn’t break you, it built you.", author: "John Elie" } ];

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

      <div className="flex justify-center items-center p-6 min-h-screen">
        
        <div className="text-center max-w-lg  shadow-lg rounded-2xl p-6 bg-white bg-opacity-30 backdrop-blur-md border border-white/30">
          <Link to="/">
                <button className=" p-2 text-xl font-bold m-4 flex start rounded">
                  <i class="fa-regular fa-house"></i></button></Link>

          <img
          src={johnalieimage}
            alt="John Elie"
            className="w-40 h-40 rounded-full mx-auto object-cover mb-4 border-4 border-emerald-400 shadow-md"
          />

          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Jaun Eliya
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
