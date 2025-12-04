
import { Suspense } from 'react'
import './App.css'
import Users from './ users/Users'

function App() {

  const user = fetch("https://randomuser.me/api/?results=20")
  .then(res=> res.json())
  return (
    <>   
       <Suspense fallback={<h2>User are loading...</h2>}>
          <Users user={user}></Users>
       </Suspense>
    </>
  )
}

export default App
