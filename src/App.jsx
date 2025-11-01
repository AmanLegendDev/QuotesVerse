  import React, { useState } from 'react'
  import Random from './component/Random'
  import Johnelie from './component/Johnelie'
  import Mirjagalib from './component/Mirjagalib'
  import Allamaiqbal from './component/AllamaIqbal'
  import { BrowserRouter, Route, Routes } from 'react-router-dom'
  import Rahul from './component/Rahul'
  import Rahatindori from './component/Rahatindori'
  import Rumi from './component/Rumi'
  import Bullehshah from './component/Bullehshah'
  import Amir from './component/Amir'
  import Faiz from './component/Faiz'
  import Personal from './component/Personal'
  import { createContext } from 'react'

  export const mycontext = createContext()

  const App = () => {

    const [pquote, setpquote] = useState([])
    return (
    <mycontext.Provider value={{pquote,setpquote}}>
    <>
      <div className="min-h-screen bg-gradient-to-br from-[#4e54c8] via-[#8f94fb] to-[#a6c0fe]">
        {/* Baaki poora content */}
        <BrowserRouter>
    <Routes>
      <Route path="/" element={<Random/>}/>
      <Route path="/john" element={<Johnelie/>}/>
      <Route path="/mirja" element={<Mirjagalib/>}/>
      <Route path="/allma" element={<Allamaiqbal/>}/>
      <Route path="/rahul" element={<Rahul/>}/>
      <Route path="/rahat" element={<Rahatindori/>}/>
      <Route path="/rumi" element={<Rumi/>}/>
      <Route path="/shah" element={<Bullehshah/>}/>
      <Route path="/amir" element={<Amir/>}/>
      <Route path="/faiz" element={<Faiz/>}/>
      <Route path="/personal" element={<Personal/>}/>
    </Routes>
    </BrowserRouter>
      </div>
    
    </>
    </mycontext.Provider>
    )
  }

  export default App