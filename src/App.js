import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setItems } from "./redux/itemsSlice";
import SearchBar from "./components/SearchBar";
import ItemList from "./components/ItemList";
import "./App.css";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const dummyItems = Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
    }));
    dispatch(setItems(dummyItems));
  }, [dispatch]);

  return (
    <div className="App">
      <div>
      <SearchBar />
      <ItemList />
      </div>
    </div>
  );
};


export default App;
