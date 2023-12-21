export const handleSave = (notes, setNotes, title, note, setTitle, setNote) => {
  
  
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
  
  
  setTitle("");
  setNote("");
};
