export const handleSearch = (filteredNotes, notes, setNotes, searchQuery, setFilteredNotes) => {
  if (filteredNotes) {
    const filtered = notes.filter((note) => {
      return (
        note.title.toLowerCase().includes(searchQuery.trim().toLowerCase()) ||
        note.note.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
    });
    setFilteredNotes(filtered);
  }
  
};