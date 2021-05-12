import axios from "axios";
import { useEffect, useState } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import CustomButton from "./customButton";
import { confirmDelete, fireAlert } from "./dependencies/alert";
import Rating from "./rating";

type Params = {
  bookid: string;
};

const BookDetails = ({ match }: RouteComponentProps<Params>) => {
  const history = useHistory();
  const [book, setBook] = useState({
    _id: "",
    title: "",
    author: "",
    price: "",
    rating: "",
    cover: "",
    authorurl: "",
    description: "",
  });

  const [displayText, setDisplayText] = useState("");

  const [textstate, setTextState] = useState("collapsed");

  useEffect(() => {
    setDisplayText(book.description.slice(0, 220) + "...");
  }, [book]);

  useEffect(() => {
    axios
      .get(`/books/${match.params.bookid}`)
      .then((res) => {
        setDisplayText(res.data.desciption);
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleText = () => {
    if (textstate === "collapsed") {
      setDisplayText(book.description);
      setTextState("expanded");
    } else if (textstate === "expanded") {
      setDisplayText(book.description.slice(0, 220) + "...");
      setTextState("collapsed");
    }
  };

  const previousPage = () => {
    history.push("/");
    return;
  };

  const handelDelete = (id: any) => {
    // confirmDelete("Are You sure?","You won't be able to revert this!","warning")


    let token = localStorage.getItem("token");
    axios
      .delete(`/books/delete/${match.params.bookid}`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        fireAlert("Success..!!", "Book deleted", "success");
        history.push("/");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          fireAlert(
            "Not Authorized",
            "You need to login to use this functonality",
            "error"
          );
        } else {
          fireAlert("Warning", err, "warning");
        }
      });
    
  };

  return (
    <div className="book-details">
      <h1>{book.title}</h1>
      <img src={book.cover} alt={book.title} />
      <h3>By : {book.author}</h3>
      <h5>Price : ₹ {book.price}</h5>
      {/* <h5>Rating : {book.rating}</h5> */}
      <h5>
        <Rating rating={Number(book.rating)} />
      </h5>
      <fieldset>
        <legend>Description :</legend>
        <p>
          {displayText}
          <p onClick={handleText}>
            {textstate === "collapsed" ? "Read more" : "Read less"}
          </p>
        </p>
      </fieldset>

      <CustomButton
        text=""
        icon="fas fa-backspace"
        customStyle={{ color: "black" }}
        onclickaction={() => previousPage()}
        title="Go Back"
      />
      <CustomButton
        text=""
        icon="fas fa-trash-alt"
        customStyle={{ color: "red" }}
        onclickaction={function () {
          handelDelete(book._id);
        }}
        title="Delete Book"
      />
    </div>
  );
};

export default BookDetails;
