import styles from './new-post.module.css';
import { useState } from 'react';

function NewPost({onIgnore, onAddPost}){
    const [enteredBody, setEnteredBody] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");

    function bodyChangeHandler(event){
        setEnteredBody(event.target.value);
    }
    function authorChangeHandler(event){
        setEnteredAuthor(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();
        const postData = {
            body: enteredBody,
            author: enteredAuthor,
        }
        onAddPost(postData);
        onIgnore()
    }

    return(
        <form className={styles.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor={"body"}>Text</label>
                <textarea id={"body"} required rows={3} onChange={bodyChangeHandler}/>
            </p>
            <p>
                <label htmlFor={"name"}>Name</label>
                <textarea id={"name"} type={"text"} required onChange={authorChangeHandler}/>
            </p>
            <p className={styles.actions}>
                <button onClick={onIgnore} type={"button"}>Cancel</button>
                <button>Submit</button>
            </p>
        </form>
    )
}

export default NewPost;