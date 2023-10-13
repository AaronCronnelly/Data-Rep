function BookItems(props){
    return(
        // console.log("Bookitems test")
        <div>
            <h1>{props.myBook.title}</h1>
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors}</p>
        </div>
    );

}

export default BookItems;