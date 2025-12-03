
import './App.css'

function App() {
    
  const foodFech = fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
  .then(res=> res.json())
  .then(data => console.log(data))

  return (
    <>
      
    </>
  )
}

export default App
