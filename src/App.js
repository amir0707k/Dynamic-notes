import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import ListComponent from "./Components/ListComponent";
import InputComponent from "./Components/MainComponent";
import BackToTop from "./Components/BackToTop";

function App() {
 
  const localStorageArray = JSON.parse(localStorage.getItem("notes")) || [];
   const [notes, setNotes] = useState(localStorageArray);
  console.log(localStorageArray);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <div>
      <Header setSearchQuery={setSearchQuery} />
      <InputComponent notes={notes} setNotes={setNotes} />
      <ListComponent
        searchQuery={searchQuery}
        notes={notes}
        setNotes={setNotes}
      />
      <BackToTop/>
    </div>
  );
}

export default App;
