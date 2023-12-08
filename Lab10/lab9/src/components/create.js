import { useState } from "react";
import axios from "axios";

function Create() {

    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log("Title: "+title+
        " Cover: "+cover+
        " Author: "+author);

        const book = {
            title:title,
            cover:cover,
            author:author
        };

        axios.post('http://localhost:4000/api/book',book)
        .then()
        .catch();

    }
    // some comment
    return (
        <div>
            <h2>Hello from create Component!</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit"
                    value="Add Book">
                        </input>
                </div>
            </form>
        </div>
    );

}
export default Create;