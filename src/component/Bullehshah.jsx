import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import bullehimage from '../assets/bulleh.jpeg'




const quotes = [
  { text: "Bulleya! Ki jana main kaun.", author: "Bulleh Shah" },
  { text: "Na mein momin vich maseeti, na mein vich kufar dian reeti.", author: "Bulleh Shah" },
  { text: "Duniya kehdi yaar banayi, dard na mukda duniya dhayi.", author: "Bulleh Shah" },
  { text: "Ishq de vich jehre doob gaye, ohna nu darya ki puchhna.", author: "Bulleh Shah" },
  { text: "Ranjha Ranjha kardi ni mein aape Ranjha hoi.", author: "Bulleh Shah" },
  { text: "Mann laago yaar fakiri mein, jithe naam Allah da aave.", author: "Bulleh Shah" },
  { text: "Padh padh ilm hazaar kitaab, kade apne aap nu padhya ni.", author: "Bulleh Shah" },
  { text: "Masjid dhar deh mandir tod, todeh jo kuch hai todan da. Par dil na kisay da todin.", author: "Bulleh Shah" },
  { text: "Dil darya, samundron doonghe, kaun dileyan diyan janey.", author: "Bulleh Shah" },
  { text: "Na rab mileya, na raste mile, duniya de piche dudd vich challe.", author: "Bulleh Shah" },
  { text: "Ishq na puchhe zaat kaun si, na pooche ghar baar da.", author: "Bulleh Shah" },
  { text: "Nafs nu maar ke taan rab mileya, nahi taan duniya bhar mile ayi.", author: "Bulleh Shah" },
  { text: "Bulleya rabb diyan gallan, rabb hee jane.", author: "Bulleh Shah" },
  { text: "Pagal hoya te ki hoya, duniya da ki bigaadeya.", author: "Bulleh Shah" },
  { text: "Dil jis te aave, duniya bhull jaave.", author: "Bulleh Shah" },
  { text: "Ishq vich jehre pakkay ho gaye, fakri ujgar hoye.", author: "Bulleh Shah" },
  { text: "Jithe ishq lade bandeya, othe duniya hove rusvai.", author: "Bulleh Shah" },
  { text: "Ishq da maarag ooncha, sir dena pave jehna jaave.", author: "Bulleh Shah" },
  { text: "Rabb na millya mandir masit vich, dil vich vekh rab basda.", author: "Bulleh Shah" },
  { text: "Jindo apna aap vee khona, othe rab nazdiq mileya.", author: "Bulleh Shah" },
  { text: "Asi murshad de darwaje te, sir rakh ke khadey hoye.", author: "Bulleh Shah" },
  { text: "Na mein deendar na mein bedaar, mein tan aashiq bazaar da.", author: "Bulleh Shah" },
  { text: "Bhul gaye saare darshan, jadon ishq aya dil vich.", author: "Bulleh Shah" },
  { text: "Je rab nai labhna sittan vich, taan labh le dil de ghar.", author: "Bulleh Shah" },
  { text: "Aashiq bina rab nai milda, eh gal yaad rakhin bandeya.", author: "Bulleh Shah" },
  { text: "Uchiyan gallan uchay rog, ishq da rog neevan laaye.", author: "Bulleh Shah" },
  { text: "Duniya rang na chadeya, ishq rang chadeya yaara.", author: "Bulleh Shah" },
  { text: "Lok kahe Bulleh Shah pagal, par pagal dekh rab da raaz.", author: "Bulleh Shah" },
  { text: "Ishq vich jehre doob gaye, ohna da kinara na labhna.", author: "Bulleh Shah" },
  { text: "Apne andar vekh le bandeya, rab tere naal hi rehnda.", author: "Bulleh Shah" },
  { text: "Sach di raah vich dard bohat, par anjam suhana honda.", author: "Bulleh Shah" },
  { text: "Tere bin asi kise na maaneya, rab da na ho ke ki honda.", author: "Bulleh Shah" },
  { text: "Mainu ishq ne maar suteya, duniya da darr bhi gaya.", author: "Bulleh Shah" },
  { text: "Apna aap jehre shanakht ni karde, oh rab nu ki pehchanan.", author: "Bulleh Shah" },
  { text: "Kise di rooh nu dukha ke, rab nahi milda yaaro.", author: "Bulleh Shah" },
  { text: "Kujh rab diyan gallan, dil vich hi samajh aayan.", author: "Bulleh Shah" },
  { text: "Dil da safar mushkil sahi, par raah rab tak jandi hai.", author: "Bulleh Shah" },
  { text: "Zikr rasool da jithe hove, othe barkat barse yaara.", author: "Bulleh Shah" },
  { text: "Gal karde duniya de, asi naal ishq kita.", author: "Bulleh Shah" },
  { text: "Jis nu ishq da lagya zakhm, ohi rab de kol gaya.", author: "Bulleh Shah" },
  { text: "Mitti hoya apna aap, te rab nazar aaya.", author: "Bulleh Shah" },
  { text: "Sachiyan gallan dardiyan hundiyan, jhoothan nazuk hundiyan.", author: "Bulleh Shah" },
  { text: "Duniya te rabb vich farq eh, rabb na chadey bandeya.", author: "Bulleh Shah" },
  { text: "Bandeya tu bandegi kar, rab khud aayega.", author: "Bulleh Shah" },
  { text: "Je ishq nahi, taan zindagi ki?", author: "Bulleh Shah" },
  { text: "Jis nu ishq sikhaya, duniya ne ohnu badnami ditti.", author: "Bulleh Shah" },
  { text: "Bulleh Shah kehnda fakiri changi, jithe dil nu sukoon mile.", author: "Bulleh Shah" },
  { text: "Saadi khwahish rab da didar, duniya da ki lena si.", author: "Bulleh Shah" },
  { text: "Ishq saza vi, ishq dava vi.", author: "Bulleh Shah" }
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
        src={bullehimage}
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