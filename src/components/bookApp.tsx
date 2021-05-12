import Header from "./header";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import BookList from "./bookList";
import AddBook from "./addBook";
import Authors from "./authorsList";
import Login from "./login";
import Signup from "./signup";
import BookDetails from "./bookDetails";



const BookApp = () =>{
    return(
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/"> <BookList /></Route>
                <Route path="/bookdetails/:bookid" component={BookDetails}/>
                <Route exact path="/addbook"> <AddBook /></Route>
                <Route exact path="/authors"> <Authors /></Route>
                <Route exact path="/login"> <Login /></Route>
                <Route exact path="/signup"> <Signup /></Route>
            </Switch>
           
        </BrowserRouter>
    )
}

export default BookApp;