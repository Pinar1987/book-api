import { useState } from "react";

const BookSearchInput = ({ setBooks }) => {

  const [search, setSearch] = useState("");

  const searchBooks = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${search}`
      );
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  return (
    <form style={{ border: "2px solid #B742FF", width:"50vw", borderRadius: "5px", display: "flex", justifyContent: "space-between" }} onSubmit={searchBooks}>
      <input
        type="text"
        placeholder="Search for a book..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", marginRight: "10px", width: "100%", border:"none" }}
      />
      <button type="submit" style={{backgroundColor: "#B742FF", color: "white", border: "none", borderRadius: "5px" }}>
        Search
      </button>
    </form>
  )
}

export default BookSearchInput