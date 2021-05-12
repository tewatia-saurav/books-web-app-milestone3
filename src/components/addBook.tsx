import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { fireAlert } from "./dependencies/alert";

const AddBook: React.FC = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [cover, setCover] = useState("");
  const [authorurl, setAuthorurl] = useState("");
  const [description, setDescription] = useState("");

  const history = useHistory();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let newBook = {
      title: title,
      author: author,
      price: price,
      rating: rating,
      cover: cover,
      authorpic: authorurl,
      description: description,
    };
    let token = localStorage.getItem("token");
    axios
      .post("/books/addbook", newBook, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        fireAlert("Success", "New Book Created", "success");

        history.push("/");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          fireAlert(
            "Not Authorized",
            "You need to login to use this functionality",
            "error",
            "Oops!!"
          );
        } else if (err.response.status === 403) {
          fireAlert(
            "Not Authorized",
            "You need to login Again",
            "error",
            "Oops!!"
          );
        } else {
          fireAlert("Warning", err, "warning");
        }
      });
  };
  return (
    <div className="form">
      <form>
        <div className="form-outline mb-4">
          {/* <label className="form-label" htmlFor="form4Example1">Name</label> */}
          <input
            type="text"
            id="booktitle"
            name="title"
            className="form-control"
            placeholder="Book Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="bookauthor"
            name="author"
            className="form-control"
            placeholder="Author Name"
            onChange={(e) => setAuthor(e.target.value)}
          />
          {/* <label className="form-label" htmlFor="form4Example2">Email address</label> */}
        </div>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="bookprice"
                name="price"
                className="form-control"
                placeholder="Price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <input
                type="text"
                id="bookraring"
                name="rating"
                className="form-control"
                placeholder="Rating"
                onChange={(e) => setRating(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="form-outline mb-4">
          <input
            type="url"
            id="bookcover"
            name="cover"
            className="form-control"
            placeholder="book cover pic url"
            onChange={(e) => setCover(e.target.value)}
          />
          {/* <label className="form-label" htmlFor="form4Example2">Email address</label> */}
        </div>
        <div className="form-outline mb-4">
          <input
            type="url"
            id="rating"
            name="authorurl"
            className="form-control"
            placeholder="author pic url"
            onChange={(e) => setAuthorurl(e.target.value)}
          />
          {/* <label className="form-label" htmlFor="form4Example2">Email address</label> */}
        </div>

        <div className="form-outline mb-4">
          <textarea
            className="form-control"
            name="description"
            id="form4Example3"
            rows={3}
            placeholder="Description of book"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block mb-4 submit-btn"
          onClick={handleSubmit}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBook;
