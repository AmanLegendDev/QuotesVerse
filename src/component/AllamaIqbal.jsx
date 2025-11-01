import React, { useState } from "react";
import { Link } from "react-router-dom";
import alamiqbalimage from '../assets/alamiqbal.jpeg'

const quotes = [
  { text: "Khudi ko kar buland itna ke har taqdeer se pehle, Khuda bande se khud pooche bata teri raza kya hai.", author: "Allama Iqbal" },
  { text: "Sitaron se aage jahan aur bhi hain, Abhi ishq ke imtihan aur bhi hain.", author: "Allama Iqbal" },
  { text: "Tu shaheen hai, parwaz hai kaam tera, Tere saamne aasman aur bhi hain.", author: "Allama Iqbal" },
  { text: "Apne man mein doob kar pa ja surag-e-zindagi, Tu agar mera nahi banta na ban, apna to ban.", author: "Allama Iqbal" },
  { text: "Zindagi hai sadaf, qatra-e-neesaan hai khudi.", author: "Allama Iqbal" },
  { text: "Nahin hai na-umeed Iqbal apni kisht-e-veeran se, Zara nam ho to ye mitti bari zarkhez hai saqi.", author: "Allama Iqbal" },
  { text: "Wujood-e-zindagi ka hai yehi raaz-e-nihan, Keh tuz-e-khudi se deta hai zindagi ko maza.", author: "Allama Iqbal" },
  { text: "Khudi ka sirr-e-nihan la ilaha illallah.", author: "Allama Iqbal" },
  { text: "Jawanon ko meri aah-e-sahar de, Phir unko shahin o par-e-tair de.", author: "Allama Iqbal" },
  { text: "Tundi-e-baad-e-mukhalif se na ghabra ae uqab, Ye to chalti hai tujhe ooncha udaan dene ke liye.", author: "Allama Iqbal" },
  { text: "Mita de apni hasti ko agar kuch martaba chahe, Ke dana khak mein mil kar gul-o-gulzar hota hai.", author: "Allama Iqbal" },
  { text: "Hai wohi jahan tera jo tu kare paida.", author: "Allama Iqbal" },
  { text: "Na tu zameen ke liye hai na aasman ke liye, Jahan hai tere liye, tu nahi jahan ke liye.", author: "Allama Iqbal" },
  { text: "Ishq se mujhko nikammi zindagi pasand nahi.", author: "Allama Iqbal" },
  { text: "Har shakh pe ullu baitha hai, anjaam-e-gulistan kya hoga.", author: "Allama Iqbal" },
  { text: "Zara num ho to ye mitti bari zarkhez hai saqi.", author: "Allama Iqbal" },
  { text: "Aapne mann mein doob kar pa ja surag-e-zindagi.", author: "Allama Iqbal" },
  { text: "Jo badal jaaye woh duniya hai, jo na badle woh Imaan hai.", author: "Allama Iqbal" },
  { text: "Maqam-e-parwaz tujh mein hai, par nahi hai shaheen.", author: "Allama Iqbal" },
  { text: "Kahin pe roshni hai, kahin pe andhera.", author: "Allama Iqbal" },
  { text: "Har ek manzil se aage manzil hai, zindagi ek safar hai, rukna maut hai.", author: "Allama Iqbal" },
  { text: "Jise faqiri ka maza chakh liya, use shahi ki zarurat nahi.", author: "Allama Iqbal" },
  { text: "Sitaron pe jo dalte hain kamand, unhe manzil nahi milti asaani se.", author: "Allama Iqbal" },
  { text: "Woh jo raste mein bhi saathi na bane, unse manzil kya maangni.", author: "Allama Iqbal" },
  { text: "Khudi rahe na khuda rahe, ye nahi mumkin.", author: "Allama Iqbal" },
  { text: "Har nayi subah naya paigham laati hai.", author: "Allama Iqbal" },
  { text: "Jise fikr-e-khud nahi, use fikr-e-jahan kya.", author: "Allama Iqbal" },
  { text: "Uth ja ab tu bhi, waqt ka talabgaar hai tu.", author: "Allama Iqbal" },
  { text: "Khudi se jo mila hai, wo kisi aur se nahi milta.", author: "Allama Iqbal" },
  { text: "Zindagi ek jidd-o-jahad hai, rukna maut hai.", author: "Allama Iqbal" },
  { text: "Kadam utha, raasta khud ban jaayega.", author: "Allama Iqbal" },
  { text: "Woh log zinda hain jo qadam badhate rehte hain.", author: "Allama Iqbal" },
  { text: "Musibat mein jo muskura de, wahi haqiqi shaheen hai.", author: "Allama Iqbal" },
  { text: "Khudi woh aatish hai jo jala de har bandhan.", author: "Allama Iqbal" },
  { text: "Jo khudi se waqif ho gaya, woh khuda se mil gaya.", author: "Allama Iqbal" },
  { text: "Fitrati insaan kabhi haar nahi maanta.", author: "Allama Iqbal" },
  { text: "Tere jazbaat teri taqdeer likhte hain.", author: "Allama Iqbal" },
  { text: "Umeed wahi hai jo tufan mein bhi chiragh jalaye.", author: "Allama Iqbal" },
  { text: "Apni khudi ko pehchaan, yehi teri pehchaan hai.", author: "Allama Iqbal" },
  { text: "Khudi wo samundar hai jiska koi kinaara nahi.", author: "Allama Iqbal" },
  { text: "Tu shaheen hai, bas udaan bharte reh.", author: "Allama Iqbal" },
  { text: "Jisne khudi pe yaqeen kar liya, usne taqdeer badal di.", author: "Allama Iqbal" },
  { text: "Jo khauf se azaad hai, wahi zinda hai.", author: "Allama Iqbal" },
  { text: "Tu apne andar ek aalam chhupaye baitha hai.", author: "Allama Iqbal" },
  { text: "Apni fitrat se tu kuch aur hi ban sakta hai.", author: "Allama Iqbal" },
  { text: "Khuda tere irade mazboot kare, yehi dua hai meri.", author: "Allama Iqbal" },
  { text: "Teri parwaz abhi baqi hai, tere imtihan aur bhi hain.", author: "Allama Iqbal" },
  { text: "Jise apni khudi pe yaqeen nahi, wo kuch nahi.", author: "Allama Iqbal" },
  { text: "Zindagi woh nahi jo bas guzar jaaye, zindagi woh hai jo kuch badal jaaye.", author: "Allama Iqbal" },
  { text: "Jo waqt ko pehchaan gaya, usne zindagi jeet li.", author: "Allama Iqbal" }
];

const Quotes = () => {
  const [index, setIndex] = useState(0);
  const [Copied, setCopied] = useState(false)


  const shareQuote =  async() =>{
const quoteText = `"${quotes[index].text}" — ${quotes[index].author}`;
if(navigator.share){
  try{
    await navigator.share({
      title: "Motivational Quote",
        text: quoteText,
    });
  }catch(error){
    console.log("Share cancelled")
  }
}else{
  alert("Sharing not supported on this device ❌");
}
  }

  const nextQuote = () => {
    if (index < quotes.length - 1) setIndex(index + 1);
  };

  const prevQuote = () => {
    if (index > 0) setIndex(index - 1);
  };

  const copyQuote = () => {
    const quoteText = `"${quotes[index].text}" — ${quotes[index].author}`;
    navigator.clipboard.writeText(quoteText)
    setCopied(true)
    setTimeout(() => setCopied(false), 1500);
  }
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
          src={alamiqbalimage}
            alt="John Elie"
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
