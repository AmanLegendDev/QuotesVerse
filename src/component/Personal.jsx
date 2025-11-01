import React, { useContext, useEffect } from 'react'
import { db } from './Firebase'
import { collection, onSnapshot } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import { mycontext } from '../App'

const Personal = () => {
  const { pquote, setpquote } = useContext(mycontext)

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "personalQuotes"), (snapshot) => {
      const quotedata = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setpquote(quotedata)
    })
    
    return () => unsub()
  }, [])

  return (
    <>
      {pquote.length === 0 ? (
        <>
        
        <h1 className='text-center pt-24 text-2xl font-bold'>
          ✅ No personal quotes yet — add yours and inspire the world!
        </h1>
        <Link to="/"><button className=" p-2 text-xl font-bold m-4 rounded">
                  <i class="fa-regular fa-house text-3xl"></i></button></Link>
      </>
      ) : (
        <>
          
          <nav className='flex justify-between items-center px-10 py-4 sticky top-0 z-50 bg-black text-white shadow-md'>
            <div>
              <h1 className="text-2xl font-bold">Public Quotes</h1>
            </div>
            <div>
            <h1><i className="fa-solid fa-bars text-2xl"></i></h1>
            
            </div>
          </nav>
        <div className='min-h-screen flex  flex-col justify-between mx-6 p-6 pb-6'>
          {pquote.map((dels, index) => (
            
          <div key={index}
          className='flex justify-center'>
          
            <div
              key={index}
              className='text-center  max-w-lg shadow-lg rounded-2xl p-6 bg-white bg-opacity-30 backdrop-blur-md border border-white/30 mb-5'
            >

                <Link to="/"><button className=" p-2 text-xl font-bold m-4 flex start rounded ">
                  <i class="fa-regular fa-house"></i></button></Link>


              <h1 className="text-2xl font-bold text-gray-800 mb-2">
              ✍️ Written by “{dels.Author}”
              </h1>

              <p className="text-xl text-gray-700 italic mb-6">
                “{dels.Quotes}”
              </p>
           <p className="text-sm text-gray-600 mt-2 flex items-center justify-center gap-2">
  <span className="font-bold text-gray-800">📅 Date:</span>
  <span className="italic">{new Date(dels.Date).toLocaleDateString()}</span>
</p>

            </div>
            </div>
          ))}

          
        </div>
        </>
      )}
    </>
  )
}

export default Personal
