import { Suspense } from "react";
import "./App.css";
import Countrys from "./component/Countrys";

const allCountrysFech = fetch("https://openapi.programming-hero.com/api/all")
.then(res => res.json());
function App() {
  return <>
   <Suspense fallback={<p>All data is loading...</p>}>
     <Countrys allCountrysFech={allCountrysFech}></Countrys>
   </Suspense>
  </>;
}

export default App;
