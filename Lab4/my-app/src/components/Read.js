// Import the 'Books' component from the "./books" module.
import React from "react";
import {useEffect,useState} from "react";
import Books from "./books";
import axios from "axios";


// This is a functional component named 'Read' used for displaying a list of books.
function Read() {
    
    const [data,setData]=useState([]);
    useEffect(
        ()=>{
            axios.get("http://www.jsonblob.com/1164846445852745728").then(
                (response)=>{
                    setData(response.data.myBooks);
                }
            ).catch()
        },[]
    );

    return (
        <div>
            {/* Render the 'Books' component, passing the book data as 'myBooks' prop. */}
            <Books myBooks={data}></Books>
        </div>
    );
}

// Export the 'Read' component for use in other parts of the application.
export default Read;
