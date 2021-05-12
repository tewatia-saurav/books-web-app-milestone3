import Search from "./search";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";
import axios from "axios";

const BookList: React.FC = () => {
  const [search, setSearch] = React.useState({
    text: "",
    searchBy: "",
  });

  const [books, setBooks] = React.useState([]);

  useEffect(() => {
    let url = "";

    if (search.text === "") {
      url = "/books";
    } else if (search.searchBy === "price") {
      let txt = search.text;
      let mid = txt.indexOf("-");

      let min = txt.slice(0, mid);
      let max = txt.slice(mid + 1, txt.length);

      url = `/books/priced/${min}/${max}`;
    } else {
      url = `/books/${search.searchBy}/${search.text}`;
    }
    // fetch(url)
    // .then(res=>res.json())
    // .then(data=>setBooks(data))
    axios
      .get(url)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => console.log("error" + err.message));
  }, [search]);

  React.useEffect(() => {
    axios
      .get("/books")
      .then((res) => {
        setBooks(res.data);
        
      })
      .catch((err) => {
        alert("Book Not found");
      });
  }, []);

  return (
    <div>
      <Search
        onSearch={(txt: string, searchBy: string) =>
          setSearch({ text: txt, searchBy: searchBy })
        }
      ></Search>
      <div className="books-list">
        {/* {console.log(search)} */}
        {books.map((book: any, index: number) => {
          return (
            <div className="book-display" key={index} title={book.title}>
              <img src={book.cover} alt={book.title} />
              <h6>
                <Link to={`/bookdetails/${book._id}`}>
                  {book.title.length <= 18
                    ? book.title
                    : book.title.slice(0, 18) + "..."}
                </Link>
              </h6>
              <p>By : {book.author}</p>
              <Rating rating={book.rating} />
              <p className="details">Price : ₹ {book.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookList;
