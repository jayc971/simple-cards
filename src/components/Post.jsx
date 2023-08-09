import styles from './Post.module.css';
import {useState} from "react";

function Post({author, body}){
    return <li className={styles.post} style={{fontSize: "30px", textAlign:"left"}}>
        <h2 className={styles.author}>{author}</h2>
        <p className={styles.body}>{body}</p>
    </li>
}

export default Post;