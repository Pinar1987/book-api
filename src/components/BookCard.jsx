
const BookCard = ({book}) => {

    return(
        <div
        
        style={{
          border: "1px solid #ddd",
          padding: "10px",
          marginBottom: "10px",
          display: "flex",
          gap: "25px",
        }}
      >
        <img
          src={book.volumeInfo.imageLinks?.thumbnail || "placeholder.jpg"}
          alt={`${book.volumeInfo.title} kapak resmi`}
          style={{ width: "100px", height: "150px" }}
        />

        <div>
          <h3>{book.volumeInfo.title}</h3>
          <p>Author: {book.volumeInfo.authors?.join(", ") || "Unknown"}</p>
          <p>
            Published Date: {book.volumeInfo.publishedDate || "Unknown"}
          </p>
          <p>
            Description:{" "}
            {book.volumeInfo.description
              ? book.volumeInfo.description.substring(0, 100) + "..."
              : "No description available"}
          </p>
        </div>
      </div>
    ) 
}

export default BookCard