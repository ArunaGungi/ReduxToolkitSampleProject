import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { getCats } from "./store/slices/catSlice";

function App() {
  const dispatch = useDispatch();
  const catsData = useSelector((state) => state.cats.cats.data);

  useEffect(() => {
    console.log("hello from useeffect");
    dispatch(getCats());
  }, [dispatch]);

  console.log("dfsdsfd",catsData);

  return (
    <div className="App">
      <h1>CAT SPECIES GALLERY</h1>
      <p>
        Images of different species of cats.Lots of cats for your viewing
        pleasure
      </p>
      <hr />
      <div className="Gallery">
      {catsData.map((cat,id) => (
        <>
        <div key={cat.id} className="row">
            <div className="column column-left">
              <img src={cat.url} width="200" height="200"/>
            </div>
            <div className="column column-right">
              <h2>I hate cats, but still displaying them...........</h2>
            </div>
        </div>
        </>
      ))}
      </div>
    </div>
  );
}

export default App;
