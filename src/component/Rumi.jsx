import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import rumiimage from '../assets/rumi.jpeg'




const quotes = [
  { text: "What you seek is seeking you.", author: "Rumi" },
  { text: "The wound is the place where the light enters you.", author: "Rumi" },
  { text: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.", author: "Rumi" },
  { text: "If you are irritated by every rub, how will you be polished?", author: "Rumi" },
  { text: "Raise your words, not voice. It is rain that grows flowers, not thunder.", author: "Rumi" },
  { text: "Don't grieve. Anything you lose comes round in another form.", author: "Rumi" },
  { text: "Let silence be the art you practice.", author: "Rumi" },
  { text: "Wherever you stand, be the soul of that place.", author: "Rumi" },
  { text: "When you let go of who you are, you become who you might be.", author: "Rumi" },
  { text: "Wear gratitude like a cloak and it will feed every corner of your life.", author: "Rumi" },
  { text: "When the soul lies down in that grass, the world is too full to talk about.", author: "Rumi" },
  { text: "Ignore those that make you fearful and sad.", author: "Rumi" },
  { text: "Why are you so busy with this or that or good or bad? Pay attention to how things blend.", author: "Rumi" },
  { text: "Life is a balance between holding on and letting go.", author: "Rumi" },
  { text: "Be melting snow. Wash yourself of yourself.", author: "Rumi" },
  { text: "The quieter you become, the more you are able to hear.", author: "Rumi" },
  { text: "Where there is ruin, there is hope for a treasure.", author: "Rumi" },
  { text: "Let yourself be silently drawn by the strange pull of what you really love.", author: "Rumi" },
  { text: "Close your eyes. Fall in love. Stay there.", author: "Rumi" },
  { text: "Set your life on fire. Seek those who fan your flames.", author: "Rumi" },
  { text: "Be a lamp, or a lifeboat, or a ladder.", author: "Rumi" },
  { text: "The soul has been given its own ears to hear things the mind does not understand.", author: "Rumi" },
  { text: "Respond to every call that excites your spirit.", author: "Rumi" },
  { text: "Stop acting so small. You are the universe in ecstatic motion.", author: "Rumi" },
  { text: "What hurts you, blesses you.", author: "Rumi" },
  { text: "When you do things from your soul, you feel a river moving in you.", author: "Rumi" },
  { text: "Silence gives answers.", author: "Rumi" },
  { text: "Don’t be satisfied with stories. Unfold your own myth.", author: "Rumi" },
  { text: "These pains you feel are messengers. Listen to them.", author: "Rumi" },
  { text: "Let the beauty we love be what we do.", author: "Rumi" },
  { text: "We carry inside us the wonders we seek outside us.", author: "Rumi" },
  { text: "Where there is love, there is no fear.", author: "Rumi" },
  { text: "Love is the bridge between you and everything.", author: "Rumi" },
  { text: "The garden of the world has no limits except in your mind.", author: "Rumi" },
  { text: "To love is human. To feel pain is human. Yet to still love despite the pain is pure angel.", author: "Rumi" },
  { text: "If the light is in your heart, you will find your way home.", author: "Rumi" },
  { text: "Sell your cleverness and buy bewilderment.", author: "Rumi" },
  { text: "Your heart knows the way. Run in that direction.", author: "Rumi" },
  { text: "When the soul is ready, its mate will appear.", author: "Rumi" },
  { text: "Let your heart guide you. It whispers, so listen closely.", author: "Rumi" },
  { text: "To praise the sun is to praise your own eyes.", author: "Rumi" },
  { text: "When you feel a peaceful joy, you're near the truth.", author: "Rumi" },
  { text: "As you start to walk on the way, the way appears.", author: "Rumi" },
  { text: "Be empty of worrying. Think of who created thought.", author: "Rumi" },
  { text: "Be drunk with love, for love is all that exists.", author: "Rumi" },
  { text: "Inside you there’s an artist you don’t know.", author: "Rumi" },
  { text: "Be patient where you sit in the dark. The dawn is coming.", author: "Rumi" },
  { text: "Laugh as much as you breathe, love as long as you live.", author: "Rumi" },
  { text: "Every moment is a new chance to fly.", author: "Rumi" },
  { text: "Shine like the whole universe is yours.", author: "Rumi" }
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

            
    <div className='flex justify-center items-center p-6 min-h-screen '>
      <div className='text-center max-w-lg  shadow-lg rounded-2xl p-6 bg-white bg-opacity-30 backdrop-blur-md border border-white/30'>
        <Link to="/">
        <button className=" p-2 text-xl font-bold m-4 flex start rounded">
                  <i class="fa-regular fa-house"></i></button>
        </Link>
        <img
        src={rumiimage}
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