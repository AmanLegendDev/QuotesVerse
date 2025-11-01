import React, { useState, useEffect, useContext, } from "react";
import { Link, useNavigate } from "react-router-dom";
import Quotes from "./Johnelie";
import { db } from "./Firebase";
import { addDoc, collection } from "firebase/firestore";
import { mycontext } from "../App";


import johnalieimage from '../assets/johnelie.jpeg'
import mirjagalibimage from '../assets/mirjagalib.jpeg'
import alamiqbalimage from '../assets/alamiqbal.jpeg'
import rahatindoriimage from '../assets/rahatindori.jpeg'
import rahulimage from '../assets/rahul.jpeg'
import rumiimage from '../assets/rumi.jpeg'
import bullehimage from '../assets/bulleh.jpeg'
import amirimage from '../assets/amir.jpeg'
import faizimage from '../assets/faiz.jpeg'
import publicimage from '../assets/public.png'

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";

const Random = () => {



  const navigate = useNavigate();
  const { pquote, setpquote } = useContext(mycontext);
  const [quote, setQuote] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [personalqouetas, setpersonalqouetas] = useState("");
  const [author, setauthor] = useState("");

  const savedata = async () => {
    if (!personalqouetas || !author) return alert("please fill all fields");
    try {
      const currentDate = new Date().toLocaleDateString();
      await addDoc(collection(db, "personalQuotes"), {
        Quotes: personalqouetas,
        Author: author,
        Date: currentDate,
      });
      setpersonalqouetas("");
      setauthor("");
      console.log("Data saved ✅");
    } catch (err) {
      console.log("Error ❌", err);
    }
  };

  const fetchQuote = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://api.adviceslip.com/advice?timestamp=" + new Date().getTime());
      const data = await res.json();
      setQuote(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchQuote() }, []);

  const [showList, setShowList] = useState(false);

  const shayars = [
    { Name: "Rahat", path: "/rahat" },
    { Name: "John Elia", path: "/john" },
    { Name: "Mirza Ghalib", path: "/mirja" },
    { Name: "Allama Iqbal", path: "/allma" },
    { Name: "Faiz Ahmed Faiz", path: "/faiz" },
    { Name: "Rahul", path: "/rahul" },
    { Name: "Rumi", path: "/rumi" },
    { Name: "BullehShah", path: "/shah" },
    { Name: "Amir", path: "/amir" },
  ];






  if (loading) return <p className="text-center pt-10 font-bold text-2xl">Loading...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">Error: {error}</p>;

  return (
    <div>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-10 py-4 sticky top-0 z-50 bg-black text-white shadow-md">
        <h1 className="text-2xl font-bold">Quotes App</h1>
        <button onClick={() => setShowList(!showList)}>
          <i className="fa-solid fa-bars text-2xl"></i>
        </button>
      </nav>

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-black text-white shadow-lg transform transition-transform duration-300 z-40 flex flex-col items-start p-6 gap-4 ${showList ? "translate-x-0" : "translate-x-full"}`}>
        <button className="self-end mb-4 text-2xl" onClick={() => setShowList(false)}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        {shayars.map((item, i) => (
          <Link key={i} to={item.path} onClick={() => setShowList(false)} className="hover:text-gray-300 text-lg transition">
            {item.Name}
          </Link>
        ))}
        <p className="text-center text-sm text-gray-500 mt-6">Made with ❤️ by Aman</p>
      </div>

      {/* Hero quote */}
      <div className="p-6 text-center">
  <h1 className="text-2xl font-bold mb-4">Random Quote</h1>
  <p className="text-xl italic text-gray-700 mb-2">
    “{quote?.slip?.advice ?? "No quote right now — try Next"}”
  </p>
  <p className="text-gray-500">— Random Author</p>
  <button className="mt-2 bg-gray-600 p-2 font-bold text-xl text-white rounded" onClick={fetchQuote}>Next</button>
</div>

      {/* Shayars wrapper */}
      <div className="shayars">
        {/* row 1 */}
        <div className="grid grid-cols-3 gap-y-10 gap-x-16 mt-6">
          <Link to="/john" className="flex flex-col items-center space-y-2">
            <img src={johnalieimage} className="w-24 h-24 rounded-full" />
            <h1 className="text-xl font-bold">Jaun Eliya</h1>
          </Link>

          <Link to="/mirja" className="flex flex-col items-center space-y-2">
            <img src={mirjagalibimage} className="w-24 h-24 rounded-full" />
            <h1 className="text-xl font-bold">Mirza Ghalib</h1>
          </Link>

          <Link to="/allma" className="flex flex-col items-center space-y-2">
            <img src={alamiqbalimage} className="w-24 h-24 rounded-full" />
            <h1 className="text-xl font-bold">Allama Iqbal</h1>
          </Link>
        </div>

        {/* row 2 */}
        <div className="grid grid-cols-3 gap-y-10 gap-x-4 mt-6">
          <Link to="/rahat" className="flex flex-col items-center space-y-2">
            <img src={rahatindoriimage} className="w-24 h-24 rounded-full" />
            <h1 className="text-xl font-bold">Rahat Indori</h1>
          </Link>

          <Link to="/rahul" className="flex flex-col items-center space-y-2">
            <img src={rahulimage} className="w-24 h-24 rounded-full" />
            <h1 className="text-xl font-bold">Rahul Sankrityayan</h1>
          </Link>

          <Link to="/rumi" className="flex flex-col items-center space-y-2">
            <img src={rumiimage} className="w-24 h-24 rounded-full" />
            <h1 className="text-xl font-bold">Rumi</h1>
          </Link>
        </div>

        {/* row 3 */}
        <div className="grid grid-cols-3 gap-y-10 gap-x-16 mt-6">
          <Link to="/shah" className="flex flex-col items-center space-y-2">
            <img src={bullehimage} className="w-24 h-24 rounded-full" />
            <h1 className="text-xl font-bold">Bulleh Shah</h1>
          </Link>

          <Link to="/amir" className="flex flex-col items-center space-y-2">
            <img src={amirimage} className="w-24 h-24 rounded-full" />
            <h1 className="text-xl font-bold">Amir Khusro</h1>
          </Link>

          <Link to="/faiz" className="flex flex-col items-center space-y-2">
            <img src={faizimage} className="w-24 h-24 rounded-full" />
            <h1 className="text-xl font-bold">Faiz Ahmed</h1>
          </Link>
        </div>
      </div>

      {/* Public Quotes Button */}
      <div>
        <Link to="/personal" className="flex flex-col items-center space-y-2 mt-10 ml-10">
          <img src={publicimage} className="w-24 h-24 rounded-full" />
          <h1 className="text-xl font-bold">Public Quotes</h1>
        </Link>
      </div>

      {/* Add Quote */}
      <div className="min-h-screen flex items-center justify-center px-4 add-quote-section">
        <div className="bg-gray-800/80 p-8 rounded-2xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center text-yellow-400">Add Your Personal Quote ✨</h2>

          <div className="flex flex-col gap-5">
            <input value={personalqouetas} onChange={(e) => setpersonalqouetas(e.target.value)} className="p-3 rounded-xl bg-gray-700 text-white" placeholder="Enter your quote..." />
            <input value={author} onChange={(e) => setauthor(e.target.value)} className="p-3 rounded-xl bg-gray-700 text-white" placeholder="Author name..." />

            <button onClick={savedata} className="mt-4 bg-yellow-500 py-2 rounded-xl font-semibold text-black">Save Quote</button>
            <button onClick={() => navigate("/personal")} className="mt-4 bg-yellow-500 py-2 rounded-xl font-semibold text-black">See All Quotes</button>
          </div>
        </div>
      </div>

      <p className="text-center text-2xl text-gray-800 mt-2 pb-4">'Made with ❤️ by Aman' : )</p>
    </div>
  );
};

export default Random;
