import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import rahatindoriimage from '../assets/rahatindori.jpeg'





const quotes = [
{ text: "Hum bhi dhoop mein chalne wale the, lekin logon ne saaye bech diye.", author: "Rahat Indori" },
{ text: "Jo sach bolta hoon to jalte hain sab, shayad meri zubaan mein aag zyada hai.", author: "Rahat Indori" },
{ text: "Main gir ke uthna seekh gaya hoon, ab hawa bhi ruke toh mujhe fark nahi padta.", author: "Rahat Indori" },
{ text: "Jo log mere khilaaf the, aaj meri baat karte hain mehfils mein.", author: "Rahat Indori" },
{ text: "Teri mohabbat ne itna sikhaya, ab dil tootne ka dard bhi halka lagta hai.", author: "Rahat Indori" },
{ text: "Zindagi ne humara imtihan liya, aur hum muskura kar nikal gaye.", author: "Rahat Indori" },
{ text: "Main khamosh hu toh samajh lena, dard ne phir awaaz kho li hai.", author: "Rahat Indori" },
{ text: "Humne naam ki keemat dekhi, log paison se zyada izzat gira dete hain.", author: "Rahat Indori" },
{ text: "Jo haq ki baat karta hoon, dushmani muft mil jaati hai.", author: "Rahat Indori" },
{ text: "Mohabbat toh dil se hoti hai, hisaabon se hoti toh sab aashiq ameer hote.", author: "Rahat Indori" },
{ text: "Mitti me mil kar bhi roz khilta hoon, phool hoon bad-dua nahi.", author: "Rahat Indori" },
{ text: "Tumhari fikr ka wazan itna tha, saansein halka kar di maine.", author: "Rahat Indori" },
{ text: "Aaj bhi log mere hausle se darte hain, kal tak jo mujhe giraya karte the.", author: "Rahat Indori" },
{ text: "Jo sach bolta hoon toh chubta hai, jhooth bolta toh mehfil ka hero hota.", author: "Rahat Indori" },
{ text: "Humne jazbaat bechkar jeena nahi seekha, isliye bechain hain thode.", author: "Rahat Indori" },
{ text: "Kabhi haso toh duniya sang has jaati hai, kabhi ro lo toh akela chhod deti hai.", author: "Rahat Indori" },
{ text: "Ghamon ko sajake rakhta hoon, warna zakhm dikhane ka shauk nahi mujhe.", author: "Rahat Indori" },
{ text: "Ajnabi ban jao par jhooth mat bolo, rishton ki maut sach se hoti hai.", author: "Rahat Indori" },
{ text: "Aankhon mein sapne the, jo waqt ne cheen liye.", author: "Rahat Indori" },
{ text: "Logo ki baaton se girna pada, warna hum toh pahadon se bhi na gire.", author: "Rahat Indori" },
{ text: "Dil ke tukde kar jao, magar jhooti tasalli mat de jaana.", author: "Rahat Indori" },
{ text: "Muhabbat me afsos tab hota hai, jab yaqeen galat sabit ho jaaye.", author: "Rahat Indori" },
{ text: "Aansuon ko aankhon mein rehna sikha diya, warna hum roz doob jaate.", author: "Rahat Indori" },
{ text: "Mere zakhmon ko mat gino, meri khamoshi ka wazan samjho.", author: "Rahat Indori" },
{ text: "Humne apno se hi zakhm khaye, warna duniya kya bigaad leti.", author: "Rahat Indori" },
{ text: "Shahenshah ho ya faqeer, waqt sabka imtihaan leta hai.", author: "Rahat Indori" },
{ text: "Ghar ke andhar bhi jung hoti hai, bas awaaz kam hoti hai.", author: "Rahat Indori" },
{ text: "Aaj bhi hum mohabbat karte hain, farq bas itna hai keh chup karte hain.", author: "Rahat Indori" },
{ text: "Bheed ke saath chalna aasan tha, magar hum apne raaste par chalte rahe.", author: "Rahat Indori" },
{ text: "Jo haare nahi, unhe koi samajh nahi paata.", author: "Rahat Indori" },
{ text: "Khud ko utna mat girao, ki zameen bhi sharmaye.", author: "Rahat Indori" },
{ text: "Main aag hoon, hawa ka mohtaaj nahi.", author: "Rahat Indori" },
{ text: "Rishta nibhana mushkil nahi, bas log dil badal lete hain.", author: "Rahat Indori" },
{ text: "Chand raaton mein bhi andhera tha, hum apni roshni dhoondte rahe.", author: "Rahat Indori" },
{ text: "Insaan tab toot ta hai, jab apne hi paraye ho jaate hain.", author: "Rahat Indori" },
{ text: "Dost bhi bazaar ki cheez ho gaye, kaam pade toh milte hain.", author: "Rahat Indori" },
{ text: "Aaj bhi log darr kar baat karte hain, kal tak jo mujhpar hanste the.", author: "Rahat Indori" },
{ text: "Chalna toh padega akela, raaste saathi nahi milwate.", author: "Rahat Indori" },
{ text: "Khuda ne har dard me sabak rakha, bus log rona hi seekhte hain.", author: "Rahat Indori" },
{ text: "Humne dushmani bhi izzat se ki, logon ne dosti ka bharosa tod diya.", author: "Rahat Indori" },
{ text: "Jo toot kar bikhar jaaye, wo phir badal ban kar barasta hai.", author: "Rahat Indori" },
{ text: "Zindagi ne mara nahi, bus samjha diya kaun apna hai.", author: "Rahat Indori" },
{ text: "Hawaon ko badalne do, hum apni raah khud banayenge.", author: "Rahat Indori" },
{ text: "Mohabbat zindagi se seekhi thi, ab zindagi se hi dushmani hai.", author: "Rahat Indori" },
{ text: "Izzat ki baat aayi toh hum khud ko mita denge.", author: "Rahat Indori" },
{ text: "Aankhon ke aansu zyada bolte hain, lafzon ka kaam kam padta hai.", author: "Rahat Indori" },
{ text: "Waqt ki hawa ne sab kuch udaa diya, sirf jazbaat reh gaye.", author: "Rahat Indori" },
{ text: "Muskurana seekha hai humne, warna dard ki kitaab puraani hai.", author: "Rahat Indori" },
{ text: "Log toh patthar hai, hum apna khoon jala kar roshni karte hain.", author: "Rahat Indori" },
{ text: "Zameen chhoti pad gayi, logon ke ahankar ke saamne.", author: "Rahat Indori" }
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
        src={rahatindoriimage}
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

export default Rahul