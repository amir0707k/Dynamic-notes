export const handleColorUpdate = (
  note,
  setNotes,
  bgColor
) => {
  const editedNote = {
    ...note,
    background: bgColor,
  };
  setNotes((prevNotes) =>
    prevNotes.map((item) => (item === note ? editedNote : item))
  );

};
