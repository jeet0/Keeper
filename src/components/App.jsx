import React , {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Input from "./Input";

function App(){
    const [noteList,setNotes] = useState([]);
    function add(note){
        setNotes(preNotes =>{
            return [...preNotes,note]
        })
    }
    function deleteNote(id){
        setNotes(preNotes =>{
            return preNotes.filter((value,index) => index !== id)
        })
    }
    return <div>
        <Header />
        <Input addList={add}/>
        {noteList.map((e,index) => <Note key={index} id={index} title={e.title} content={e.content} onDelete={deleteNote}/>)}
        <Footer />
    </div>
}

export default App;