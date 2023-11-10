import React, { useEffect, useState } from "react";
import Books from "./books"; // Import the 'Books' component for rendering book data.
import axios from "axios";

function Read() {
    const [data, setData] = useState([]); // Initialize a state variable 'data' to store book data.

    useEffect(() => {
        // Use the 'useEffect' hook to make an HTTP GET request to fetch book data.
        axios.get("http://localhost:4000/api/books")
            .then((response) => {
                console.log(response.data); // Log the data received from the API
                // When the request is successful, update the 'data' state with the fetched book data.
                setData(response.data.myBooks);
            })
            .catch(error => {
                console.error(error); // Log any errors that occur during the HTTP request.
            });
    }, []); // The empty dependency array ensures this effect runs only once after component mounting.

    return (
        <div>
            {/* Render the 'Books' component, passing the book data as the 'myBooks' prop. */}
            <Books myBooks={data} />
        </div>
    );
}

export default Read;
