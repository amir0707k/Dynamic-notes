export const handleSave = (notes, setNotes, title, note, setTitle, setNote) => {
  
    if(note.trim()==="" && title.trim() ===""){
      setTitle("Enter some title");
      setNote("Enter some description");
      return
    }else{
      setNotes([
      {
        title: title,
        note: note,
        background: "",
        key:
          new Date().getTime().toString() + Math.floor(Math.random() * 1000000),
      },
      ...notes,
    ]);
    }
    
  
  
  setTitle("");
  setNote("");
};
