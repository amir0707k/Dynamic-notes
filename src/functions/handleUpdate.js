export const handleUpdate = (note, setNotes, title, noteTitle, setIsEditing, bgColor) => {
    const editedNote = {
        ...note,
        title,
        note:noteTitle,
        background:bgColor
    }
    setNotes((prevNotes) =>
      prevNotes.map((item) => (item === note ? editedNote : item))
    );

    setIsEditing(false)
}