import Card from 'react-bootstrap/Card';

function BookItems(props) {
    return (
        // This is a functional component for rendering book items.
        <div>
            {/* Uncomment the lines below to display book title, thumbnail, and authors. */}
            {/* <h1>{props.myBook.title}</h1>
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors}</p> */}

            {/* Instead of the uncommented lines above, we use the Card component from 'react-bootstrap' to display book details. */}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.myBook.thumbnailUrl} />
                <Card.Body>
                    <Card.Title>{props.myBook.title}</Card.Title>
                    <Card.Text>
                        {props.myBook.authors}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

// Export the BookItems component for use in other parts of the application.
export default BookItems;
