// Import the 'BookItems' component from "./bookItems".
import BookItems from "./bookItems";

// This is a functional component named 'Books' used for rendering a list of book items.
function Books(props) {
    // Map over the 'myBooks' prop and render a 'BookItems' component for each book in the list.
    return props.myBooks.map(
        (book) => {
            return <BookItems myBook={book}></BookItems>;
        }
    );
}

// Export the 'Books' component for use in other parts of the application.
export default Books;
