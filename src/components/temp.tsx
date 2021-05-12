const Temp = () =>{
    return (
      <div id="addBookTray">
      <br/>
  
      <form className="form" id="bookForm" name="addBookForm" >
          <fieldset>
              <legend>Add  Book  Details</legend>
              <br/>
          <label>Book Id : </label><label id="bookId"></label><br/><br/>
          <input type="text" id="title" placeholder="Book title"/>
          <input type="text" id="author" placeholder="Author of Boook"/>
          <input type="number" id="price" placeholder="Price of Book"/><br/>
          <input type="number" id="rating" placeholder="Ratings" step="0.1" min="0" max="5"/><br/>
          <input type="url" id="cover" placeholder="url for cover picture"/><br/>
          <textarea id="description" placeholder="Descripton about Book "></textarea><br/>
          <input type="submit" value="Submit"/>
          </fieldset>
      </form>
  
  </div>
    )
}

export default Temp;