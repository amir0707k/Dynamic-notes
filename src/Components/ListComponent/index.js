import React, { useEffect, useState } from "react";
import Card from "../Cards";
import "./styles.css";
import { handleSearch } from "../../functions/handleSearch";
import { motion } from "framer-motion";
function ListComponent({ searchQuery, notes, setNotes }) {


  const [bgColor, setBgColor] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);
  useEffect(() => {
    handleSearch(filteredNotes, notes, setNotes, searchQuery, setFilteredNotes);
  }, [searchQuery, notes]);

  return (
    <div className="mainpage-grid">
      {filteredNotes.map((note) => {
        return (
          <Card
            note={note}
            setNotes={setNotes}
            bgColor={bgColor}
            setBgColor={setBgColor}
            key={note.key}
            id={note.key}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          />
        );
      })}
    </div>
  );
}

export default ListComponent;
