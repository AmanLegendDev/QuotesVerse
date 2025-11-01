import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import faizimage from '../assets/faiz.jpeg'




const quotes = [
{ text: "Gulon mein rang bhare, baad-e-naubahar chale.", author: "Faiz Ahmed Faiz" },
{ text: "Mujhse pehli si mohabbat mere mehboob na maang.", author: "Faiz Ahmed Faiz" },
{ text: "Ranjish hi sahi, dil hi dukhaane ke liye aa.", author: "Faiz Ahmed Faiz" },
{ text: "Hum par tumhari chaah ka ilzaam hi sahi.", author: "Faiz Ahmed Faiz" },
{ text: "Dil na-umeed toh nahi, nakaam hi toh hai.", author: "Faiz Ahmed Faiz" },
{ text: "Aaye kuch abr kuch sharab aaye.", author: "Faiz Ahmed Faiz" },
{ text: "Aaj bazaar mein pa-bajaolan chalo.", author: "Faiz Ahmed Faiz" },
{ text: "Bol ke lab azaad hain tere.", author: "Faiz Ahmed Faiz" },
{ text: "Yeh daagh daagh ujala, yeh shab-gazida sehar.", author: "Faiz Ahmed Faiz" },
{ text: "Iss qadar pyaar se ai jaan-e-jahaan rakha hai.", author: "Faiz Ahmed Faiz" },
{ text: "Mere dil mere musafir, hua phir se hukm jaari.", author: "Faiz Ahmed Faiz" },
{ text: "Kabhi kabhi mere dil mein khayal aata hai.", author: "Faiz Ahmed Faiz" },
{ text: "Aur bhi dukh hain zamane mein muhabbat ke siwa.", author: "Faiz Ahmed Faiz" },
{ text: "Nisar main teri galiyon mein ai watan.", author: "Faiz Ahmed Faiz" },
{ text: "Tum aaye ho toh shehar mein bahar aayi hai.", author: "Faiz Ahmed Faiz" },
{ text: "Sab taa'ammul mita de, saaf kar de sheesha-e-dil.", author: "Faiz Ahmed Faiz" },
{ text: "Gham-e-duniya bhi gham-e-yaar mein shaamil karlo.", author: "Faiz Ahmed Faiz" },
{ text: "Hum ke thehre ajnabi, itni mulaqaton ke baad.", author: "Faiz Ahmed Faiz" },
{ text: "Mujhko to tere gham ka hi aasra mila.", author: "Faiz Ahmed Faiz" },
{ text: "Na ganwaao naav, samundar hai gehra.", author: "Faiz Ahmed Faiz" },
{ text: "Raat yun dil mein teri khoi hui yaad aayi.", author: "Faiz Ahmed Faiz" },
{ text: "Chalo phir se muskurayein, duniya ko hairan kar dein.", author: "Faiz Ahmed Faiz" },
{ text: "Mohabbat phir mohabbat hai, bhale hi ranj se bhari ho.", author: "Faiz Ahmed Faiz" },
{ text: "Meri tanhai ka hal bhi koi kya poochega.", author: "Faiz Ahmed Faiz" },
{ text: "Aise daagon ka kya karun jo dhul jaate hain.", author: "Faiz Ahmed Faiz" },
{ text: "Uski yaad aayi hai, saans rahi ho jaise.", author: "Faiz Ahmed Faiz" },
{ text: "Nind aayi na chain aaya, tere jaane ke baad.", author: "Faiz Ahmed Faiz" },
{ text: "Dard ko bhi gul karein hum, mohabbat ki tarah.", author: "Faiz Ahmed Faiz" },
{ text: "Dil mein ab yun tere bhoolne ki baat ki.", author: "Faiz Ahmed Faiz" },
{ text: "Shishe se jo tappish nikli, patthar ka jigar nikla.", author: "Faiz Ahmed Faiz" },
{ text: "Tum zindagi ki rooh ho, tumse hi roshan hum.", author: "Faiz Ahmed Faiz" },
{ text: "Har zakhm bhar gaya, magar nishaan reh gaya.", author: "Faiz Ahmed Faiz" },
{ text: "Na pooch ke kya haal hai mera, tere baghair.", author: "Faiz Ahmed Faiz" },
{ text: "Ek tarfa hi sahi, ishq to hua tha mujhe.", author: "Faiz Ahmed Faiz" },
{ text: "Na aaye ho na bulaaya hai, magar ho paas.", author: "Faiz Ahmed Faiz" },
{ text: "Jo baat tujh mein hai, woh kisi aur mein nahi.", author: "Faiz Ahmed Faiz" },
{ text: "Ae husn-e-raaqasa, dil kho le tujhpe kya ilzaam.", author: "Faiz Ahmed Faiz" },
{ text: "Tum bole toh shaam dhali, tum chup ho toh raat." , author: "Faiz Ahmed Faiz"},
{ text: "Suna hai log usko aankh bhar ke dekhte hain.", author: "Faiz Ahmed Faiz" },
{ text: "Ishq par zor nahi, hai yeh woh aatish Faiz.", author: "Faiz Ahmed Faiz" },
{ text: "Dard ko bhi daaman-e-dil mein sajaye rakhna.", author: "Faiz Ahmed Faiz" },
{ text: "Zindagi se badi saza hi nahi.", author: "Faiz Ahmed Faiz" },
{ text: "Jo tere na ho sake unhe khona kya.", author: "Faiz Ahmed Faiz" },
{ text: "Hum par tumhari chaah ka ilzaam hi sahi.", author: "Faiz Ahmed Faiz" },
{ text: "Dil gaya, yaad gayi, zindagi gayi, hum bhi gaye.", author: "Faiz Ahmed Faiz" },
{ text: "Raat yun dil mein teri khoi hui yaad aayi.", author: "Faiz Ahmed Faiz" },
{ text: "Tum aaye ho toh shehar mein bahar aayi hai.", author: "Faiz Ahmed Faiz" },
{ text: "Dil ki Mehfil mein tera hi noor hai." , author: "Faiz Ahmed Faiz"},
{ text: "Zakhm keh raha hai, sambhal sambhal ke chal." , author: "Faiz Ahmed Faiz"},
{ text: "Mere humnafas, mere humnawa." , author: "Faiz Ahmed Faiz"}
];






const Faiz = () => {
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
        src={faizimage}
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
        {Copied ? "Copied ✅" : <i class="fa-regular fa-copy text-xl font-bold text-black"></i>}
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

export default Faiz