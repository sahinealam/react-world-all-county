
import { Suspense } from 'react'
import './App.css'
import Countris from './Components/Countrys/Countris'
const countrisPromise=fetch('https://openapi.programming-hero.com/api/all')
.then((res)=>res.json())
function App() {
  

  return (
    <>
     <Suspense fallback={<p>All Countis API Loading ...</p>}>
       <Countris countrisPromise={countrisPromise}></Countris>
     </Suspense>
    </>
  )
}

export default App
