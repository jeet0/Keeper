import React, { useState } from "react";

function Input(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });


    function handleChange(event) {
        const { name, value } = event.target

        setNote(preValue => {
            return ({
                ...preValue,
                [name]: value
            })
        })

    }

    function add(event){
        props.addList(note)
        event.preventDefault();
        setNote({title:"",content:""});
    }



    return (<div>
        <form>
            <input onChange={handleChange} name="title" placeholder="Title" value={note.title}></input>
            <textarea onChange={handleChange} name="content" placeholder="Take a note" value={note.content} rows="3"></textarea>
            <button onClick={add}>Add</button>
        </form>
    </div>)
}

export default Input;