import Card from 'react-bootstrap/Card';
function BookItems(props) {
    return (
        // console.log("Bookitems test")
        <div>
            {/* <h1>{props.myBook.title}</h1>
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors}</p> */}
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

export default BookItems;