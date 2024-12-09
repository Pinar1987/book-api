
import { useState } from "react";
import BookCard from "../components/BookCard";
import BookSearchInput from "../components/BookSearchInput";
import Navbar from "../components/Navbar";
import backgroundImage from "../images/background.png"

const BookSearch = () => {
    const [books, setBooks] = useState([]);

    return (
        <div style={{backgroundImage:`url(${backgroundImage})`}}>

            <Navbar />
            <div style={{ padding: "20px", display:"flex", alignItems:"center", flexDirection:"column"  }}>
                
                <BookSearchInput setBooks={setBooks} />
                <div style={{ marginTop: "20px" }}>
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BookSearch