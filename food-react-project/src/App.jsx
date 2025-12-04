import { Suspense } from "react";
import "./App.css";
import Menus from "./component/Menus";

function App() {
  const foodFech = fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a")
  .then((res) => res.json());

  return (
    <>
      <Suspense fallback={<h1>Food is loading...</h1>}>
        <Menus foodFech={foodFech}></Menus>
      </Suspense>
    </>
  );
}

export default App;
