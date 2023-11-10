import { useState } from "react";

// This import statement allows you to use the 'useState' hook from the React library.

function Create() {
    // Define three pieces of state to manage the input values for title, cover, and author.
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior to handle it with custom logic.

        // Log the title, cover, and author values to the console when the form is submitted.
        console.log("Title: " + title + " Cover: " + cover + " Author: " + author);
    }

    return (
        <div>
            <h3>Hello from create</h3>
            <form onSubmit={handleSubmit}>
                {/* Input fields for editing book title, cover, and author */}
                <div className="form-group">
                    <label>Edit Book Title:</label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }} // Update the 'title' state when the input changes.
                    />
                </div>

                <div className="form-group">
                    <label>Edit Book Cover:</label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }} // Update the 'cover' state when the input changes.
                    />
                </div>

                <div className="form-group">
                    <label>Edit Book Author:</label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }} // Update the 'author' state when the input changes.
                    />
                </div>

                {/* Submit button to add the book */}
                <div>
                    <input type="submit" value="Add Books" />
                </div>
            </form>
        </div>
    );
}

export default Create;
