import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import rahulimage from '../assets/rahul.jpeg'




const quotes = [
  { text: "Safar se bada koi ustad nahi, raaste hi insaan ko paripakv karte hain.", author: "Rahul-Inspired" },
  { text: "Jo ghar se nikla nahi, woh duniya ko sirf sune ke zariye jaanta raha.", author: "Rahul-Inspired" },
  { text: "Manzil se zyada, us tak pahunchne ka safar aapko badalta hai.", author: "Rahul-Inspired" },
  { text: "Gyaan kitab se milta hai, par samajh raahon se milti hai.", author: "Rahul-Inspired" },
  { text: "Har naye shehar me apna ek purana hissa chhoot jaata hai.", author: "Rahul-Inspired" },
  { text: "Sapne unke poore hote hain jo shehar nahi, duniya dekhte hain.", author: "Rahul-Inspired" },
  { text: "Zindagi ko samajhna hai to nikal padna seekho.", author: "Rahul-Inspired" },
  { text: "Jo raste humse dur bhagte the, wahi hume aage badhate gaye.", author: "Rahul-Inspired" },
  { text: "Har musafir apne andar ek naye insaan ko leke laut ta hai.", author: "Rahul-Inspired" },
  { text: "Duniya unki hai jo dekhne ka junoon rakhte hain.", author: "Rahul-Inspired" },
  { text: "Darr se bada koi bandhan nahi, use tod do to raaste khud mil jate hain.", author: "Rahul-Inspired" },
  { text: "Shehar badalne se zindagi nahi badalti, nazariya badalne se badalti hai.", author: "Rahul-Inspired" },
  { text: "Raaste bewafa nahi hote, hum himmat haar jaate hain.", author: "Rahul-Inspired" },
  { text: "Naye log, naye ehsaas — wahi asli daulat hai.", author: "Rahul-Inspired" },
  { text: "Jitna seekhte jao, duniya utni gehri lagti hai.", author: "Rahul-Inspired" },
  { text: "Manzil to bahut hain, himmat sirf ek hoti hai — shuru karne ki.", author: "Rahul-Inspired" },
  { text: "Har desh ek kitaab hai, aur har safar ek naye adhyay.", author: "Rahul-Inspired" },
  { text: "Musafir ka koi ghar nahi, par har jagah uske apne hote hain.", author: "Rahul-Inspired" },
  { text: "Duniya dekhna ek ibadat hai, kyunki prakriti hi mandir hai.", author: "Rahul-Inspired" },
  { text: "Jo waqt ko samajh gaya, woh zindagi se kabhi nahi haara.", author: "Rahul-Inspired" },
  { text: "Bikhre raaste hi mujhe jod kar gaye.", author: "Rahul-Inspired" },
  { text: "Bagpack me kapde hote hain, par dil me kahaniyan.", author: "Rahul-Inspired" },
  { text: "Har pal ek naya mod hai, bas hausla rakhna zaroori hai.", author: "Rahul-Inspired" },
  { text: "Safar khatam ho jata hai, par asar hamesha rehta hai.", author: "Rahul-Inspired" },
  { text: "Sannata bhi sikhata hai, bas dhyan se suno.", author: "Rahul-Inspired" },
  { text: "Zindagi se bhaago mat, usse samne se milo.", author: "Rahul-Inspired" },
  { text: "Insaan tab tak musafir hai, jab tak wo seekh raha hai.", author: "Rahul-Inspired" },
  { text: "Raste galti nahi karte, log galat mod chunte hain.", author: "Rahul-Inspired" },
  { text: "Duniya khoobsurat hai, bas nazar saaf honi chahiye.", author: "Rahul-Inspired" },
  { text: "Akele chalna mushkil hai, par zaroori bhi.", author: "Rahul-Inspired" },
  { text: "Sachhahi ki raah lambi hoti hai, par manzil pavitra hoti hai.", author: "Rahul-Inspired" },
  { text: "Pahancho kam, dekho zyada.", author: "Rahul-Inspired" },
  { text: "Musafir ka thikana palta rehta hai, irade nahi.", author: "Rahul-Inspired" },
  { text: "Khud ko kho do, tabhi duniya milti hai.", author: "Rahul-Inspired" },
  { text: "Kuch log raaste me milte hain, zindagi ban jate hain.", author: "Rahul-Inspired" },
  { text: "Ghar se nikalte hi zindagi ka asli rang dikhta hai.", author: "Rahul-Inspired" },
  { text: "Har jagah sanskriti ki ek kahani hoti hai.", author: "Rahul-Inspired" },
  { text: "Jo kal pe chhodte hain, wo waqt se haarte hain.", author: "Rahul-Inspired" },
  { text: "Safar me girna laazmi hai, par rukna nahi.", author: "Rahul-Inspired" },
  { text: "Musafir kabhi thakta nahi, wo sirf ruk kar observe karta hai.", author: "Rahul-Inspired" },
  { text: "Duniya badalne ki shuruaat khud ki soch se hoti hai.", author: "Rahul-Inspired" },
  { text: "Astitva safar se likha jaata hai, sukh-sadha nahi.", author: "Rahul-Inspired" },
  { text: "Jahan nayi bhasha ho, wahan naya dil milta hai.", author: "Rahul-Inspired" },
  { text: "Har raat ek sapna paida karti hai, har savera ek raasta.", author: "Rahul-Inspired" },
  { text: "Tum jitni duniya dekho ge, utna apne aap ko paoge.", author: "Rahul-Inspired" },
  { text: "Musafir ka asli ghar experience hota hai.", author: "Rahul-Inspired" },
  { text: "Sapno ki koi seema nahi, raaston ki bhi nahi.", author: "Rahul-Inspired" },
  { text: "Dil me junoon ho to duniya choti pad jaati hai.", author: "Rahul-Inspired" },
  { text: "Waqt ke saath badalna seekho, tabhi safar suhana hoga.", author: "Rahul-Inspired" }
]


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
        src={rahulimage}
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
        className="mt-4 text-black  px-5 py-2 rounded-lg font-bold"
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