
import { Suspense } from "react";
import "./App.css";
import Movies from "./Movies/movies";


function App() {

  const moviesFech = fetch("https://api.sampleapis.com/movies/animation")
  .then(res => res.json());

  return (
    <>
      <Suspense fallback={<h2> Movies are loading...</h2>}>
         <Movies moviesFech={moviesFech}></Movies>
      </Suspense>
    </>
  );
}

export default App;
