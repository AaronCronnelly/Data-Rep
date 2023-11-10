import Card from 'react-bootstrap/Card';

function BookItems(props) {
    return (
        // This is a functional component for rendering book items.
        <div>
            {/* Uncomment the lines below to display book title, thumbnail, and authors. */}
            {/* <h1>{props.myBooks.title}</h1>
            <img src={props.myBooks.thumbnailUrl} alt={props.myBooks.title}></img>
            <p>{props.myBooks.authors}</p> */}

            {/* Instead of the uncommented lines above, we use the Card component from 'react-bootstrap' to display book details. */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.myBooks.thumbnailUrl} alt={props.myBooks.title} />
                <Card.Body>
                    <Card.Title>{props.myBooks.title}</Card.Title>
                    <Card.Text>
                        {props.myBooks.authors}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

// Export the BookItems component for use in other parts of the application.
export default BookItems;
