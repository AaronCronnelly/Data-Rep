import BookItem from "./bookItem";

function Books(props){

    return props.myBooks.map(
        (book)=>{
            return <BookItem myBook={book} key={book._id} reload={()=>{props.Reload();}}></BookItem>
        }
    );

}

export default Books;