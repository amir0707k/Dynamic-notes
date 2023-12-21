export const handleDelete = (note, setNotes) => {
  setNotes((prevNotes) => prevNotes.filter((item) => item !== note));
};
