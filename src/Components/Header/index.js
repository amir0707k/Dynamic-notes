import React, {useRef, useEffect, useState} from "react";
import NotesRoundedIcon from "@mui/icons-material/NotesRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import "./styles.css";
import { Tooltip } from "@mui/material";
import { motion } from "framer-motion";


function Header({setSearchQuery}) {
    const [isClicked, setIsClicked] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        document.addEventListener("click" , handleClickOutside)
    }, [])
    
    const handleClickOutside = (e) => {
        if(!ref.current.contains(e.target)){
            setIsClicked(false);
            
        }else{
            
            setIsClicked(true);
        }
    }


  return (
    <div className="header">
      <Tooltip title="Notes">
        <motion.div
          className="left"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <NotesRoundedIcon className="notes-icon" />
          <p className="notes-heading">
            No<span style={{ color: "white" }}>t</span>es
          </p>
        </motion.div>
      </Tooltip>
      <Tooltip title="Search by title or content">
        <div
          className={`right ${isClicked ? "clicked" : ""}`}
          ref={ref}
          // style={{ backgroundColor: "rgb(251,188,4, 0.8)" }}
        >
          <SearchRoundedIcon
            className="search-icon"
            style={{ color: "white", fontSize: "1rem" }}
          />
          <input
            placeholder="Search by title or content"
            className="search-input"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </Tooltip>
    </div>
  );
}

export default Header;