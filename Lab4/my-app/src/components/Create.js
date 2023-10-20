import {useState} from "react";
// This is a functional component named 'Create' used for rendering a simple greeting message.
function Create() {
    const [title, setTitle]=useState('');
    const [cover, setCover]=useState('');
    const [auther, setAuther]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();

        console.log("Title: "+title+
        " Cover: "+ cover+
        " Auther: "+auther);
    }

    return (
        <div>
            {/* Display a heading to greet the user. */}
            <h3>Hello from create</h3>
            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>

                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={auther}
                        onChange={(e) => { setAuther(e.target.value) }}
                    />
                </div>

                <div>
                    <input type="wubmit" value="Add Books"></input>
                </div>
            </form>
        </div>
    );
}

// Export the 'Create' component for use in other parts of the application.
export default Create;

